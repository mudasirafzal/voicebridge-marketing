import { useTranslation } from 'react-i18next'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    id: '1',
    color: 'bg-violet-500',
  },
  {
    id: '2',
    color: 'bg-pink-500',
  },
  {
    id: '3',
    color: 'bg-amber-500',
  },
]

export default function Overview() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <AnimatedSection variant="fadeUp">
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('homeOverview.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                {t('homeOverview.titlePlain')}{' '}
                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                  {t('homeOverview.titleHighlight')}
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1} className="mt-6">
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {t('homeOverview.paragraph1')}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {t('homeOverview.paragraph2')}
              </p>
            </AnimatedSection>

            {/* Steps */}
            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <AnimatedSection key={step.id} variant="slideLeft" delay={0.15 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full ${step.color} text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5`}>
                      {step.id}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{t(`homeOverview.steps.${step.id}.title`)}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{t(`homeOverview.steps.${step.id}.desc`)}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 mt-1 shrink-0 hidden sm:block" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatedSection variant="fadeUp" delay={0.3} className="sm:col-span-2">
              <div className="bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl p-6 text-white">
                <div className="text-4xl font-black mb-1">{t('homeOverview.stats.languagesCount')}</div>
                <p className="text-sm font-medium text-violet-200">{t('homeOverview.stats.languagesLabel')}</p>
                <p className="text-xs text-violet-300 mt-2">{t('homeOverview.stats.languagesSubtext')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.35} className="sm:col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">💡</div>
                  <h3 className="font-bold text-slate-900">{t('homeOverview.stats.didYouKnowTitle')}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('homeOverview.stats.didYouKnowText')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
