import { useTranslation } from 'react-i18next'
import SEO from '../../components/SEO'
import Hero from './Hero'
import Overview from './Overview'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Screenshots from './Screenshots'
import WhyChooseUs from './WhyChooseUs'
import FAQ from './FAQ'
import CTASection from './CTASection'
import Contact from './Contact'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />
      <Hero />
      <Overview />
      <Features />
      <HowItWorks />
      <Screenshots />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <FAQ />
      <CTASection />
      <Contact />
    </>
  )
}
