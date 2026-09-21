import { ImageResponse } from "next/og";
import { releases } from "@/lib/releases";
import { site } from "@/lib/site";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#e8e9e4";
const INK = "#1a1a17";
const MUTED = "#55554e";
const FAINT = "#67675f";
const SIGNAL = "#1f4d3d";
const RULE = "#d2d2ca";

/**
 * The social card shows the same thing the homepage leads with: the ledger.
 * Satori is flexbox-only, so every container sets display explicitly.
 */
export default function Image() {
  const shown = releases.slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PAPER,
          color: INK,
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: "-0.02em" }}>
          {site.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.14em",
              color: FAINT,
              marginBottom: 14,
            }}
          >
            SHIPPING RECORD
          </div>

          {shown.map((release) => (
            <div
              key={release.version}
              style={{
                display: "flex",
                alignItems: "center",
                borderTop: `1px solid ${RULE}`,
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 24,
              }}
            >
              <div style={{ display: "flex", width: 110, color: SIGNAL }}>
                {release.version}
              </div>
              <div style={{ display: "flex", color: MUTED }}>
                {release.title}
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 22,
              fontSize: 22,
              color: FAINT,
            }}
          >
            <div style={{ display: "flex" }}>
              {releases.length} releases · React Native · Postgres · TypeScript
            </div>
            <div style={{ display: "flex" }}>rorywalker.dev</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
