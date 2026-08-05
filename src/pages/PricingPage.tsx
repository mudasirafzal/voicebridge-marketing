import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Check, Minus } from 'lucide-react'
import SEO from '../components/SEO'

type Plan = {
  badge: string
  title: string
  price: string
  period: string
  description: string
  features: string[]
  /** Drawbacks. Rendered muted with a dash, never a tick — a limitation with a
   *  green check next to it reads as a benefit. */
  limitations?: string[]
  cta: string
  note: string
}

type FaqItem = { question: string; answer: string }

export default function PricingPage() {
  const { t } = useTranslation()

  const freePlan = t('pricingPage.plans.free', { returnObjects: true }) as Plan
  const instantPlan = t('pricingPage.plans.instant', { returnObjects: true }) as Plan
  const faqItems = t('pricingPage.faq.items', { returnObjects: true }) as FaqItem[]

  const plans: { plan: Plan; highlight: boolean }[] = [
    { plan: freePlan, highlight: false },
    { plan: instantPlan, highlight: true },
  ]

  return (
    <>
      <SEO
        title={t('pricingPage.seo.title')}
        description={t('pricingPage.seo.description')}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-medium mb-6">
            {t('pricingPage.hero.badge')}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t('pricingPage.hero.title')}</h1>
          <p className="text-slate-300 leading-relaxed max-w-xl mx-auto">
            {t('pricingPage.hero.intro')}
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map(({ plan, highlight }) => (
              <div
                key={plan.title}
                className={`rounded-3xl p-8 border-2 flex flex-col ${
                  highlight ? 'border-violet-500 bg-violet-50 shadow-lg' : 'border-slate-200 bg-white'
                }`}
              >
                <span
                  className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                    highlight ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {plan.badge}
                </span>
                <h2 className="text-2xl font-black text-slate-900">{plan.title}</h2>
                <p className="text-slate-500 text-sm mt-1 mb-4">{plan.description}</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? 'text-violet-600' : 'text-emerald-500'}`} strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations?.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <Minus className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-300" strokeWidth={3} />
                      {limitation}
                    </li>
                  ))}
                </ul>
                {highlight ? (
                  <span className="text-center py-3 px-6 rounded-xl font-bold text-sm bg-slate-100 text-slate-500 cursor-default">
                    {plan.cta}
                  </span>
                ) : (
                  <Link
                    to="/contact"
                    className="text-center py-3 px-6 rounded-xl font-bold text-sm bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                  >
                    {plan.cta}
                  </Link>
                )}
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">{plan.note}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            {t('pricingPage.refundsNote')}{' '}
            <Link to="/refunds" className="text-violet-600 font-semibold hover:underline">
              {t('footer.refunds')}
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-slate-900 mb-8 text-center">{t('pricingPage.faq.title')}</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
