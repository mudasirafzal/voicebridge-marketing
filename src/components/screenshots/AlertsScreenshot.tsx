export default function AlertsScreenshot() {
  const alerts = [
    { emoji: '💧', child: 'Musa', message: 'I need water', time: '2 min ago', acked: false },
    { emoji: '🍽️', child: 'Musa', message: 'I am hungry', time: '18 min ago', acked: true },
    { emoji: '🆘', child: 'Sara', message: 'I need help', time: '1 hr ago', acked: true },
    { emoji: '🎮', child: 'Sara', message: 'I want to play', time: '2 hr ago', acked: true },
  ]

  return (
    <svg viewBox="0 0 256 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="256" height="480" fill="#F8FAFC" />

      {/* Header */}
      <rect x="0" y="0" width="256" height="52" fill="#7C3AED" />
      <text x="128" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Notifications</text>
      <text x="128" y="38" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="Inter, sans-serif">4 alerts · 1 unread</text>

      {/* Alerts list */}
      {alerts.map((alert, i) => (
        <g key={i}>
          <rect
            x="8"
            y={60 + i * 100}
            width="240"
            height="88"
            rx="16"
            fill={alert.acked ? 'white' : '#EDE9FE'}
            stroke={alert.acked ? '#E2E8F0' : '#7C3AED'}
            strokeWidth={alert.acked ? 1 : 1.5}
          />
          {/* Emoji circle */}
          <circle cx="36" cy={104 + i * 100} r="20" fill={alert.acked ? '#F1F5F9' : '#7C3AED'} opacity={alert.acked ? 1 : 0.15} />
          <text x="36" y={111 + i * 100} textAnchor="middle" fontSize="18" fontFamily="serif">{alert.emoji}</text>

          {/* Text */}
          <text x="64" y={93 + i * 100} fill="#1E293B" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">{alert.child} tapped a card</text>
          <text x="64" y={107 + i * 100} fill="#334155" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">"{alert.message}"</text>
          <text x="64" y={120 + i * 100} fill="#94A3B8" fontSize="7" fontFamily="Inter, sans-serif">{alert.time}</text>

          {/* Acknowledge button or badge */}
          {!alert.acked ? (
            <g>
              <rect x="158" y={126 + i * 100} width="82" height="18" rx="9" fill="#7C3AED" />
              <text x="199" y={138 + i * 100} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">Acknowledge ✓</text>
            </g>
          ) : (
            <g>
              <rect x="176" y={128 + i * 100} width="60" height="16" rx="8" fill="#10B981" opacity="0.12" />
              <text x="206" y={140 + i * 100} textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">✓ Acknowledged</text>
            </g>
          )}
        </g>
      ))}

      {/* Bottom nav */}
      <rect x="0" y="460" width="256" height="20" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="42" y="474" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Home</text>
      <text x="128" y="474" textAnchor="middle" fill="#7C3AED" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">Alerts 🔔</text>
      <text x="214" y="474" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Settings</text>
    </svg>
  )
}
