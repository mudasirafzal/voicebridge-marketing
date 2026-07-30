import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import { CheckCircle } from 'lucide-react'

const roadmapPhaseIds = ['phase1', 'phase2', 'phase3'] as const
const roadmapDoneById: Record<(typeof roadmapPhaseIds)[number], boolean> = {
  phase1: true,
  phase2: false,
  phase3: false,
}

export default function AboutPage() {
  const { t } = useTranslation()

  const roadmapItems = roadmapPhaseIds.map((id) => ({
    phase: t(`aboutPage.roadmap.phases.${id}.phase`),
    items: t(`aboutPage.roadmap.phases.${id}.items`, { returnObjects: true }) as string[],
    done: roadmapDoneById[id],
  }))

  const valueIds = ['familyFirst', 'accessibility', 'evidenceBased', 'privacy', 'continuousImprovement', 'community'] as const
  const values = valueIds.map((id) => ({
    icon: t(`aboutPage.values.items.${id}.icon`),
    title: t(`aboutPage.values.items.${id}.title`),
    desc: t(`aboutPage.values.items.${id}.desc`),
  }))

  return (
    <>
      <SEO
        title={t('aboutPage.seo.title')}
        description={t('aboutPage.seo.description')}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              {t('aboutPage.hero.titlePrefix')}{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                {t('aboutPage.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t('aboutPage.hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why it was built */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="slideLeft">
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('aboutPage.whyWeBuiltThis.eyebrow')}</span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 mb-6">
                {t('aboutPage.whyWeBuiltThis.heading')}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {t('aboutPage.whyWeBuiltThis.paragraph1')}
                </p>
                <p>
                  {t('aboutPage.whyWeBuiltThis.paragraph2')}
                </p>
                <p>
                  {t('aboutPage.whyWeBuiltThis.paragraph3')}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideRight">
              <div className="space-y-4">
                {[
                  { icon: t('aboutPage.whyWeBuiltThis.mission.icon'), title: t('aboutPage.whyWeBuiltThis.mission.title'), desc: t('aboutPage.whyWeBuiltThis.mission.desc') },
                  { icon: t('aboutPage.whyWeBuiltThis.vision.icon'), title: t('aboutPage.whyWeBuiltThis.vision.title'), desc: t('aboutPage.whyWeBuiltThis.vision.desc') },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">{t('aboutPage.values.heading')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} variant="fadeUp" delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('aboutPage.roadmap.eyebrow')}</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900">{t('aboutPage.roadmap.heading')}</h2>
            <p className="mt-4 text-slate-500">{t('aboutPage.roadmap.description')}</p>
          </AnimatedSection>
          <div className="space-y-8">
            {roadmapItems.map((phase, i) => (
              <AnimatedSection key={phase.phase} variant="slideLeft" delay={i * 0.1}>
                <div className={`rounded-2xl p-6 border ${phase.done ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${phase.done ? 'bg-green-500' : 'bg-slate-300'}`} />
                    <h3 className={`font-bold ${phase.done ? 'text-green-700' : 'text-slate-700'}`}>{phase.phase}</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        {phase.done ? (
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
