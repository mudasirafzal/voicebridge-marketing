import AnimatedSection from '../../components/ui/AnimatedSection'

const pillars = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Built for Families',
    description: 'Designed with input from parents, caregivers, and special education professionals. Every feature serves a real family need — not a checkbox.',
  },
  {
    icon: '🩺',
    title: 'Clinically Informed',
    description: 'Our card library and communication models are informed by evidence-based AAC research and refined through feedback from practicing speech-language pathologists.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your child\'s communication data belongs to you. We never sell data, use it for advertising, or share it with third parties — ever. COPPA compliant.',
  },
  {
    icon: '🚀',
    title: 'Always Improving',
    description: 'VoiceBridge is actively developed with regular updates based on family feedback. New cards, languages, and features are continuously being added.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">Why VoiceBridge</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            The App That Puts Families First
          </h2>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection variant="fadeIn" delay={0.1} className="text-center mb-16">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-violet-100 font-medium leading-relaxed italic">
              "Communication is a basic human right. VoiceBridge ensures every child can be heard."
            </p>
          </blockquote>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} variant="fadeUp" delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-violet-200 leading-relaxed">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
