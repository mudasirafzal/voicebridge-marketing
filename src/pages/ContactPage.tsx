import SEO from '../components/SEO'
import Contact from './Home/Contact'
import AnimatedSection from '../components/ui/AnimatedSection'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the VoiceBridge team. We support parents, therapy centers, schools, and NGOs. Reach us at info@mstechlabs.com."
      />
      <section className="pt-32 pb-8 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Let's{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you have questions, want to onboard your therapy center, or just want to learn more — we'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <Contact />
    </>
  )
}
