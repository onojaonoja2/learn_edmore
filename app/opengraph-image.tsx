import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e40af, #2563eb)",
          padding: 40,
        }}
      >
        <svg width="80" height="80" viewBox="0 0 48 48" fill="none">
          <path d="M24 12L13 24h6v10h10V24h6L24 12z" fill="white" opacity="0.95" />
          <path d="M18 22h12" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.7" />
          <path d="M24 4l-4 5h8l-4-5z" fill="#FBBF24" />
        </svg>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            marginTop: 24,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Learn Edmore
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#bfdbfe",
            textAlign: "center",
            marginTop: 8,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Tutoring Academy — Abuja, Nigeria
        </p>
      </div>
    ),
    { ...size }
  )
}
