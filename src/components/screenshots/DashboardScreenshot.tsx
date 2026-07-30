import { useTranslation } from 'react-i18next'

export default function DashboardScreenshot() {
  const { t, i18n } = useTranslation()
  const rtl = i18n.language === 'ar'
  const W = 480
  const mx = (x: number) => (rtl ? W - x : x)
  const mxRect = (x: number, w: number) => (rtl ? W - x - w : x)
  const startAnchor = rtl ? 'end' : undefined

  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="480" height="320" fill="#F8FAFC" />

      {/* Sidebar */}
      <rect x={mxRect(0, 64)} y="0" width="64" height="320" fill="#1E1B4B" />
      <text x={mx(32)} y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.sidebarLogo')}</text>
      {['🏠', '👧', '🔔', '📊', '⚙️'].map((icon, i) => (
        <g key={i}>
          <rect x={mxRect(8, 48)} y={50 + i * 44} width="48" height="36" rx="8" fill={i === 0 ? 'rgba(124,58,237,0.4)' : 'transparent'} />
          <text x={mx(32)} y={74 + i * 44} textAnchor="middle" fontSize="16" fontFamily="serif">{icon}</text>
        </g>
      ))}

      {/* Main content area */}
      {/* Header */}
      <rect x={mxRect(64, 416)} y="0" width="416" height="44" fill="white" />
      <text x={mx(80)} y="27" textAnchor={startAnchor} fill="#1E293B" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.headerTitle')}</text>
      <rect x={mxRect(400, 64)} y="10" width="64" height="24" rx="12" fill="#7C3AED" />
      <text x={mx(432)} y="26" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.addChildButton')}</text>

      {/* Stats row */}
      {[
        { label: t('screenshotMockups.dashboardScreenshot.stat1Label'), sub: t('screenshotMockups.dashboardScreenshot.stat1Sub'), color: '#7C3AED' },
        { label: t('screenshotMockups.dashboardScreenshot.stat2Label'), sub: t('screenshotMockups.dashboardScreenshot.stat2Sub'), color: '#EC4899' },
        { label: t('screenshotMockups.dashboardScreenshot.stat3Label'), sub: t('screenshotMockups.dashboardScreenshot.stat3Sub'), color: '#F59E0B' },
      ].map((stat, i) => (
        <g key={i}>
          <rect x={mxRect(76 + i * 132, 120)} y="54" width="120" height="64" rx="12" fill="white" />
          <rect x={mxRect(76 + i * 132, 4)} y="54" width="4" height="64" rx="2" fill={stat.color} />
          <text x={mx(92 + i * 132)} y="82" textAnchor={startAnchor} fill="#1E293B" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">{stat.label}</text>
          <text x={mx(92 + i * 132)} y="98" textAnchor={startAnchor} fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">{stat.sub}</text>
        </g>
      ))}

      {/* Children list */}
      <text x={mx(76)} y="138" textAnchor={startAnchor} fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.yourChildren')}</text>
      {[
        { name: t('screenshotMockups.dashboardScreenshot.child1Name'), age: t('screenshotMockups.dashboardScreenshot.child1Age'), color: '#7C3AED', events: t('screenshotMockups.dashboardScreenshot.child1Events') },
        { name: t('screenshotMockups.dashboardScreenshot.child2Name'), age: t('screenshotMockups.dashboardScreenshot.child2Age'), color: '#EC4899', events: t('screenshotMockups.dashboardScreenshot.child2Events') },
      ].map((child, i) => (
        <g key={i}>
          <rect x={mxRect(76, 388)} y={148 + i * 68} width="388" height="56" rx="12" fill="white" />
          <circle cx={mx(104)} cy={176 + i * 68} r="18" fill={child.color} />
          <text x={mx(104)} y={181 + i * 68} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">{child.name[0]}</text>
          <text x={mx(132)} y={171 + i * 68} textAnchor={startAnchor} fill="#1E293B" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{child.name}</text>
          <text x={mx(132)} y={185 + i * 68} textAnchor={startAnchor} fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">{child.age} · {child.events}</text>
          <rect x={mxRect(396, 52)} y={165 + i * 68} width="52" height="22" rx="11" fill={child.color} opacity="0.12" />
          <text x={mx(422)} y={180 + i * 68} textAnchor="middle" fill={child.color} fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.viewBoard')}</text>
        </g>
      ))}

      {/* Recent alerts panel */}
      <text x={mx(76)} y="292" textAnchor={startAnchor} fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.recentAlerts')}</text>
      {[
        { msg: t('screenshotMockups.dashboardScreenshot.alert1Msg'), time: t('screenshotMockups.dashboardScreenshot.alert1Time') },
        { msg: t('screenshotMockups.dashboardScreenshot.alert2Msg'), time: t('screenshotMockups.dashboardScreenshot.alert2Time') },
      ].map((alert, i) => (
        <g key={i}>
          <rect x={mxRect(76 + i * 200, 188)} y="298" width="188" height="18" rx="6" fill="white" />
          <text x={mx(86 + i * 200)} y="311" textAnchor={startAnchor} fill="#334155" fontSize="7" fontFamily="Inter, sans-serif">{alert.msg}</text>
          <text x={mx(252 + i * 200)} y="311" textAnchor={rtl ? undefined : 'end'} fill="#94A3B8" fontSize="7" fontFamily="Inter, sans-serif">{alert.time}</text>
        </g>
      ))}
    </svg>
  )
}
