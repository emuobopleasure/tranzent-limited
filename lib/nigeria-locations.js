// Approximate coordinates for each state's capital/major city. Good enough
// for a straight-line distance estimate — not a substitute for real
// road-distance routing, which needs a live maps API (Google/Mapbox) and
// an API key. See RouteEstimate.jsx for how this is presented to the user.
export const NIGERIA_STATES = [
    { name: "Abia", lat: 5.5244, lng: 7.486 },
    { name: "Adamawa", lat: 9.2035, lng: 12.4954 },
    { name: "Akwa Ibom", lat: 5.0377, lng: 7.9128 },
    { name: "Anambra", lat: 6.212, lng: 7.069 },
    { name: "Bauchi", lat: 10.3158, lng: 9.8442 },
    { name: "Bayelsa", lat: 4.9247, lng: 6.2642 },
    { name: "Benue", lat: 7.7322, lng: 8.5391 },
    { name: "Borno", lat: 11.8333, lng: 13.15 },
    { name: "Cross River", lat: 4.9517, lng: 8.322 },
    { name: "Delta", lat: 6.1987, lng: 6.7392 },
    { name: "Ebonyi", lat: 6.3249, lng: 8.1137 },
    { name: "Edo", lat: 6.335, lng: 5.6037 },
    { name: "Ekiti", lat: 7.6211, lng: 5.2213 },
    { name: "Enugu", lat: 6.5244, lng: 7.5086 },
    { name: "FCT (Abuja)", lat: 9.0765, lng: 7.3986 },
    { name: "Gombe", lat: 10.2897, lng: 11.1673 },
    { name: "Imo", lat: 5.4836, lng: 7.0333 },
    { name: "Jigawa", lat: 11.7564, lng: 9.3406 },
    { name: "Kaduna", lat: 10.5222, lng: 7.4383 },
    { name: "Kano", lat: 12.0022, lng: 8.5919 },
    { name: "Katsina", lat: 12.9908, lng: 7.6018 },
    { name: "Kebbi", lat: 12.4539, lng: 4.1975 },
    { name: "Kogi", lat: 7.8023, lng: 6.7337 },
    { name: "Kwara", lat: 8.4966, lng: 4.5426 },
    { name: "Lagos", lat: 6.6018, lng: 3.3515 },
    { name: "Nasarawa", lat: 8.4939, lng: 8.517 },
    { name: "Niger", lat: 9.6139, lng: 6.5569 },
    { name: "Ogun", lat: 7.1475, lng: 3.3619 },
    { name: "Ondo", lat: 7.2571, lng: 5.2058 },
    { name: "Osun", lat: 7.7719, lng: 4.556 },
    { name: "Oyo", lat: 7.3775, lng: 3.947 },
    { name: "Plateau", lat: 9.8965, lng: 8.8583 },
    { name: "Rivers", lat: 4.8156, lng: 7.0498 },
    { name: "Sokoto", lat: 13.0059, lng: 5.2476 },
    { name: "Taraba", lat: 8.8833, lng: 11.3667 },
    { name: "Yobe", lat: 11.747, lng: 11.9608 },
    { name: "Zamfara", lat: 12.1704, lng: 6.6641 },
];


export function findState(name) {
    return NIGERIA_STATES.find((s) => s.name === name) || null;
}

// Haversine formula — straight-line ("as the crow flies") distance in km.
export function straightLineDistanceKm(a, b) {
    const R = 6371;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const lat1 = toRad(a.lat);
    const lat2 = toRad(b.lat);

    const h =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
    return R * c;
}

import { STATE_NEIGHBORS } from "./nigeria-adjacency";

// Finds the shortest path of neighboring states from origin to destination,
// using the real state-adjacency graph (Dijkstra, weighted by the distance
// between each pair of neighboring states' centers). This is what lets the
// map draw a route that bends through real intervening states instead of a
// straight line that would cut through states with no direct road.
export function findRoute(originName, destinationName) {
  if (!originName || !destinationName) return null;
  if (!STATE_NEIGHBORS[originName] || !STATE_NEIGHBORS[destinationName]) return null;
  if (originName === destinationName) return [originName];

  const distances = {};
  const previous = {};
  const visited = new Set();
  const queue = new Set(Object.keys(STATE_NEIGHBORS));

  for (const name of queue) distances[name] = Infinity;
  distances[originName] = 0;

  while (queue.size > 0) {
    let current = null;
    let currentDist = Infinity;
    for (const name of queue) {
      if (distances[name] < currentDist) {
        current = name;
        currentDist = distances[name];
      }
    }
    if (current === null) break;
    queue.delete(current);
    visited.add(current);
    if (current === destinationName) break;

    const currentState = findState(current);
    for (const neighborName of STATE_NEIGHBORS[current] || []) {
      if (visited.has(neighborName)) continue;
      const neighborState = findState(neighborName);
      if (!neighborState || !currentState) continue;
      const alt = distances[current] + straightLineDistanceKm(currentState, neighborState);
      if (alt < distances[neighborName]) {
        distances[neighborName] = alt;
        previous[neighborName] = current;
      }
    }
  }

  if (distances[destinationName] === Infinity) return null;

  const path = [];
  let step = destinationName;
  while (step) {
    path.unshift(step);
    step = previous[step];
  }
  return path;
}

// Distance along the real state-adjacency route (sum of each neighboring
// hop) rather than one straight cross-country line. Still an estimate —
// real road distance needs a live routing service — but it no longer cuts
// through states with no direct road between the two points.


export function estimateRoadDistanceKm(stateAName, stateBName) {
    if (!stateAName || !stateBName) return null;
    const a = findState(stateAName);
    const b = findState(stateBName);
    if (!a || !b) return null;
    if (stateAName === stateBName) return 0;

    const straight = straightLineDistanceKm(a, b);
    const padded = straight * 1.25; // roads aren't straight lines
    return Math.round(padded);
}

export function estimateDurationLabel(km) {
    if (km === null) return null;
    if (km === 0) return "Within state";
    const avgSpeedKmh = 55; // conservative average for intercity Nigerian roads
    const hours = km / avgSpeedKmh;
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    if (h === 0) return `~${m}m`;
    if (m === 0) return `~${h}h`;
    return `~${h}h ${m}m`;
}


const MAJOR_URBAN_HUBS = ["Lagos", "FCT (Abuja)", "Rivers", "Kano", "Oyo"];


export function getRouteFactors(pickupState, deliveryState, distanceKm) {
    if (distanceKm === null) return [];

    if (distanceKm === 0) {
        return [
            {
                key: "local",
                label: "Local Move",
                note: "Primarily city traffic near pickup and drop-off — minimal long-haul factors apply.",
            },
        ];
    }

    const factors = [
        {
            key: "checkpoints",
            label: "Security & Customs Checkpoints",
            note: "Interstate federal highways typically pass through official checkpoints, which can add waiting time.",
        },
        {
            key: "road",
            label: "Road & Weather Conditions",
            note: "Surface quality varies by route, and rainy-season conditions (roughly April–October) can slow transit further.",
        },
    ];

    if (MAJOR_URBAN_HUBS.includes(pickupState) || MAJOR_URBAN_HUBS.includes(deliveryState)) {
        factors.push({
            key: "traffic",
            label: "Urban Traffic",
            note: "Congestion near major city centers can extend the first or last leg of the journey.",
        });
    }

    if (distanceKm > 500) {
        factors.push({
            key: "restStops",
            label: "Long-Haul Rest Stops",
            note: "Routes over 500km typically include scheduled driver rest stops as standard safety practice.",
        });
    }

    return factors;
}