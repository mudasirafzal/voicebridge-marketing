import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const featureCategories = [
  {
    icon: '🗣️',
    title: 'Visual Communication Board',
    tagline: 'The heart of VoiceBridge',
    description: 'A fully customizable visual board that gives non-verbal children a powerful, intuitive way to communicate their needs and feelings.',
    benefits: [
      'Pre-built library of communication cards',
      'Custom card creation with your own images and phrases',
      'English and Urdu labels on every card',
      'Large, colorful visuals optimized for quick recognition',
      'Categorized cards: needs, emotions, activities, and more',
      'Text-to-speech reads the phrase aloud on every tap',
    ],
    color: 'violet',
    side: 'left',
  },
  {
    icon: '🔔',
    title: 'Real-Time Parent Notifications',
    tagline: 'Never miss a moment',
    description: 'The moment your child taps a card, you know. Instant push notifications keep parents and caregivers connected to their child\'s communication — no matter where they are.',
    benefits: [
      'Instant push notifications on any device',
      'Notification includes child\'s name and exact phrase',
      'One-tap acknowledgment from the notification itself',
      'Full communication log available in the app',
      'Configurable quiet hours for nighttime',
      'Multi-caregiver support — notify everyone at once',
    ],
    color: 'pink',
    side: 'right',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Multi-Profile Management',
    tagline: 'One account for the whole family',
    description: 'Manage multiple children from a single parent account. Each child gets their own personalized board, settings, and communication history.',
    benefits: [
      'Unlimited children per parent account',
      'Individual boards tailored to each child\'s needs',
      'Separate communication logs per child',
      'Quick child-switching within the dashboard',
      'Share access with therapists and educators',
      'Role-based permissions for different caregivers',
    ],
    color: 'amber',
    side: 'left',
  },
  {
    icon: '🏥',
    title: 'Therapy Center Dashboard',
    tagline: 'Purpose-built for professionals',
    description: 'Therapists and therapy centers get a dedicated professional dashboard to manage multiple client families, track session outcomes, and collaborate with parents.',
    benefits: [
      'Manage unlimited client profiles from one login',
      'View all client communication boards',
      'Session notes and progress documentation',
      'Communication pattern analytics',
      'Parent collaboration and shared notes',
      'Bulk account setup for new families',
    ],
    color: 'emerald',
    side: 'right',
  },
  {
    icon: '📊',
    title: 'Communication Analytics',
    tagline: 'Insights that drive progress',
    description: 'Every tap is logged. Review detailed communication histories, spot patterns, and generate progress reports to share with therapists and educators.',
    benefits: [
      'Every tap logged with timestamp and acknowledgement record',
      'Most-used cards and categories at a glance',
      'Time-of-day communication patterns',
      'Per-profile history accessible to linked caregivers',
      'Activity visible to linked therapy center professionals',
    ],
    color: 'blue',
    side: 'left',
  },
  {
    icon: '🌍',
    title: 'Bilingual English & Urdu',
    tagline: 'Communication without borders',
    description: 'VoiceBridge offers complete bilingual support for English and Urdu-speaking families — card labels, text-to-speech audio, and the full app interface.',
    benefits: [
      'All card labels available in English and Urdu',
      'Text-to-speech in both languages',
      'Urdu uses authentic Pakistani pronunciation',
      'Automatic high-quality Urdu TTS if no native voice installed',
      'Board language switchable per profile instantly',
      'More languages on the roadmap',
    ],
    color: 'indigo',
    side: 'right',
  },
  {
    icon: '🎙️',
    title: 'Voice & Speaking Styles',
    tagline: 'A voice that feels right',
    description: 'Choose from multiple English voice accents and four speaking style presets to find the voice that works best for each individual.',
    benefits: [
      'Pick from any English voice on your device or browser',
      'Natural — balanced, conversational tone',
      'Child — gentle, slightly higher pitch and slower rate',
      'Clear — deliberate, slower speech for new learners',
      'Expressive — energetic for engaged communicators',
      'First-alert voice fix — no wrong accent on the very first notification',
    ],
    color: 'violet',
    side: 'left',
  },
  {
    icon: '🔒',
    title: 'Privacy & Security',
    tagline: 'Your family\'s data stays yours',
    description: 'We take the privacy of children seriously. VoiceBridge is COPPA compliant, uses end-to-end encryption, and never sells or shares user data.',
    benefits: [
      'COPPA compliant — designed for children',
      'End-to-end encryption for all data',
      'No advertising or data monetization',
      'Data export and deletion on request',
      'Secure password and account management',
      'Regular third-party security audits',
    ],
    color: 'slate',
    side: 'left',
  },
  {
    icon: '📱',
    title: 'Cross-Platform Access',
    tagline: 'Works on any device',
    description: 'VoiceBridge runs in any modern web browser — on tablets, phones, and desktop computers — without requiring an app download. Use it anywhere.',
    benefits: [
      'Works on iOS, Android, Windows, macOS',
      'No app download required',
      'Optimized for tablet use by children',
      'Offline mode for core communication features',
      'Syncs across all your devices automatically',
      'Native iOS and Android apps coming soon',
    ],
    color: 'cyan',
    side: 'right',
  },
  {
    icon: '🎯',
    title: 'Personalization & Customization',
    tagline: 'Built around your child',
    description: 'No two children are alike. VoiceBridge lets you fully customize the communication board, card categories, colors, and layout to match your child\'s specific needs.',
    benefits: [
      'Drag-and-drop card arrangement',
      'Adjustable grid size for accessibility',
      'Custom card colors and background themes',
      'Photo library or camera for card images',
      'Voice recording for personalized audio',
      'High-contrast and large-text accessibility modes',
    ],
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
  return (
    <>
      <SEO
        title="Features"
        description="Explore all VoiceBridge features: visual communication cards, real-time parent alerts, therapy center dashboards, bilingual support, and more."
      />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <AnimatedSection variant="fadeUp">
            <span className="inline-block px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-medium mb-6">
              Full Feature Set
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Built for Real{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Communication Needs
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Every feature in VoiceBridge was designed around a real challenge faced by families of non-verbal children. Nothing is there for show — everything serves a purpose.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature sections */}
      <div className="bg-white">
        {featureCategories.map((feature, i) => {
          const isRight = feature.side === 'right'
          return (
            <section key={feature.title} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRight ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Text */}
                  <AnimatedSection variant={isRight ? 'slideRight' : 'slideLeft'} className={isRight ? 'lg:col-start-2' : ''}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colorMap[feature.color]} rounded-full text-xs font-semibold mb-4`}>
                      {feature.tagline}
                    </div>
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">{feature.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                    <ul className="space-y-2.5">
                      {feature.benefits.map((benefit) => (
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
            <h2 className="text-3xl font-black text-white mb-4">Ready to explore VoiceBridge?</h2>
            <div className="flex justify-center">
              <AppCTAButtons theme="light" />
            </div>
            <div className="mt-6 flex justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Talk to Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
