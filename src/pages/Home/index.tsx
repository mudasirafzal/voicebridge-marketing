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
  return (
    <>
      <SEO
        title="VoiceBridge - AAC Communication App for People of Determination"
        description="VoiceBridge helps non-verbal people of determination express their needs through visual communication cards. Real-time parent alerts. Supports English, Urdu & Arabic."
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
