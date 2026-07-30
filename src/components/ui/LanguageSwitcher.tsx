import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

interface LanguageSwitcherProps {
  /** 'onwhite' for the navbar; 'onwhite-compact' variant for mobile menu rows. */
  compact?: boolean
  className?: string
}

export default function LanguageSwitcher({ compact = false, className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const toggle = () => {
    i18n.changeLanguage(isArabic ? 'en' : 'ar')
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 rounded-lg font-bold text-slate-700 hover:text-violet-600 hover:bg-violet-50 transition-colors ${
        compact ? 'px-3 py-2 text-sm' : 'px-3 py-2 text-sm'
      } ${className}`}
      aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Languages className="w-4 h-4" />
      {isArabic ? 'EN' : 'العربية'}
    </button>
  )
}
