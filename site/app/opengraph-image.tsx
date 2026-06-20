import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Surfrider Pool Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06b6d4 0%, #0c2a4d 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: "1.1",
            marginBottom: "24px",
          }}
        >
          Surfrider Pool Service
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#bae6fd",
            textAlign: "center",
            marginBottom: "48px",
            maxWidth: "800px",
          }}
        >
          Your trusted partner for professional pool care in Pinellas County.
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#ffffff",
            fontWeight: "600",
          }}
        >
          727.453.1330
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
