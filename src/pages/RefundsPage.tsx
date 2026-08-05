import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const sectionIds = [
  'whatIsPaid',
  'refundEligibility',
  'howToRequest',
  'cancellations',
]

type ContentItem = { subtitle: string; text: string }

export default function RefundsPage() {
  const { t } = useTranslation()

  const summaryItems = t('refundsPage.summary.items', { returnObjects: true }) as string[]

  return (
    <>
      <SEO
        title={t('refundsPage.seo.title')}
        description={t('refundsPage.seo.description')}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-medium mb-6">
            {t('refundsPage.hero.badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t('refundsPage.hero.title')}</h1>
          <p className="text-slate-400 text-lg">{t('refundsPage.hero.effectiveDate')}</p>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-xl mx-auto">
            {t('refundsPage.hero.intro')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick summary */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 mb-12">
            <h2 className="text-base font-black text-violet-900 mb-3">{t('refundsPage.summary.title')}</h2>
            <ul className="space-y-2 text-sm text-violet-800">
              {summaryItems.map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">✓</span> {item}</li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sectionIds.map((id, i) => {
              const title = t(`refundsPage.sections.${id}.title`)
              const content = t(`refundsPage.sections.${id}.content`, { returnObjects: true }) as ContentItem[]
              return (
                <div key={id}>
                  <h2 className="text-xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                    {i + 1}. {title}
                  </h2>
                  <div className="space-y-5">
                    {content.map((item) => (
                      <div key={item.subtitle}>
                        <h3 className="text-sm font-bold text-slate-800 mb-1">{item.subtitle}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold text-slate-700 mb-1">{t('refundsPage.contact.title')}</p>
            <p className="text-sm text-slate-500 mb-4">{t('refundsPage.contact.description')}</p>
            <a
              href="mailto:support@voicebridge.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-sm hover:bg-violet-700 transition-colors"
            >
              {t('refundsPage.contact.cta')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
