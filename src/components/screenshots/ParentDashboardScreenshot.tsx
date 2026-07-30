import { useTranslation } from 'react-i18next'

export default function ParentDashboardScreenshot() {
  const { t } = useTranslation()

  return (
    <svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="900" height="560" fill="#f8fafc" />

      {/* Sidebar */}
      <rect width="200" height="560" fill="#1e1b4b" />
      {/* Logo */}
      <circle cx="30" cy="36" r="14" fill="#7c3aed" />
      <text x="30" y="41" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif">💬</text>
      <text x="55" y="33" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.brandVoice')}</text>
      <text x="92" y="33" fill="#a78bfa" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.brandBridge')}</text>
      <text x="55" y="47" fill="#6d6aff" fontSize="9" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.parentAccountLabel')}</text>

      {/* Nav items */}
      {[
        { icon: '🏠', label: t('screenshotMockups.parentDashboardScreenshot.navDashboard'), y: 90, active: true },
        { icon: '👶', label: t('screenshotMockups.parentDashboardScreenshot.navMyChildren'), y: 130, active: false },
        { icon: '🔔', label: t('screenshotMockups.parentDashboardScreenshot.navAlerts'), y: 170, active: false },
        { icon: '📊', label: t('screenshotMockups.parentDashboardScreenshot.navActivity'), y: 210, active: false },
        { icon: '💳', label: t('screenshotMockups.parentDashboardScreenshot.navCommCards'), y: 250, active: false },
        { icon: '⚙️', label: t('screenshotMockups.parentDashboardScreenshot.navSettings'), y: 290, active: false },
      ].map(({ icon, label, y, active }) => (
        <g key={label}>
          {active && <rect x="0" y={y - 15} width="200" height="36" fill="#7c3aed" rx="0" />}
          <text x="20" y={y + 6} fill={active ? 'white' : '#94a3b8'} fontSize="14" fontFamily="Inter, sans-serif">{icon}</text>
          <text x="44" y={y + 6} fill={active ? 'white' : '#94a3b8'} fontSize="12" fontFamily="Inter, sans-serif">{label}</text>
        </g>
      ))}

      {/* User info at bottom */}
      <rect x="10" y="490" width="180" height="50" rx="10" fill="#312e81" />
      <circle cx="30" cy="515" r="14" fill="#7c3aed" />
      <text x="30" y="520" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.userInitials')}</text>
      <text x="50" y="511" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.userName')}</text>
      <text x="50" y="526" fill="#a78bfa" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.userRole')}</text>

      {/* Main content */}
      {/* Top bar */}
      <rect x="200" y="0" width="700" height="56" fill="white" />
      <rect x="200" y="55" width="700" height="1" fill="#e2e8f0" />
      <text x="220" y="33" fill="#1e293b" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.greeting')}</text>
      <text x="220" y="49" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.dateLabel')}</text>

      {/* Notification bell */}
      <circle cx="860" cy="28" r="18" fill="#f1f5f9" />
      <text x="860" y="34" textAnchor="middle" fontSize="14" fontFamily="Inter, sans-serif">🔔</text>
      <circle cx="872" cy="16" r="6" fill="#ef4444" />
      <text x="872" y="20" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.notifBadge')}</text>

      {/* Stats row */}
      {[
        { label: t('screenshotMockups.parentDashboardScreenshot.stat1Label'), value: t('screenshotMockups.parentDashboardScreenshot.stat1Value'), icon: '👶', color: '#ede9fe', border: '#7c3aed', x: 220 },
        { label: t('screenshotMockups.parentDashboardScreenshot.stat2Label'), value: t('screenshotMockups.parentDashboardScreenshot.stat2Value'), icon: '⚡', color: '#fef3c7', border: '#f59e0b', x: 420 },
        { label: t('screenshotMockups.parentDashboardScreenshot.stat3Label'), value: t('screenshotMockups.parentDashboardScreenshot.stat3Value'), icon: '🔔', color: '#fee2e2', border: '#ef4444', x: 620 },
      ].map(({ label, value, icon, color, border, x }) => (
        <g key={label}>
          <rect x={x} y="72" width="180" height="80" rx="14" fill={color} stroke={border} strokeWidth="1.5" />
          <text x={x + 16} y="104" fill="#1e293b" fontSize="28" fontWeight="800" fontFamily="Inter, sans-serif">{value}</text>
          <text x={x + 16} y="122" fill="#64748b" fontSize="11" fontFamily="Inter, sans-serif">{label}</text>
          <text x={x + 150} y="104" fontSize="22" fontFamily="Inter, sans-serif">{icon}</text>
        </g>
      ))}

      {/* Children profiles */}
      <text x="220" y="180" fill="#1e293b" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.myChildrenTitle')}</text>
      <rect x="820" y="167" width="70" height="26" rx="8" fill="#7c3aed" />
      <text x="855" y="185" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.addButton')}</text>

      {/* Child card 1 */}
      <rect x="220" y="192" width="270" height="110" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="256" cy="230" r="26" fill="#ede9fe" />
      <text x="256" y="237" textAnchor="middle" fill="#7c3aed" fontSize="20" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child1Initial')}</text>
      <text x="293" y="220" fill="#1e293b" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child1Name')}</text>
      <text x="293" y="237" fill="#7c3aed" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child1Info')}</text>
      <rect x="293" y="248" width="55" height="20" rx="6" fill="#dcfce7" />
      <text x="320" y="262" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child1Status')}</text>
      <rect x="230" y="275" width="100" height="22" rx="8" fill="#7c3aed" />
      <text x="280" y="290" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.openBoard')}</text>
      <rect x="340" y="275" width="100" height="22" rx="8" fill="#f1f5f9" />
      <text x="390" y="290" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.viewHistory')}</text>

      {/* Child card 2 */}
      <rect x="510" y="192" width="270" height="110" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="546" cy="230" r="26" fill="#fce7f3" />
      <text x="546" y="237" textAnchor="middle" fill="#ec4899" fontSize="20" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child2Initial')}</text>
      <text x="583" y="220" fill="#1e293b" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child2Name')}</text>
      <text x="583" y="237" fill="#ec4899" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child2Info')}</text>
      <rect x="583" y="248" width="55" height="20" rx="6" fill="#dcfce7" />
      <text x="610" y="262" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.child2Status')}</text>
      <rect x="520" y="275" width="100" height="22" rx="8" fill="#ec4899" />
      <text x="570" y="290" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.openBoard')}</text>
      <rect x="630" y="275" width="100" height="22" rx="8" fill="#f1f5f9" />
      <text x="680" y="290" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.viewHistory')}</text>

      {/* Recent Activity */}
      <text x="220" y="330" fill="#1e293b" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.recentActivityTitle')}</text>
      <text x="820" y="330" fill="#7c3aed" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.viewAll')}</text>

      {[
        { child: t('screenshotMockups.parentDashboardScreenshot.activity1Child'), card: t('screenshotMockups.parentDashboardScreenshot.activity1Card'), time: t('screenshotMockups.parentDashboardScreenshot.activity1Time'), color: '#ede9fe', dot: '#7c3aed', ack: true },
        { child: t('screenshotMockups.parentDashboardScreenshot.activity2Child'), card: t('screenshotMockups.parentDashboardScreenshot.activity2Card'), time: t('screenshotMockups.parentDashboardScreenshot.activity2Time'), color: '#fef3c7', dot: '#f59e0b', ack: true },
        { child: t('screenshotMockups.parentDashboardScreenshot.activity3Child'), card: t('screenshotMockups.parentDashboardScreenshot.activity3Card'), time: t('screenshotMockups.parentDashboardScreenshot.activity3Time'), color: '#fce7f3', dot: '#ec4899', ack: false },
      ].map(({ child, card, time, dot, ack }, i) => (
        <g key={i}>
          <rect x="220" y={348 + i * 56} width="660" height="48" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="244" cy={372 + i * 56} r="8" fill={dot} />
          <text x="264" y={369 + i * 56} fill="#64748b" fontSize="11" fontFamily="Inter, sans-serif">{child}</text>
          <text x="264" y={383 + i * 56} fill="#1e293b" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">{card}</text>
          <text x="760" y={369 + i * 56} fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">{time}</text>
          {ack ? (
            <>
              <rect x="800" y={360 + i * 56} width="70" height="22" rx="6" fill="#dcfce7" />
              <text x="835" y={375 + i * 56} textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.seenLabel')}</text>
            </>
          ) : (
            <>
              <rect x="800" y={360 + i * 56} width="70" height="22" rx="6" fill="#7c3aed" />
              <text x="835" y={375 + i * 56} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentDashboardScreenshot.acknowledgeLabel')}</text>
            </>
          )}
        </g>
      ))}
    </svg>
  )
}
