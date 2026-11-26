import { ImageResponse } from "next/og";

// The preview card shown when the site is shared on WhatsApp, LinkedIn, X etc.
export const alt = "Noufil Naveed, backend developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#050505", color: "#f2f2f0", padding: "72px 80px" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#a3a3a0" }}>noufilnaveed.com</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Noufil Naveed</div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#a3a3a0" }}>Backend developer building APIs that actually work</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#8a8a86", borderTop: "2px solid #262624", paddingTop: 24 }}>
          <span>Node.js · Express · PostgreSQL · Java · Spring Boot</span>
          <span style={{ color: "#f0b429" }}>Karachi</span>
        </div>
      </div>
    ),
    size
  );
}
