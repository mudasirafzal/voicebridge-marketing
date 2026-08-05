import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MessageCircle, Instagram } from 'lucide-react'
import AppCTAButtons from '../ui/AppCTAButtons'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    [t('footer.product')]: [
      { label: t('footer.howItWorks'), to: '/how-it-works' },
      { label: t('footer.pricing'), to: '/pricing' },
    ],
    [t('footer.company')]: [
      { label: t('footer.contact'), to: '/contact' },
      { label: t('footer.privacyPolicy'), to: '/privacy' },
      { label: t('footer.termsOfService'), to: '/terms' },
      { label: t('footer.refunds'), to: '/refunds' },
    ],
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                VoiceBridge
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              {t('footer.tagline')}
            </p>
            <a
              href="https://www.instagram.com/voice_bridgeapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.followInstagram')}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 text-slate-400 hover:bg-gradient-to-br hover:from-violet-600 hover:to-pink-500 hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            {t('footer.copyright')}
          </p>
          <AppCTAButtons theme="dark" size="compact" showComingSoon={false} />
        </div>
      </div>
    </footer>
  )
}
