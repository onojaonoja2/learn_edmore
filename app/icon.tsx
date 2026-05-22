import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
          <path d="M24 12L13 24h6v10h10V24h6L24 12z" fill="white" opacity="0.95"/>
          <path d="M18 22h12" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
          <path d="M24 4l-4 5h8l-4-5z" fill="#FBBF24"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
