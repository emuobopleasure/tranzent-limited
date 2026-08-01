import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Tranzent Website <onboarding@resend.dev>";

// see the domain-verification note in the project notes for going live.
export async function POST(request) {
  if (!process.env.RESEND_API_KEY || !NOTIFY_EMAIL) {
    return NextResponse.json({ error: "missing_config" }, { status: 501 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const { formType, ...fields } = body || {};

  if (!fields.name || !fields.email || !fields.phone) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const isQuote = formType === "quote";
  const subject = isQuote
    ? `New Quote Request - ${fields.name}`
    : `New Enquiry - ${fields.name}`;

  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
  ];

  if (isQuote) {
    rows.push(
      ["Service Requested", fields.serviceType],
      ["Vehicle Type", fields.vehicleType],
      ["Vehicle Make & Model", fields.vehicleMakeModel],
      [
        "Pickup",
        [fields.pickupAddress, fields.pickupCity, fields.pickupState].filter(Boolean).join(", "),
      ],
      [
        "Delivery",
        [fields.deliveryAddress, fields.deliveryCity, fields.deliveryState].filter(Boolean).join(", "),
      ],
      ["Estimated Distance", fields.distanceKm ? `${fields.distanceKm} km` : null],
      ["Preferred Date", fields.preferredDate],
      ["Additional Details", fields.message]
    );
  } else {
    rows.push(["Preferred Date", fields.preferredDate], ["Message", fields.message]);
  }

  const htmlRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #E2E8F0;color:#5C6C86;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #E2E8F0;color:#0B1424;font-size:14px;">${value}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0B1424;margin-bottom:4px;">${subject}</h2>
      <p style="color:#8C9AB0;font-size:12px;margin-top:0;">${isQuote ? "Quote Request" : "General Enquiry"} from the Tranzent website</p>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">
        ${htmlRows}
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: fields.email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "network_error" }, { status: 502 });
  }
}