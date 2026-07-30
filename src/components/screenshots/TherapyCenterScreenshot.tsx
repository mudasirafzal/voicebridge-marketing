import { useTranslation } from 'react-i18next'

export default function TherapyCenterScreenshot() {
  const { t } = useTranslation()

  return (
    <svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="900" height="560" fill="#f8fafc" />

      {/* Sidebar */}
      <rect width="210" height="560" fill="#0f172a" />
      <circle cx="32" cy="36" r="14" fill="#7c3aed" />
      <text x="32" y="41" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif">🏥</text>
      <text x="55" y="31" fill="white" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.brandName')}</text>
      <text x="55" y="46" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.brandRole')}</text>

      {[
        { icon: '📊', label: t('screenshotMockups.therapyCenterScreenshot.navOverview'), y: 88, active: true },
        { icon: '👥', label: t('screenshotMockups.therapyCenterScreenshot.navFamilies'), y: 126, active: false },
        { icon: '👶', label: t('screenshotMockups.therapyCenterScreenshot.navChildren'), y: 164, active: false },
        { icon: '👩‍⚕️', label: t('screenshotMockups.therapyCenterScreenshot.navTherapists'), y: 202, active: false },
        { icon: '📋', label: t('screenshotMockups.therapyCenterScreenshot.navSessions'), y: 240, active: false },
        { icon: '💳', label: t('screenshotMockups.therapyCenterScreenshot.navCardLibrary'), y: 278, active: false },
        { icon: '🔔', label: t('screenshotMockups.therapyCenterScreenshot.navNotifications'), y: 316, active: false },
        { icon: '📈', label: t('screenshotMockups.therapyCenterScreenshot.navReports'), y: 354, active: false },
        { icon: '⚙️', label: t('screenshotMockups.therapyCenterScreenshot.navSettings'), y: 392, active: false },
      ].map(({ icon, label, y, active }) => (
        <g key={label}>
          {active && <rect x="0" y={y - 14} width="210" height="32" fill="#7c3aed" />}
          {!active && <rect x="0" y={y - 14} width="210" height="32" fill="transparent" />}
          <text x="20" y={y + 4} fill={active ? 'white' : '#64748b'} fontSize="13" fontFamily="Inter, sans-serif">{icon}</text>
          <text x="44" y={y + 4} fill={active ? 'white' : '#64748b'} fontSize="12" fontFamily="Inter, sans-serif">{label}</text>
        </g>
      ))}

      <rect x="10" y="490" width="190" height="50" rx="10" fill="#1e293b" />
      <circle cx="30" cy="515" r="14" fill="#7c3aed" />
      <text x="30" y="520" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.userInitials')}</text>
      <text x="52" y="511" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.userName')}</text>
      <text x="52" y="526" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.userRole')}</text>

      {/* Top bar */}
      <rect x="210" y="0" width="690" height="56" fill="white" />
      <rect x="210" y="55" width="690" height="1" fill="#e2e8f0" />
      <text x="228" y="30" fill="#0f172a" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.headerTitle')}</text>
      <text x="228" y="48" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.headerSubtitle')}</text>

      {/* Invite button */}
      <rect x="760" y="14" width="120" height="30" rx="8" fill="#7c3aed" />
      <text x="820" y="33" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.inviteButton')}</text>

      {/* Stats row */}
      {[
        { label: t('screenshotMockups.therapyCenterScreenshot.stat1Label'), value: t('screenshotMockups.therapyCenterScreenshot.stat1Value'), sub: t('screenshotMockups.therapyCenterScreenshot.stat1Sub'), icon: '👨‍👩‍👧', bg: '#ede9fe', x: 228 },
        { label: t('screenshotMockups.therapyCenterScreenshot.stat2Label'), value: t('screenshotMockups.therapyCenterScreenshot.stat2Value'), sub: t('screenshotMockups.therapyCenterScreenshot.stat2Sub'), icon: '👶', bg: '#dbeafe', x: 406 },
        { label: t('screenshotMockups.therapyCenterScreenshot.stat3Label'), value: t('screenshotMockups.therapyCenterScreenshot.stat3Value'), sub: t('screenshotMockups.therapyCenterScreenshot.stat3Sub'), icon: '👩‍⚕️', bg: '#dcfce7', x: 584 },
        { label: t('screenshotMockups.therapyCenterScreenshot.stat4Label'), value: t('screenshotMockups.therapyCenterScreenshot.stat4Value'), sub: t('screenshotMockups.therapyCenterScreenshot.stat4Sub'), icon: '⚡', bg: '#fef3c7', x: 762 },
      ].map(({ label, value, sub, icon, bg, x }) => (
        <g key={label}>
          <rect x={x} y="68" width="160" height="78" rx="12" fill={bg} />
          <text x={x + 14} y="100" fill="#0f172a" fontSize="24" fontWeight="800" fontFamily="Inter, sans-serif">{value}</text>
          <text x={x + 14} y="116" fill="#475569" fontSize="10" fontFamily="Inter, sans-serif">{label}</text>
          <text x={x + 14} y="132" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">{sub}</text>
          <text x={x + 132} y="100" fontSize="20" fontFamily="Inter, sans-serif">{icon}</text>
        </g>
      ))}

      {/* Families table */}
      <text x="228" y="172" fill="#0f172a" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.registeredFamilies')}</text>
      <rect x="228" y="180" width="652" height="34" rx="0" fill="#f1f5f9" />
      {[
        t('screenshotMockups.therapyCenterScreenshot.tableHeaderFamilyName'),
        t('screenshotMockups.therapyCenterScreenshot.tableHeaderChildren'),
        t('screenshotMockups.therapyCenterScreenshot.tableHeaderTherapist'),
        t('screenshotMockups.therapyCenterScreenshot.tableHeaderLastActive'),
        t('screenshotMockups.therapyCenterScreenshot.tableHeaderStatus'),
        t('screenshotMockups.therapyCenterScreenshot.tableHeaderAction'),
      ].map((h, i) => (
        <text key={h} x={[240, 360, 470, 570, 660, 760][i]} y="202" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{h}</text>
      ))}

      {[
        { name: t('screenshotMockups.therapyCenterScreenshot.family1Name'), children: t('screenshotMockups.therapyCenterScreenshot.family1Children'), therapist: t('screenshotMockups.therapyCenterScreenshot.family1Therapist'), last: t('screenshotMockups.therapyCenterScreenshot.family1Last'), status: t('screenshotMockups.therapyCenterScreenshot.family1Status'), dot: '#16a34a' },
        { name: t('screenshotMockups.therapyCenterScreenshot.family2Name'), children: t('screenshotMockups.therapyCenterScreenshot.family2Children'), therapist: t('screenshotMockups.therapyCenterScreenshot.family2Therapist'), last: t('screenshotMockups.therapyCenterScreenshot.family2Last'), status: t('screenshotMockups.therapyCenterScreenshot.family2Status'), dot: '#16a34a' },
        { name: t('screenshotMockups.therapyCenterScreenshot.family3Name'), children: t('screenshotMockups.therapyCenterScreenshot.family3Children'), therapist: t('screenshotMockups.therapyCenterScreenshot.family3Therapist'), last: t('screenshotMockups.therapyCenterScreenshot.family3Last'), status: t('screenshotMockups.therapyCenterScreenshot.family3Status'), dot: '#16a34a' },
        { name: t('screenshotMockups.therapyCenterScreenshot.family4Name'), children: t('screenshotMockups.therapyCenterScreenshot.family4Children'), therapist: t('screenshotMockups.therapyCenterScreenshot.family4Therapist'), last: t('screenshotMockups.therapyCenterScreenshot.family4Last'), status: t('screenshotMockups.therapyCenterScreenshot.family4Status'), dot: '#f59e0b' },
      ].map(({ name, children, therapist, last, status, dot }, i) => (
        <g key={name}>
          <rect x="228" y={214 + i * 40} width="652" height="40" rx="0" fill={i % 2 === 0 ? 'white' : '#fafafa'} stroke="#e2e8f0" strokeWidth="0.5" />
          <circle cx="244" cy={234 + i * 40} r="14" fill="#ede9fe" />
          <text x="244" y={239 + i * 40} textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{name[0]}</text>
          <text x="264" y={239 + i * 40} fill="#0f172a" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{name}</text>
          <text x="360" y={239 + i * 40} fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">{children}</text>
          <text x="470" y={239 + i * 40} fill="#475569" fontSize="11" fontFamily="Inter, sans-serif">{therapist}</text>
          <text x="570" y={239 + i * 40} fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">{last}</text>
          <circle cx="656" cy={234 + i * 40} r="4" fill={dot} />
          <text x="666" y={239 + i * 40} fill={dot === '#16a34a' ? '#16a34a' : '#d97706'} fontSize="11" fontFamily="Inter, sans-serif">{status}</text>
          <text x="760" y={239 + i * 40} fill="#7c3aed" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.viewAction')}</text>
        </g>
      ))}

      {/* Bottom panels */}
      {/* Quick assign therapist */}
      <rect x="228" y="388" width="310" height="140" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="246" y="410" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.assignTherapistTitle')}</text>
      <text x="246" y="426" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.assignTherapistSub')}</text>
      {[
        { name: t('screenshotMockups.therapyCenterScreenshot.therapist1Name'), count: t('screenshotMockups.therapyCenterScreenshot.therapist1Count'), fill: '#ede9fe' },
        { name: t('screenshotMockups.therapyCenterScreenshot.therapist2Name'), count: t('screenshotMockups.therapyCenterScreenshot.therapist2Count'), fill: '#dbeafe' },
        { name: t('screenshotMockups.therapyCenterScreenshot.therapist3Name'), count: t('screenshotMockups.therapyCenterScreenshot.therapist3Count'), fill: '#dcfce7' },
      ].map(({ name, count, fill }, i) => (
        <g key={name}>
          <rect x="240" y={436 + i * 30} width="285" height="24" rx="8" fill={fill} />
          <text x="254" y={452 + i * 30} fill="#0f172a" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{name}</text>
          <text x="450" y={452 + i * 30} fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">{count}</text>
        </g>
      ))}

      {/* Notification settings */}
      <rect x="558" y="388" width="322" height="140" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="576" y="410" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.therapyCenterScreenshot.notificationSettingsTitle')}</text>
      {[
        { label: t('screenshotMockups.therapyCenterScreenshot.notif1Label'), on: true },
        { label: t('screenshotMockups.therapyCenterScreenshot.notif2Label'), on: true },
        { label: t('screenshotMockups.therapyCenterScreenshot.notif3Label'), on: false },
      ].map(({ label, on }, i) => (
        <g key={label}>
          <text x="576" y={438 + i * 38} fill="#374151" fontSize="11" fontFamily="Inter, sans-serif">{label}</text>
          <rect x="808" y={422 + i * 38} width="36" height="20" rx="10" fill={on ? '#7c3aed' : '#cbd5e1'} />
          <circle cx={on ? 834 : 820} cy={432 + i * 38} r="8" fill="white" />
        </g>
      ))}
    </svg>
  )
}
