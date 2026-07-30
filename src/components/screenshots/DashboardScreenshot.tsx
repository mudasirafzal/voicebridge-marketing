import { useTranslation } from 'react-i18next'

export default function DashboardScreenshot() {
  const { t } = useTranslation()

  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="480" height="320" fill="#F8FAFC" />

      {/* Sidebar */}
      <rect x="0" y="0" width="64" height="320" fill="#1E1B4B" />
      <text x="32" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.sidebarLogo')}</text>
      {['🏠', '👧', '🔔', '📊', '⚙️'].map((icon, i) => (
        <g key={i}>
          <rect x="8" y={50 + i * 44} width="48" height="36" rx="8" fill={i === 0 ? 'rgba(124,58,237,0.4)' : 'transparent'} />
          <text x="32" y={74 + i * 44} textAnchor="middle" fontSize="16" fontFamily="serif">{icon}</text>
        </g>
      ))}

      {/* Main content area */}
      {/* Header */}
      <rect x="64" y="0" width="416" height="44" fill="white" />
      <text x="80" y="27" fill="#1E293B" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.headerTitle')}</text>
      <rect x="400" y="10" width="64" height="24" rx="12" fill="#7C3AED" />
      <text x="432" y="26" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.addChildButton')}</text>

      {/* Stats row */}
      {[
        { label: t('screenshotMockups.dashboardScreenshot.stat1Label'), sub: t('screenshotMockups.dashboardScreenshot.stat1Sub'), color: '#7C3AED' },
        { label: t('screenshotMockups.dashboardScreenshot.stat2Label'), sub: t('screenshotMockups.dashboardScreenshot.stat2Sub'), color: '#EC4899' },
        { label: t('screenshotMockups.dashboardScreenshot.stat3Label'), sub: t('screenshotMockups.dashboardScreenshot.stat3Sub'), color: '#F59E0B' },
      ].map((stat, i) => (
        <g key={i}>
          <rect x={76 + i * 132} y="54" width="120" height="64" rx="12" fill="white" />
          <rect x={76 + i * 132} y="54" width="4" height="64" rx="2" fill={stat.color} />
          <text x={92 + i * 132} y="82" fill="#1E293B" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">{stat.label}</text>
          <text x={92 + i * 132} y="98" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">{stat.sub}</text>
        </g>
      ))}

      {/* Children list */}
      <text x="76" y="138" fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.yourChildren')}</text>
      {[
        { name: t('screenshotMockups.dashboardScreenshot.child1Name'), age: t('screenshotMockups.dashboardScreenshot.child1Age'), color: '#7C3AED', events: t('screenshotMockups.dashboardScreenshot.child1Events') },
        { name: t('screenshotMockups.dashboardScreenshot.child2Name'), age: t('screenshotMockups.dashboardScreenshot.child2Age'), color: '#EC4899', events: t('screenshotMockups.dashboardScreenshot.child2Events') },
      ].map((child, i) => (
        <g key={i}>
          <rect x="76" y={148 + i * 68} width="388" height="56" rx="12" fill="white" />
          <circle cx="104" cy={176 + i * 68} r="18" fill={child.color} />
          <text x="104" y={181 + i * 68} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">{child.name[0]}</text>
          <text x="132" y={171 + i * 68} fill="#1E293B" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{child.name}</text>
          <text x="132" y={185 + i * 68} fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">{child.age} · {child.events}</text>
          <rect x="396" y={165 + i * 68} width="52" height="22" rx="11" fill={child.color} opacity="0.12" />
          <text x="422" y={180 + i * 68} textAnchor="middle" fill={child.color} fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.viewBoard')}</text>
        </g>
      ))}

      {/* Recent alerts panel */}
      <text x="76" y="292" fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.dashboardScreenshot.recentAlerts')}</text>
      {[
        { msg: t('screenshotMockups.dashboardScreenshot.alert1Msg'), time: t('screenshotMockups.dashboardScreenshot.alert1Time') },
        { msg: t('screenshotMockups.dashboardScreenshot.alert2Msg'), time: t('screenshotMockups.dashboardScreenshot.alert2Time') },
      ].map((alert, i) => (
        <g key={i}>
          <rect x={76 + i * 200} y="298" width="188" height="18" rx="6" fill="white" />
          <text x={86 + i * 200} y="311" fill="#334155" fontSize="7" fontFamily="Inter, sans-serif">{alert.msg}</text>
          <text x={252 + i * 200} y="311" textAnchor="end" fill="#94A3B8" fontSize="7" fontFamily="Inter, sans-serif">{alert.time}</text>
        </g>
      ))}
    </svg>
  )
}
