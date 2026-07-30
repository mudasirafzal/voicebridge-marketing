import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import Contact from './Home/Contact'
import AnimatedSection from '../components/ui/AnimatedSection'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('contactPage.seo.title')}
        description={t('contactPage.seo.description')}
      />
      <section className="pt-32 pb-8 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              {t('contactPage.hero.titlePrefix')}{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                {t('contactPage.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t('contactPage.hero.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>
      <Contact />
    </>
  )
}
