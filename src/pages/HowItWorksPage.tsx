import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'
import { Link } from 'react-router-dom'

const stepIds = ['createAccount', 'setupProfile', 'customizeBoard', 'childUsesBoard', 'parentsNotified'] as const

const detailedStepsMeta = [
  { id: 'createAccount', number: '01', icon: '👤', color: 'violet' },
  { id: 'setupProfile', number: '02', icon: '👧', color: 'pink' },
  { id: 'customizeBoard', number: '03', icon: '🎨', color: 'amber' },
  { id: 'childUsesBoard', number: '04', icon: '📱', color: 'emerald' },
  { id: 'parentsNotified', number: '05', icon: '🔔', color: 'blue' },
] satisfies { id: typeof stepIds[number]; number: string; icon: string; color: string }[]

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  violet: { bg: 'bg-violet-600', text: 'text-violet-600', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500', badge: 'bg-pink-50 text-pink-700 border-pink-200' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
}

const journeyIds = ['parent', 'child', 'therapist'] as const

const journeysMeta = [
  { id: 'parent', color: 'from-violet-500 to-violet-600' },
  { id: 'child', color: 'from-pink-500 to-pink-600' },
  { id: 'therapist', color: 'from-amber-500 to-amber-600' },
] satisfies { id: typeof journeyIds[number]; color: string }[]

export default function HowItWorksPage() {
  const { t } = useTranslation()

  const detailedSteps = detailedStepsMeta.map((meta) => ({
    ...meta,
    title: t(`howItWorksPage.steps.${meta.id}.title`),
    description: t(`howItWorksPage.steps.${meta.id}.description`),
    details: t(`howItWorksPage.steps.${meta.id}.details`, { returnObjects: true }) as string[],
  }))

  const journeys = journeysMeta.map((meta) => ({
    ...meta,
    persona: t(`howItWorksPage.journeys.${meta.id}.persona`),
    steps: t(`howItWorksPage.journeys.${meta.id}.steps`, { returnObjects: true }) as string[],
  }))

  return (
    <>
      <SEO
        title={t('howItWorksPage.seo.title')}
        description={t('howItWorksPage.seo.description')}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              {t('howItWorksPage.hero.titlePart1')}{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                {t('howItWorksPage.hero.titleHighlight')}
              </span>
              {' '}{t('howItWorksPage.hero.titlePart2')}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t('howItWorksPage.hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed steps */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">{t('howItWorksPage.stepsSection.heading')}</h2>
          </AnimatedSection>
          <div className="space-y-12">
            {detailedSteps.map((step, i) => {
              const colors = colorMap[step.color]
              const isEven = i % 2 === 1
              return (
                <AnimatedSection key={step.number} variant={isEven ? 'slideRight' : 'slideLeft'}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={isEven ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full ${colors.bg} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
                          {step.number}
                        </div>
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((d) => (
                          <li key={d} className={`text-sm px-3 py-2 rounded-lg border ${colors.badge}`}>
                            → {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${isEven ? 'lg:col-start-1' : ''} flex justify-center`}>
                      <div className={`w-48 h-48 rounded-3xl ${colors.bg} flex items-center justify-center opacity-20 text-8xl`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* User journey maps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">{t('howItWorksPage.journeysSection.heading')}</h2>
            <p className="mt-4 text-slate-500">{t('howItWorksPage.journeysSection.description')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeys.map((journey, i) => (
              <AnimatedSection key={journey.persona} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full">
                  <div className={`bg-gradient-to-r ${journey.color} p-4 text-white font-bold text-sm`}>
                    {journey.persona}
                  </div>
                  <div className="p-5">
                    <ol className="space-y-3">
                      {journey.steps.map((step, si) => (
                        <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {si + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-pink-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-3xl font-black text-white mb-4">{t('howItWorksPage.cta.heading')}</h2>
            <p className="text-violet-100 mb-8">{t('howItWorksPage.cta.description')}</p>
            <div className="flex justify-center">
              <AppCTAButtons theme="light" />
            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/docs" className="px-6 py-3 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                {t('howItWorksPage.cta.readDocs')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
