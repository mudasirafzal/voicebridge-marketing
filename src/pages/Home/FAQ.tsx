import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is VoiceBridge?',
    a: 'VoiceBridge is an Augmentative and Alternative Communication (AAC) app designed for non-verbal people of determination. It provides a visual card-based interface that lets individuals tap cards to express their needs, while parents and caregivers receive instant spoken alerts and push notifications.',
  },
  {
    q: 'Who is VoiceBridge designed for?',
    a: 'VoiceBridge is designed for non-verbal or minimally verbal people of determination of all ages, their parents, caregivers, speech-language pathologists, special education teachers, and therapy centers.',
  },
  {
    q: 'Is VoiceBridge available on mobile?',
    a: 'Yes. VoiceBridge has a dedicated mobile app for iOS and Android — ideal for setting up a tablet as a communication board. The caregiver dashboard also works on any modern web browser with no installation needed.',
  },
  {
    q: 'What languages are supported?',
    a: 'VoiceBridge fully supports English, Urdu, and Arabic — including card labels, text-to-speech in all three languages, and the full app interface. Urdu and Arabic speech uses authentic native pronunciation. More languages are planned based on community demand.',
  },
  {
    q: 'How does the alert and acknowledge system work?',
    a: 'When a person taps a card, the board speaks the phrase aloud and all caregiver devices receive an instant alert with the person\'s name and phrase. When any caregiver taps "Acknowledge", the board stops speaking on every paired device simultaneously — so the communication loop is closed from any device.',
  },
  {
    q: 'Can I choose the voice and speaking style?',
    a: 'Yes. From Settings → Configurations, you can choose an English voice accent from those available on your device, and pick a speaking style preset: Natural, Child, Clear, or Expressive — each with tuned pitch and rate. For Urdu and Arabic, VoiceBridge automatically uses high-quality native-accent TTS if no native voice is installed.',
  },
  {
    q: 'Can I add custom communication cards?',
    a: 'Yes. In addition to the pre-built card library, you can create fully custom cards with personalized images, labels in English, Urdu, and Arabic, and a spoken phrase. Cards appear on the board immediately after saving.',
  },
  {
    q: 'Can multiple caregivers receive alerts at the same time?',
    a: 'Yes. All caregivers linked to a profile receive alerts simultaneously. When any one of them acknowledges, the alert is resolved for everyone and the board stops speaking — no other device needs to act.',
  },
  {
    q: 'Is the data secure?',
    a: 'Absolutely. VoiceBridge uses industry-standard encryption for all data in transit and at rest. We never sell user data or use communication history for advertising. Your family\'s data belongs to you and can be deleted at any time.',
  },
  {
    q: 'How do I get started?',
    a: 'Getting started takes less than 5 minutes. Create a parent account, add a profile, and the communication board is ready immediately. You can customize it, pair board devices, and configure voice settings anytime.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimatedSection variant="fadeUp" delay={index * 0.04}>
      <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        >
          <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Everything you need to know before getting started.
          </p>
        </AnimatedSection>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
