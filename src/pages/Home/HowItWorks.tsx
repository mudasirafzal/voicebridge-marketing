import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from '../../components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: '📱',
    title: 'Child Opens the Board',
    description: 'The child opens VoiceBridge on any device. Their personalized communication board appears with large, colorful visual cards — each representing a common need or feeling.',
    color: 'violet',
  },
  {
    number: '02',
    icon: '🗣️',
    title: 'Card Speaks Aloud',
    description: 'When the child taps a card, the app reads the phrase aloud using the child\'s name — "Musa needs water." This reinforces language learning while immediately communicating the need.',
    color: 'pink',
  },
  {
    number: '03',
    icon: '🔔',
    title: 'Parent Gets Notified',
    description: 'The parent or caregiver receives a real-time push notification on their device. No matter where they are in the house or building, they know immediately what their child needs.',
    color: 'amber',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Communication Loop Closes',
    description: 'The parent acknowledges the request in the app, completing the communication loop. The child sees confirmation, building trust and encouraging further communication attempts.',
    color: 'emerald',
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; line: string }> = {
  violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-200', line: 'bg-violet-600' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-200', line: 'bg-pink-500' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-200', line: 'bg-amber-500' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-200', line: 'bg-emerald-500' },
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const colors = colorMap[step.color]
  const isEven = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-start gap-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-16 h-16 rounded-2xl ${colors.bg} text-white flex flex-col items-center justify-center shadow-lg`}>
          <span className="text-2xl">{step.icon}</span>
        </div>
        <div className={`text-xs font-bold ${colors.text} mt-2`}>{step.number}</div>
      </div>
      <div className={`flex-1 bg-white rounded-2xl p-6 border ${colors.border} shadow-sm hover:shadow-md transition-shadow ${isEven ? 'lg:text-right' : ''}`}>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
        <p className="text-slate-600 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">How it Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            Simple. Instant. Powerful.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Four steps that transform how your family communicates every single day.
          </p>
        </AnimatedSection>

        <div className="relative space-y-8">
          {/* Connecting line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-violet-600 via-pink-500 to-emerald-500 opacity-30 hidden lg:block" />
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
