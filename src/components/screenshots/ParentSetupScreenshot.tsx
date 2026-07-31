import { useTranslation } from 'react-i18next'

const W = 390

export default function ParentSetupScreenshot() {
  const { t, i18n } = useTranslation()
  const rtl = i18n.language === 'ar'
  // Mirrors a single x/cx coordinate around the viewBox center — correct for
  // circles and for "middle"-anchored text, since both are already centered
  // on their own box.
  const mx = (x: number) => (rtl ? W - x : x)
  // Mirrors a rect's left edge, given its width, so the rect keeps the same
  // width but sits on the opposite side.
  const mxRect = (x: number, w: number) => (rtl ? W - x - w : x)
  // Default/start-anchored text (labels, values) needs both its position
  // mirrored AND its anchor flipped to 'end' so it still reads from its own
  // edge instead of overflowing across the mirrored layout.

  return (
    <svg viewBox={`0 0 ${W} 700`} xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width={W} height="700" fill="#f8fafc" />

      {/* Header */}
      <rect width={W} height="60" fill="#7c3aed" />
      <text x={mx(195)} y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.headerTitle')}</text>
      <text x={mx(195)} y="52" textAnchor="middle" fill="#ddd6fe" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.headerSubtitle')}</text>

      {/* Progress bar — mirrors so the filled portion still reads as "progress from the start" */}
      <rect x={mxRect(20, 350)} y="68" width="350" height="4" rx="2" fill="#e2e8f0" />
      <rect x={mxRect(20, 116)} y="68" width="116" height="4" rx="2" fill="#7c3aed" />

      {/* Avatar upload circle */}
      <circle cx={mx(195)} cy="130" r="42" fill="#ede9fe" />
      <circle cx={mx(195)} cy="118" r="16" fill="#7c3aed" />
      <ellipse cx={mx(195)} cy="150" rx="22" ry="12" fill="#7c3aed" />
      <circle cx={mx(225)} cy="152" r="13" fill="#7c3aed" />
      <circle cx={mx(225)} cy="152" r="8" fill="white" />
      <text x={mx(225)} y="156" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">+</text>
      <text x={mx(195)} y="188" textAnchor="middle" fill="#7c3aed" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.uploadPhoto')}</text>

      {/* Form fields */}
      {/* Child's Name */}
      <text x={mx(24)} y="218" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.nameLabel')}</text>
      <rect x={mxRect(20, 350)} y="224" width="350" height="42" rx="10" fill="white" stroke="#7c3aed" strokeWidth="2" />
      <text x={mx(36)} y="250" fill="#1e1b4b" fontSize="14" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.nameValue')}</text>

      {/* Date of Birth */}
      <text x={mx(24)} y="284" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.dobLabel')}</text>
      <rect x={mxRect(20, 350)} y="290" width="350" height="42" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x={mx(36)} y="316" fill="#6b7280" fontSize="14" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.dobValue')}</text>
      <text x={mx(340)} y="316" fill="#9ca3af" fontSize="16" fontFamily="Inter, sans-serif">📅</text>

      {/* Preferred Language */}
      <text x={mx(24)} y="350" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.languageLabel')}</text>
      {/* English option - selected */}
      <rect x={mxRect(20, 165)} y="356" width="165" height="56" rx="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
      <text x={mx(102)} y="381" textAnchor="middle" fill="#1e1b4b" fontSize="20" fontFamily="Inter, sans-serif">🇬🇧</text>
      <text x={mx(102)} y="400" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.englishLabel')}</text>
      {/* Urdu option */}
      <rect x={mxRect(205, 165)} y="356" width="165" height="56" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x={mx(287)} y="381" textAnchor="middle" fill="#1e1b4b" fontSize="20" fontFamily="Inter, sans-serif">🇵🇰</text>
      <text x={mx(287)} y="400" textAnchor="middle" fill="#6b7280" fontSize="12" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.urduLabel')}</text>

      {/* Diagnosis / Notes */}
      <text x={mx(24)} y="432" fill="#374151" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.notesLabel')}</text>
      <rect x={mxRect(20, 350)} y="438" width="350" height="72" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x={mx(36)} y="460" fill="#9ca3af" fontSize="13" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.notesPlaceholderLine1')}</text>
      <text x={mx(36)} y="478" fill="#9ca3af" fontSize="13" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.notesPlaceholderLine2')}</text>

      {/* Tip box */}
      <rect x={mxRect(20, 350)} y="522" width="350" height="50" rx="10" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1" />
      <text x={mx(36)} y="543" fill="#7c3aed" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.tipTitle')}</text>
      <text x={mx(36)} y="559" fill="#6b21a8" fontSize="11" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.tipBody')}</text>

      {/* Next button */}
      <rect x={mxRect(20, 350)} y="586" width="350" height="48" rx="12" fill="url(#parentSetupGrad)" />
      <text x={mx(195)} y="616" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.continueButton')}</text>

      {/* Bottom nav */}
      <rect x="0" y="650" width={W} height="50" fill="white" />
      <rect x="0" y="650" width={W} height="1" fill="#e2e8f0" />
      <text x={mx(98)} y="681" textAnchor="middle" fill="#7c3aed" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.navHome')}</text>
      <text x={mx(195)} y="681" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.navProfiles')}</text>
      <text x={mx(293)} y="681" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">{t('screenshotMockups.parentSetupScreenshot.navSettings')}</text>

      <defs>
        <linearGradient id="parentSetupGrad" x1={rtl ? '390' : '0'} y1="0" x2={rtl ? '0' : '390'} y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
