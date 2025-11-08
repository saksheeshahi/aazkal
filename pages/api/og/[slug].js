import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { pathname, origin } = new URL(req.url);
    const slug = pathname.split("/").pop();

    // ✅ Base URL for Edge-safe fetches
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || origin || "http://localhost:3000";
    const jsonUrl = `${baseUrl}/data/celebrityPosts.json`;

    // ✅ Load celebrity data
    const res = await fetch(jsonUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load celebrity data");
    const data = await res.json();

    const celeb = data.find((p) => p.slug === slug);
    if (!celeb) return new Response("Not Found", { status: 404 });

    // ✅ Style and assets
    const accent = celeb.accentColor || "#C2185B";
    const gradient =
      celeb.gradient ||
      "linear-gradient(135deg, rgba(255,240,246,0.95) 0%, rgba(255,255,255,0.98) 70%)";

    const imageUrl = `${baseUrl}${celeb.heroImageUrl}`;
    const logoUrl = "http://localhost:3000/logo-bag.png"; // Absolute URL (Edge-safe)
    const instaIcon = `${baseUrl}/instagram-icon.png`; // Optional
    const showInsta = !!celeb.instagramCaption;

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            fontFamily: "Poppins, sans-serif",
            color: "#4A2C2A",
            overflow: "hidden",
          }}
        >
          {/* 🔹 Background Image */}
          <img
            src={imageUrl}
            width="1200"
            height="630"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.25,
              filter: "blur(2px)",
              zIndex: 0,
            }}
          />

          {/* 🔹 Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: gradient,
              zIndex: 1,
            }}
          />

          {/* 🔹 Main Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "80px",
              zIndex: 2,
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#6B3E26",
                textShadow: "1px 1px 3px rgba(255,255,255,0.6)",
                maxWidth: 900,
              }}
            >
              <span>{celeb.celebrityName}’s </span>
              <span>&nbsp;{celeb.eventName} Look ✨</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 38,
                color: accent,
                fontWeight: 600,
                flexWrap: "wrap",
                textShadow: "0.5px 0.5px 2px rgba(255,255,255,0.7)",
                maxWidth: 900,
              }}
            >
              {celeb.outfitHighlight}
            </div>

            {/* 🔹 Instagram Caption (if exists) */}
            {showInsta && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  borderRadius: "12px",
                  padding: "14px 24px",
                  fontSize: 28,
                  fontStyle: "italic",
                  color: "#5A3A33",
                  maxWidth: 900,
                }}
              >
                <img
                  src={instaIcon}
                  width="42"
                  height="42"
                  style={{ borderRadius: "50%" }}
                />
                <span>{celeb.instagramCaption}</span>
              </div>
            )}
          </div>

          {/* 🔹 Footer Bar with Brand */}
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "rgba(255,235,240,0.95)",
              borderTop: "1px solid rgba(255,200,220,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "60px",
              zIndex: 10,
              position: "relative",
            }}
          >
            <img
              src={logoUrl}
              width="100"
              height="100"
              style={{
                objectFit: "contain",
                borderRadius: "12px",
                marginRight: "20px",
                zIndex: 10,
                background: "transparent",
              }}
            />
            <div
              style={{
                fontSize: 32,
                color: "#9C4A3E",
                fontWeight: 700,
              }}
            >
              aazkal.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (err) {
    console.error("❌ OG Generation Error:", err);
    return new Response("Internal Error", { status: 500 });
  }
}
