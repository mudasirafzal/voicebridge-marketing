import { useTranslation } from 'react-i18next'
import AnimatedSection from '../../components/ui/AnimatedSection'

const features = [
  {
    id: 'visualCards',
    icon: '🗣️',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    id: 'instantAlerts',
    icon: '🔔',
    color: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    id: 'acknowledgeStop',
    icon: '✅',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 'voiceStyles',
    icon: '🎙️',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    id: 'multiProfile',
    icon: '👨‍👩‍👧',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    id: 'trilingual',
    icon: '🌍',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    id: 'therapyDashboard',
    icon: '🏥',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    id: 'mobileApp',
    icon: '📱',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    id: 'communicationHistory',
    icon: '📊',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
]

export default function Features() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('homeFeatures.eyebrow')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            {t('homeFeatures.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {t('homeFeatures.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.id} variant="fadeUp" delay={i * 0.08}>
              <div className={`h-full rounded-2xl p-6 ${feature.bg} border ${feature.border} hover:shadow-lg transition-shadow`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{t(`homeFeatures.items.${feature.id}.title`)}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t(`homeFeatures.items.${feature.id}.description`)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
