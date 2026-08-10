import { ImageResponse } from "next/og";

export const alt = "Tranzent — Beyond Delivery. Vehicle Transportation & Logistics.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #0B1424 0%, #121A2B 55%, #0B1424 100%)",
          padding: "80px",
        }}
      >
        <svg
          viewBox="82 116 402 396"
          width="340"
          height="340"
          style={{ position: "absolute", top: -40, right: -30, opacity: 0.14 }}
        >
          <g fill="#25AAE1">
            <path d="m260.629 119.476 218.051 11.43a4.247 4.247 0 0 1 4.022 4.388l-7.34 211.804c-7.048 37.245-41.971 37.508-44.809 37.228-31.992-3.147-42.481-17.307-40.907-50.348 1.774-34.924 6.351-80.251 10.064-120.657.405-4.409-3.144-8.18-7.571-8.119-52.22.719-100.217 5.506-139.929.143-19.995-2.7-34.685-20.312-34.585-44.437 1.527-20.408 9.963-37.761 43.004-41.432" />
            <path d="m128.088 244.521 218.051 11.43a4.247 4.247 0 0 1 4.022 4.388l-7.34 211.804c-7.048 37.245-41.971 37.508-44.809 37.228-31.992-3.147-42.481-17.307-40.907-50.348 1.774-34.924 6.351-80.251 10.064-120.657.405-4.409-3.144-8.18-7.571-8.119-52.22.719-100.217 5.506-139.929.143-19.995-2.7-34.685-20.312-34.585-44.437 1.527-20.408 9.963-37.76 43.004-41.432" />
          </g>
        </svg>

        <div style={{ display: "flex", alignItems: "center", marginBottom: 36 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              border: "5px solid #3E4E6B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 28,
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 14, height: 46, background: "#25AAE1", borderRadius: 3 }} />
            <div style={{ position: "absolute", width: 34, height: 14, background: "#25AAE1", borderRadius: 3, top: 22 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 600, color: "#7FC4E8", letterSpacing: 4, textTransform: "uppercase" }}>
              Tranzent Limited
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: "#FFFFFF", letterSpacing: -3, lineHeight: 1 }}>
          Beyond Delivery
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#A9B7CC", fontWeight: 400 }}>
          Vehicle Transportation &amp; Logistics — Nigeria
        </div>

        <div style={{ display: "flex", marginTop: 56, alignItems: "center" }}>
          <div style={{ width: 46, height: 6, background: "#1AB42E", borderRadius: 3, marginRight: 14 }} />
          <div style={{ width: 46, height: 6, background: "#25AAE1", borderRadius: 3, marginRight: 14 }} />
          <div style={{ width: 46, height: 6, background: "#F7941D", borderRadius: 3 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}