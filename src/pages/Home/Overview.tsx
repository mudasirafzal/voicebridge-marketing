import AnimatedSection from '../../components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '1',
    title: 'Child taps a card',
    desc: 'A non-verbal child browses their personalized visual board and taps the card that expresses what they need.',
    color: 'bg-violet-500',
  },
  {
    step: '2',
    title: 'Card speaks aloud',
    desc: 'The app speaks the phrase using text-to-speech with the child\'s name — reinforcing communication and identity.',
    color: 'bg-pink-500',
  },
  {
    step: '3',
    title: 'Parent is notified',
    desc: 'A real-time push notification reaches the parent or caregiver instantly, wherever they are.',
    color: 'bg-amber-500',
  },
]

export default function Overview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <AnimatedSection variant="fadeUp">
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">What is VoiceBridge?</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Communication technology built{' '}
                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                  for families, not clinics
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1} className="mt-6">
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                VoiceBridge is an Augmentative and Alternative Communication (AAC) app designed for families of non-verbal people of determination. Unlike complex clinical tools, VoiceBridge is intuitive enough for a child to use independently.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Parents and caregivers receive real-time notifications the moment their child communicates — creating a genuine, continuous communication loop throughout the day.
              </p>
            </AnimatedSection>

            {/* Steps */}
            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <AnimatedSection key={step.step} variant="slideLeft" delay={0.15 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full ${step.color} text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{step.desc}</p>
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
                <div className="text-4xl font-black mb-1">2</div>
                <p className="text-sm font-medium text-violet-200">Languages supported — English & Urdu</p>
                <p className="text-xs text-violet-300 mt-2">More languages coming soon</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.35} className="sm:col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">💡</div>
                  <h3 className="font-bold text-slate-900">Did you know?</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Research shows that AAC tools can dramatically improve communication outcomes for non-verbal children, often unlocking the ability to express needs they couldn't before.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
