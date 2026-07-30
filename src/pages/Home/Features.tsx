import AnimatedSection from '../../components/ui/AnimatedSection'

const features = [
  {
    icon: '🗣️',
    title: 'Visual Communication Cards',
    description: 'Pre-built card libraries in English, Urdu, and Arabic, plus custom card creation. Each card has an image, label, and audio — designed for quick, intuitive tapping.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: '🔔',
    title: 'Instant Caregiver Alerts',
    description: 'Real-time push notifications reach parents and caregivers the moment a card is tapped — with the person\'s name and phrase spoken aloud automatically.',
    color: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: '✅',
    title: 'Acknowledge & Stop',
    description: 'When a caregiver acknowledges a request, the board stops speaking on all paired devices simultaneously — closing the communication loop instantly.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: '🎙️',
    title: 'Voice & Speaking Styles',
    description: 'Choose from multiple voice accents and speaking style presets — Natural, Child, Clear, or Expressive — to find the voice that works best for each individual.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Multi-Profile Support',
    description: 'Manage multiple profiles from a single account. Each profile has its own personalized board, communication history, and settings.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: '🌍',
    title: 'Trilingual: English, Urdu & Arabic',
    description: 'Full English, Urdu, and Arabic support — card labels, text-to-speech, and app interface. Urdu and Arabic use authentic native-accent pronunciation via high-quality TTS.',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: '🏥',
    title: 'Therapy Center Dashboard',
    description: 'Dedicated professional tools for therapists and care centers. Manage multiple client profiles, view boards, and track communication history.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: '📱',
    title: 'Mobile App (iOS & Android)',
    description: 'Dedicated mobile app for the communication board and caregiver alerts — optimized for tablets as dedicated board devices with no accidental back-navigation.',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: '📊',
    title: 'Communication History',
    description: 'Every tap is logged with timestamp and acknowledgement record. Review patterns and share activity summaries with therapists and educators.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            Everything Your Family Needs
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            VoiceBridge is purpose-built for families of people of determination — with every feature designed around real-world communication needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} variant="fadeUp" delay={i * 0.08}>
              <div className={`h-full rounded-2xl p-6 ${feature.bg} border ${feature.border} hover:shadow-lg transition-shadow`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
