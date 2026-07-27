export default function CardConfigScreenshot() {
  return (
    <svg viewBox="0 0 390 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="390" height="700" fill="#f8fafc" />

      {/* Header */}
      <rect width="390" height="56" fill="#7c3aed" />
      <text x="20" y="24" fill="white" fontSize="18" fontFamily="Inter, sans-serif">←</text>
      <text x="195" y="30" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">Manage Cards</text>
      <text x="195" y="46" textAnchor="middle" fill="#ddd6fe" fontSize="11" fontFamily="Inter, sans-serif">Musa's Communication Board</text>
      <rect x="340" y="14" width="36" height="28" rx="8" fill="white" fillOpacity="0.2" />
      <text x="358" y="33" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif">+ Add</text>

      {/* Search bar */}
      <rect x="16" y="68" width="358" height="38" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="36" y="92" fill="#94a3b8" fontSize="13" fontFamily="Inter, sans-serif">🔍  Search cards...</text>

      {/* Filter chips */}
      <rect x="16" y="116" width="68" height="26" rx="13" fill="#7c3aed" />
      <text x="50" y="133" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">All (12)</text>
      <rect x="94" y="116" width="68" height="26" rx="13" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="128" y="133" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="Inter, sans-serif">Active (10)</text>
      <rect x="172" y="116" width="76" height="26" rx="13" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="210" y="133" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="Inter, sans-serif">Hidden (2)</text>
      <rect x="258" y="116" width="74" height="26" rx="13" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="295" y="133" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="Inter, sans-serif">Custom (0)</text>

      {/* Card list */}
      {[
        { emoji: '💧', title: 'I need water', phrase: 'I need water', order: 1, active: true },
        { emoji: '🍽️', title: 'I am hungry', phrase: 'I am hungry', order: 2, active: true },
        { emoji: '🚽', title: 'I need the toilet', phrase: 'I need to use the toilet', order: 3, active: true },
        { emoji: '🆘', title: 'I need help', phrase: 'I need help, please', order: 4, active: true },
        { emoji: '😴', title: 'I want to sleep', phrase: 'I want to sleep', order: 5, active: true },
        { emoji: '🎮', title: 'I want to play', phrase: 'I want to play', order: 6, active: false },
      ].map(({ emoji, title, phrase, order, active }, i) => (
        <g key={title}>
          <rect x="16" y={152 + i * 72} width="358" height="64" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />

          {/* Drag handle */}
          <text x="30" y={184 + i * 72} fill="#d1d5db" fontSize="14" fontFamily="Inter, sans-serif">⋮⋮</text>

          {/* Emoji */}
          <circle cx="70" cy={184 + i * 72} r="20" fill={active ? '#ede9fe' : '#f1f5f9'} />
          <text x="70" y={191 + i * 72} textAnchor="middle" fontSize="18" fontFamily="Inter, sans-serif">{emoji}</text>

          {/* Text */}
          <text x="100" y={176 + i * 72} fill="#1e293b" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">{title}</text>
          <text x="100" y={192 + i * 72} fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">"{phrase}"</text>
          <rect x="100" y={200 + i * 72} width="40" height="16" rx="4" fill="#f1f5f9" />
          <text x="120" y={212 + i * 72} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">#{order}</text>

          {/* Toggle switch */}
          <rect x="308" y={176 + i * 72} width="40" height="22" rx="11" fill={active ? '#7c3aed' : '#cbd5e1'} />
          <circle cx={active ? 338 : 320} cy={187 + i * 72} r="9" fill="white" />

          {/* Edit button */}
          <text x="358" y={187 + i * 72} fill="#94a3b8" fontSize="13" fontFamily="Inter, sans-serif">✏️</text>
        </g>
      ))}

      {/* Add Custom Card CTA */}
      <rect x="16" y="592" width="358" height="56" rx="14" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="195" y="616" textAnchor="middle" fill="#7c3aed" fontSize="22" fontFamily="Inter, sans-serif">+</text>
      <text x="195" y="636" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Add Custom Card</text>

      {/* Save button */}
      <rect x="16" y="658" width="358" height="46" rx="12" fill="url(#cardConfigGrad)" />
      <text x="195" y="686" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">Save Changes</text>

      <defs>
        <linearGradient id="cardConfigGrad" x1="0" y1="0" x2="390" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
