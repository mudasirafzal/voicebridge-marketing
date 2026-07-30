import { useTranslation } from 'react-i18next'
import { ArrowRight, Download, Apple, Smartphone } from 'lucide-react'

const WEB_APP_URL = 'https://voicebridge.website'
const ANDROID_APK_URL = '/downloads/voicebridge.apk'

interface AppCTAButtonsProps {
  /**
   * Backdrop this sits on, so the secondary button stays legible:
   * 'dark' — dark/gradient hero backdrop
   * 'light' — colored (violet/pink) CTA backdrop
   * 'onwhite' — plain white backdrop, e.g. the navbar
   */
  theme?: 'dark' | 'light' | 'onwhite'
  /** 'default' for hero/CTA sections, 'compact' for tight spaces like the navbar. */
  size?: 'default' | 'compact'
  /** Show the "coming soon" App Store / Play Store note beneath the buttons. */
  showComingSoon?: boolean
  className?: string
}

/**
 * The three ways to get VoiceBridge today: use it on the web, or download the
 * Android APK directly (no Play Store listing yet). iOS/Play Store are noted
 * as coming soon rather than linked, since there's nothing to link to yet.
 */
export default function AppCTAButtons({
  theme = 'dark',
  size = 'default',
  showComingSoon = true,
  className = '',
}: AppCTAButtonsProps) {
  const { t } = useTranslation()
  const isCompact = size === 'compact'

  const padding = isCompact ? 'px-4 py-2' : 'px-6 py-3.5'
  const textSize = isCompact ? 'text-xs' : 'text-sm'
  const iconSize = isCompact ? 'w-3.5 h-3.5' : 'w-4 h-4'
  const gap = isCompact ? 'gap-2' : 'gap-4'

  const primaryClasses =
    theme === 'onwhite'
      ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-violet-500/30 hover:shadow-violet-500/50'
      : theme === 'dark'
        ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-violet-500/30 hover:shadow-violet-500/50'
        : 'bg-white text-violet-700 shadow-black/10 hover:shadow-black/20'

  const secondaryClasses =
    theme === 'onwhite'
      ? 'bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100'
      : theme === 'dark'
        ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
        : 'bg-white/20 border-white/40 text-white hover:bg-white/30'

  const comingSoonClasses = theme === 'dark' ? 'text-slate-400' : theme === 'onwhite' ? 'text-slate-500' : 'text-white/70'

  return (
    <div className={className}>
      <div className={`flex flex-col sm:flex-row ${gap}`}>
        <a
          href={WEB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-1.5 ${padding} font-semibold rounded-xl shadow-lg transition-all ${textSize} hover:scale-105 ${primaryClasses}`}
        >
          {t('cta.tryOnWeb')}
          <ArrowRight className={iconSize} />
        </a>

        <a
          href={ANDROID_APK_URL}
          download
          className={`inline-flex items-center justify-center gap-1.5 ${padding} font-semibold rounded-xl transition-all ${textSize} border ${secondaryClasses}`}
        >
          <Download className={iconSize} />
          {isCompact ? t('cta.androidApk') : t('cta.downloadForAndroid')}
        </a>
      </div>

      {showComingSoon && (
        <p className={`mt-3 flex items-center gap-2 text-xs ${comingSoonClasses}`}>
          <Apple className="w-3.5 h-3.5" />
          <Smartphone className="w-3.5 h-3.5 -ml-1" />
          {t('cta.comingSoon')}
        </p>
      )}
    </div>
  )
}
