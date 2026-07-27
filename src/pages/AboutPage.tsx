import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import { CheckCircle } from 'lucide-react'

const roadmapItems = [
  { phase: 'Phase 1 — Complete', items: ['Visual communication board', 'Text-to-speech (English & Urdu)', 'Parent push notifications', 'Multi-profile management', 'Communication history'], done: true },
  { phase: 'Phase 2 — In Progress', items: ['Native iOS and Android apps', 'Offline mode', 'Improved card analytics', 'More card categories', 'Therapist collaboration tools'], done: false },
  { phase: 'Phase 3 — Planned', items: ['Additional languages (Arabic, Hindi)', 'AI-powered card suggestions', 'Video card support', 'Integration with school systems', 'Community card sharing'], done: false },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about VoiceBridge — why it was built, our mission, vision, and roadmap for the future of AAC communication technology for people of determination."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Built for{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Real Families
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              VoiceBridge was born from a simple belief: every child deserves to be heard, and every parent deserves to know what their child needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why it was built */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="slideLeft">
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Why We Built This</span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 mb-6">
                Communication is a Right, Not a Privilege
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In South Asia and across the world, families of people of determination face a critical gap: the AAC tools that exist are designed for Western markets, prohibitively expensive, and almost never available in Urdu.
                </p>
                <p>
                  VoiceBridge was built to change that. We started with one question: what would a communication app look like if it was designed specifically for families of people of determination across South Asia and beyond?
                </p>
                <p>
                  The answer: bilingual, affordable, mobile-first, and deeply connected to the family unit — with real-time parent alerts at its core.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideRight">
              <div className="space-y-4">
                {[
                  { icon: '🎯', title: 'Our Mission', desc: 'To give every non-verbal child a voice, and every parent the confidence of knowing what their child needs — regardless of geography or resources.' },
                  { icon: '🌟', title: 'Our Vision', desc: 'A world where communication disability is no longer a barrier to expressing fundamental human needs. Technology that truly serves underrepresented communities.' },
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
            <h2 className="text-3xl font-black text-slate-900">What We Stand For</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '❤️', title: 'Family First', desc: 'Every decision is made by asking: does this make life easier for families?' },
              { icon: '🌍', title: 'Accessibility', desc: 'Great AAC tools should be available to every family, not just those with resources.' },
              { icon: '🔬', title: 'Evidence-Based', desc: 'Our approach is informed by speech-language pathology research and clinical best practices.' },
              { icon: '🔒', title: 'Privacy', desc: 'We will never monetize your child\'s data. This is a non-negotiable principle.' },
              { icon: '📈', title: 'Continuous Improvement', desc: 'We ship updates regularly, driven by feedback from the families who use VoiceBridge.' },
              { icon: '🤝', title: 'Community', desc: 'VoiceBridge is built in partnership with families, therapists, and educators.' },
            ].map((v, i) => (
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
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Roadmap</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Where We're Headed</h2>
            <p className="mt-4 text-slate-500">VoiceBridge is actively developed. Here's what we've built and what's coming.</p>
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
