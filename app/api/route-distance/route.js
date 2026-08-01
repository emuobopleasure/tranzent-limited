import { NextResponse } from "next/server";
import { NIGERIA_STATES } from "@/lib/nigeria-locations";

const ORS_URL = "https://api.openrouteservice.org/v2/directions/driving-car/geojson";

// Requires ORS_API_KEY in your environment (.env.local) — get a free key at
// https://openrouteservice.org/dev/#/signup (no card required). Until a key
// is set, this route returns { error: "missing_key" } and the client falls
// back to the built-in state-adjacency estimate automatically — nothing
// breaks either way.
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

  // Note: this routes between each state's reference coordinate (its
  // capital/major city), same as the built-in estimate — not the specific
  // street address entered in the form. True address-to-address routing
  // would need a geocoding step first.
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