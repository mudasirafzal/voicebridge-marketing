import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const featureCategories = [
  {
    id: 'communicationBoard',
    icon: '🗣️',
    color: 'violet',
    side: 'left',
  },
  {
    id: 'instantAlerts',
    icon: '🔔',
    color: 'pink',
    side: 'right',
  },
  {
    id: 'multiProfile',
    icon: '👨‍👩‍👧',
    color: 'amber',
    side: 'left',
  },
  {
    id: 'therapyDashboard',
    icon: '🏥',
    color: 'emerald',
    side: 'right',
  },
  {
    id: 'trilingual',
    icon: '🌍',
    color: 'indigo',
    side: 'right',
  },
  {
    id: 'voiceStyles',
    icon: '🎙️',
    color: 'violet',
    side: 'left',
  },
  {
    id: 'privacySecurity',
    icon: '🔒',
    color: 'slate',
    side: 'left',
  },
  {
    id: 'crossPlatform',
    icon: '📱',
    color: 'cyan',
    side: 'right',
  },
  {
    id: 'personalization',
    icon: '🎯',
    color: 'rose',
    side: 'left',
  },
]

const colorMap: Record<string, string> = {
  violet: 'bg-violet-100 text-violet-700',
  pink: 'bg-pink-100 text-pink-700',
  amber: 'bg-amber-100 text-amber-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  blue: 'bg-blue-100 text-blue-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  slate: 'bg-slate-100 text-slate-700',
  cyan: 'bg-cyan-100 text-cyan-700',
  rose: 'bg-rose-100 text-rose-700',
}

export default function FeaturesPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('featuresPage.seo.title')}
        description={t('featuresPage.seo.description')}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <AnimatedSection variant="fadeUp">
            <span className="inline-block px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-medium mb-6">
              {t('featuresPage.hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              {t('featuresPage.hero.titleLine1')}{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                {t('featuresPage.hero.titleLine2')}
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t('featuresPage.hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature sections */}
      <div className="bg-white">
        {featureCategories.map((feature, i) => {
          const isRight = feature.side === 'right'
          const title = t(`featuresPage.items.${feature.id}.title`)
          const tagline = t(`featuresPage.items.${feature.id}.tagline`)
          const description = t(`featuresPage.items.${feature.id}.description`)
          const benefits = t(`featuresPage.items.${feature.id}.benefits`, { returnObjects: true }) as string[]
          return (
            <section key={feature.id} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRight ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Text */}
                  <AnimatedSection variant={isRight ? 'slideRight' : 'slideLeft'} className={isRight ? 'lg:col-start-2' : ''}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colorMap[feature.color]} rounded-full text-xs font-semibold mb-4`}>
                      {tagline}
                    </div>
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">{title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                    <ul className="space-y-2.5">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>

                  {/* Visual card */}
                  <AnimatedSection variant={isRight ? 'slideLeft' : 'slideRight'} className={isRight ? 'lg:col-start-1' : ''}>
                    <div className={`rounded-3xl p-12 flex items-center justify-center min-h-64 ${colorMap[feature.color].split(' ')[0]}`}>
                      <span className="text-8xl">{feature.icon}</span>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-pink-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-3xl font-black text-white mb-4">{t('featuresPage.cta.title')}</h2>
            <div className="flex justify-center">
              <AppCTAButtons theme="light" />
            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                {t('featuresPage.cta.talkToUs')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
