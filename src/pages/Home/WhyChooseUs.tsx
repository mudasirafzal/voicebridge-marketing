import { useTranslation } from 'react-i18next'
import AnimatedSection from '../../components/ui/AnimatedSection'

const pillarIds = ['builtForFamilies', 'clinicallyInformed', 'privacyFirst', 'alwaysImproving'] as const
const pillarIcons: Record<(typeof pillarIds)[number], string> = {
  builtForFamilies: '👨‍👩‍👧‍👦',
  clinicallyInformed: '🩺',
  privacyFirst: '🔒',
  alwaysImproving: '🚀',
}

export default function WhyChooseUs() {
  const { t } = useTranslation()

  const pillars = pillarIds.map((id) => ({
    id,
    icon: pillarIcons[id],
    title: t(`homeWhyChooseUs.pillars.${id}.title`),
    description: t(`homeWhyChooseUs.pillars.${id}.description`),
  }))

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">{t('homeWhyChooseUs.eyebrow')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            {t('homeWhyChooseUs.title')}
          </h2>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection variant="fadeIn" delay={0.1} className="text-center mb-16">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-violet-100 font-medium leading-relaxed italic">
              {t('homeWhyChooseUs.quote')}
            </p>
          </blockquote>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.id} variant="fadeUp" delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-violet-200 leading-relaxed">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
