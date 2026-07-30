import { useTranslation } from 'react-i18next'

const W = 256

export default function BoardScreenshot() {
  const { t, i18n } = useTranslation()
  const rtl = i18n.language === 'ar'
  const mx = (x: number) => (rtl ? W - x : x)
  const mxRect = (x: number, w: number) => (rtl ? W - x - w : x)

  const cards = [
    { emoji: '💧', label: t('screenshotMockups.boardScreenshot.card1Label'), color: '#3B82F6' },
    { emoji: '🍽️', label: t('screenshotMockups.boardScreenshot.card2Label'), color: '#F59E0B' },
    { emoji: '🆘', label: t('screenshotMockups.boardScreenshot.card3Label'), color: '#EF4444' },
    { emoji: '🎮', label: t('screenshotMockups.boardScreenshot.card4Label'), color: '#8B5CF6' },
    { emoji: '😊', label: t('screenshotMockups.boardScreenshot.card5Label'), color: '#10B981' },
    { emoji: '😴', label: t('screenshotMockups.boardScreenshot.card6Label'), color: '#6366F1' },
  ]

  return (
    <svg viewBox="0 0 256 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="boardBg" x1={rtl ? '100%' : '0%'} y1="0%" x2={rtl ? '0%' : '100%'} y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="256" height="480" fill="url(#boardBg)" />

      {/* Header */}
      <rect x="0" y="0" width="256" height="56" fill="rgba(0,0,0,0.2)" />
      <text x={mx(128)} y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.boardScreenshot.headerTitle')}</text>
      <text x={mx(128)} y="42" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="Inter, sans-serif">{t('screenshotMockups.boardScreenshot.greeting')}</text>

      {/* Cards grid - 2 columns x 3 rows */}
      {cards.map((card, i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        const x = 12 + col * 120
        const y = 68 + row * 130

        return (
          <g key={i}>
            <rect x={mxRect(x, 108)} y={y} width="108" height="118" rx="16" fill="white" opacity="0.92" />
            <text x={mx(x + 54)} y={y + 52} textAnchor="middle" fontSize="36" fontFamily="serif">{card.emoji}</text>
            <rect x={mxRect(x + 8, 92)} y={y + 78} width="92" height="26" rx="8" fill={card.color} opacity="0.15" />
            <text x={mx(x + 54)} y={y + 96} textAnchor="middle" fill={card.color} fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">{card.label}</text>
          </g>
        )
      })}

      {/* Bottom nav */}
      <rect x="0" y="460" width="256" height="20" fill="rgba(0,0,0,0.2)" />
      <text x={mx(42)} y="474" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif">{t('screenshotMockups.boardScreenshot.navBoard')}</text>
      <text x={mx(128)} y="474" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="Inter, sans-serif">{t('screenshotMockups.boardScreenshot.navHistory')}</text>
      <text x={mx(214)} y="474" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="Inter, sans-serif">{t('screenshotMockups.boardScreenshot.navSettings')}</text>
    </svg>
  )
}
