import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'
import { Link } from 'react-router-dom'

const detailedSteps = [
  {
    number: '01',
    icon: '👤',
    title: 'Create Your Account',
    description: 'Sign up as a parent or therapy center in under 2 minutes. No credit card required. You\'ll be taken directly to the setup wizard.',
    details: ['Choose parent or therapy center account type', 'Access your dashboard immediately'],
    color: 'violet',
  },
  {
    number: '02',
    icon: '👧',
    title: 'Set Up Your Child\'s Profile',
    description: 'Add your child\'s name, photo, and preferred language. This personalizes the experience — the app will use your child\'s name in spoken phrases.',
    details: ['Enter child name (used in text-to-speech)', 'Choose English, Urdu, or both', 'Set accessibility preferences'],
    color: 'pink',
  },
  {
    number: '03',
    icon: '🎨',
    title: 'Customize the Communication Board',
    description: 'Start with our pre-built card library or build from scratch. Organize cards into categories that match your child\'s daily needs and routine.',
    details: ['Browse 100+ pre-built cards', 'Add custom cards with photos from your gallery', 'Arrange and group cards by category'],
    color: 'amber',
  },
  {
    number: '04',
    icon: '📱',
    title: 'Child Uses the Board',
    description: 'Hand the device to your child. The full-screen communication board is simple enough for them to use independently. Tapping a card speaks the phrase aloud.',
    details: ['Large colorful cards fill the screen', 'Audio feedback on every tap', 'Child can navigate between card categories'],
    color: 'emerald',
  },
  {
    number: '05',
    icon: '🔔',
    title: 'Parents Get Notified Instantly',
    description: 'Every card tap sends an immediate push notification to all connected devices. You see your child\'s name and exactly what they communicated.',
    details: ['Push notification arrives within seconds', 'Notification shows child name + phrase', 'Acknowledge with one tap'],
    color: 'blue',
  },

]

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  violet: { bg: 'bg-violet-600', text: 'text-violet-600', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500', badge: 'bg-pink-50 text-pink-700 border-pink-200' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-500', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
}

const journeys = [
  {
    persona: '👨‍👩‍👧 Parent / Caregiver',
    color: 'from-violet-500 to-violet-600',
    steps: [
      'Create account → set up child profile',
      'Customize communication board',
      'Enable push notifications',
      'Receive alerts as child communicates',
      'Acknowledge requests to close the loop',
      'Review weekly communication history',
    ],
  },
  {
    persona: '👧 Child (Non-verbal)',
    color: 'from-pink-500 to-pink-600',
    steps: [
      'Open VoiceBridge on their device',
      'See their personal communication board',
      'Browse and tap the card they need',
      'Hear the phrase spoken aloud',
      'See confirmation the parent was notified',
      'Communication need is met',
    ],
  },
  {
    persona: '🏥 Therapist / Therapy Center',
    color: 'from-amber-500 to-amber-600',
    steps: [
      'Create therapy center account',
      'Onboard client families',
      'View all client communication boards',
      'Access session histories and analytics',
      'Add session notes and observations',
      'Share progress reports with parents',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How It Works"
        description="Learn how VoiceBridge works — from setup to daily use. See step-by-step flows for parents, children, and therapy centers."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              From Setup to{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                First Communication
              </span>
              {' '}in Minutes
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              VoiceBridge is designed to get out of the way and let communication happen naturally. Here's how the whole system works.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed steps */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Step-by-Step Guide</h2>
          </AnimatedSection>
          <div className="space-y-12">
            {detailedSteps.map((step, i) => {
              const colors = colorMap[step.color]
              const isEven = i % 2 === 1
              return (
                <AnimatedSection key={step.number} variant={isEven ? 'slideRight' : 'slideLeft'}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={isEven ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full ${colors.bg} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
                          {step.number}
                        </div>
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((d) => (
                          <li key={d} className={`text-sm px-3 py-2 rounded-lg border ${colors.badge}`}>
                            → {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${isEven ? 'lg:col-start-1' : ''} flex justify-center`}>
                      <div className={`w-48 h-48 rounded-3xl ${colors.bg} flex items-center justify-center opacity-20 text-8xl`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* User journey maps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">User Journeys</h2>
            <p className="mt-4 text-slate-500">How each person in the VoiceBridge ecosystem experiences the app.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeys.map((journey, i) => (
              <AnimatedSection key={journey.persona} variant="fadeUp" delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full">
                  <div className={`bg-gradient-to-r ${journey.color} p-4 text-white font-bold text-sm`}>
                    {journey.persona}
                  </div>
                  <div className="p-5">
                    <ol className="space-y-3">
                      {journey.steps.map((step, si) => (
                        <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {si + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-pink-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-3xl font-black text-white mb-4">Ready to get started?</h2>
            <p className="text-violet-100 mb-8">Set up your child's board in less than 5 minutes.</p>
            <div className="flex justify-center">
              <AppCTAButtons theme="light" />
            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/docs" className="px-6 py-3 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Read the Docs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
