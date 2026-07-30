import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'

const useCaseIds = [
  { id: 'parentAtHome', color: 'from-violet-500 to-violet-600' },
  { id: 'extendedFamily', color: 'from-pink-500 to-rose-500' },
  { id: 'therapyCenter', color: 'from-amber-500 to-orange-500' },
  { id: 'specialEdSchool', color: 'from-emerald-500 to-teal-500' },
  { id: 'specialEdTeacher', color: 'from-blue-500 to-indigo-500' },
  { id: 'ngoProgram', color: 'from-rose-500 to-pink-600' },
] as const

export default function UseCasesPage() {
  const { t } = useTranslation()

  const useCases = useCaseIds.map(({ id, color }) => ({
    id,
    color,
    persona: t(`useCasesPage.useCases.${id}.persona`),
    title: t(`useCasesPage.useCases.${id}.title`),
    scenario: t(`useCasesPage.useCases.${id}.scenario`),
    benefits: t(`useCasesPage.useCases.${id}.benefits`, { returnObjects: true }) as string[],
    quote: t(`useCasesPage.useCases.${id}.quote`),
    attribution: t(`useCasesPage.useCases.${id}.attribution`),
  }))

  return (
    <>
      <SEO
        title={t('useCasesPage.seo.title')}
        description={t('useCasesPage.seo.description')}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              {t('useCasesPage.hero.titleLine1')}{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                {t('useCasesPage.hero.titleLine2')}
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t('useCasesPage.hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.id} variant="fadeUp" delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${uc.color} p-5 text-white`}>
                    <div className="text-2xl mb-2">{uc.persona}</div>
                    <h2 className="text-lg font-bold">{uc.title}</h2>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{uc.scenario}</p>
                    <div className="mb-5">
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('useCasesPage.keyBenefitsLabel')}</h3>
                      <ul className="space-y-1.5">
                        {uc.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="mt-auto bg-slate-50 rounded-xl p-4 border-l-4 border-violet-400">
                      <p className="text-sm text-slate-600 italic mb-2">{uc.quote}</p>
                      <cite className="text-xs text-slate-400 not-italic">— {uc.attribution}</cite>
                    </blockquote>
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
            <h2 className="text-3xl font-black text-white mb-4">{t('useCasesPage.cta.title')}</h2>
            <p className="text-violet-100 mb-8">
              {t('useCasesPage.cta.description')}
            </p>
            <div className="flex justify-center">
              <AppCTAButtons theme="light" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
