export default function BoardScreenshot() {
  const cards = [
    { emoji: '💧', label: 'I need water', color: '#3B82F6' },
    { emoji: '🍽️', label: 'I am hungry', color: '#F59E0B' },
    { emoji: '🆘', label: 'I need help', color: '#EF4444' },
    { emoji: '🎮', label: 'I want to play', color: '#8B5CF6' },
    { emoji: '😊', label: 'I am happy', color: '#10B981' },
    { emoji: '😴', label: 'I want to sleep', color: '#6366F1' },
  ]

  return (
    <svg viewBox="0 0 256 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="boardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="256" height="480" fill="url(#boardBg)" />

      {/* Header */}
      <rect x="0" y="0" width="256" height="56" fill="rgba(0,0,0,0.2)" />
      <text x="128" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">VoiceBridge</text>
      <text x="128" y="42" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="Inter, sans-serif">Hi, Musa 👋</text>

      {/* Cards grid - 2 columns x 3 rows */}
      {cards.map((card, i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        const x = 12 + col * 120
        const y = 68 + row * 130

        return (
          <g key={i}>
            <rect x={x} y={y} width="108" height="118" rx="16" fill="white" opacity="0.92" />
            <text x={x + 54} y={y + 52} textAnchor="middle" fontSize="36" fontFamily="serif">{card.emoji}</text>
            <rect x={x + 8} y={y + 78} width="92" height="26" rx="8" fill={card.color} opacity="0.15" />
            <text x={x + 54} y={y + 96} textAnchor="middle" fill={card.color} fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">{card.label}</text>
          </g>
        )
      })}

      {/* Bottom nav */}
      <rect x="0" y="460" width="256" height="20" fill="rgba(0,0,0,0.2)" />
      <text x="42" y="474" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif">Board</text>
      <text x="128" y="474" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="Inter, sans-serif">History</text>
      <text x="214" y="474" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="Inter, sans-serif">Settings</text>
    </svg>
  )
}
