import { NextResponse } from "next/server";
import { NIGERIA_STATES } from "@/lib/nigeria-locations";

const ORS_URL = "https://api.openrouteservice.org/v2/directions/driving-car/geojson";

// Live road distance and duration between two Nigerian states, via OpenRouteService (ORS).
//
// Setup: this route needs ORS_API_KEY. It's set to Tranzent's own ORS account key in
// .env.local for local dev and in the Vercel environment variables for deployed builds.
// If the key ever needs replacing, create a new one at
// https://openrouteservice.org/dev/#/signup (free, no card needed) and update both places.
//
// Fallback: I built this so the quote form works with or without the key. If the key is
// missing, or ORS fails or times out, the route returns an error and the client falls back
// to the built-in state-adjacency estimate. Nothing breaks either way, the quote just uses
// the estimated distance instead of the live one.

export async function POST(request) {
  const apiKey = process.env.ORS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "missing_key" }, { status: 501 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const { pickupState, deliveryState } = body || {};
  const origin = NIGERIA_STATES.find((s) => s.name === pickupState);
  const destination = NIGERIA_STATES.find((s) => s.name === deliveryState);

  if (!origin || !destination) {
    return NextResponse.json({ error: "invalid_states" }, { status: 400 });
  }

  // Note: the distance is calculated between each state's reference point (its capital or
// major city), the same points the built-in estimate uses. It does not use the street
// address entered in the form, so it's an approximate figure for the quote, not an exact
// door-to-door distance.
//
// For true address-to-address routing, the addresses would first need to be geocoded to
// coordinates (for example with the ORS geocoding endpoint) before calling the directions
// API.

  try {
    const res = await fetch(ORS_URL, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coordinates: [
          [origin.lng, origin.lat],
          [destination.lng, destination.lat],
        ],
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "ors_error", status: res.status }, { status: 502 });
    }

    const data = await res.json();
    const feature = data.features?.[0];
    if (!feature) {
      return NextResponse.json({ error: "no_route" }, { status: 502 });
    }

    return NextResponse.json({
      distanceKm: Math.round(feature.properties.summary.distance / 1000),
      durationMinutes: Math.round(feature.properties.summary.duration / 60),
      geometry: feature.geometry.coordinates, // [[lng, lat], ...] — a real road-following route
    });
  } catch {
    return NextResponse.json({ error: "network_error" }, { status: 502 });
  }
}