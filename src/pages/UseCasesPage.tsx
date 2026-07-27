import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'

const useCases = [
  {
    persona: '👩 Parent at Home',
    title: 'Parents & Primary Caregivers',
    scenario: 'Aisha has a 7-year-old son who is largely non-verbal. Before VoiceBridge, she could only guess when he was hungry, thirsty, or in pain. Now his communication board lives on an old tablet by the couch. He taps what he needs, and Aisha gets a notification on her phone — even when she\'s in another room.',
    benefits: [
      'Know what your child needs in real-time',
      'Build communication habits through daily use',
      'Track which needs come up most often',
      'Reduce frustration for both parent and child',
      'Access communication history for doctor visits',
    ],
    quote: '"The crying jags from frustration have dropped so much. He can finally tell us he\'s in pain, or thirsty, or scared."',
    attribution: 'Mother of a 7-year-old, Lahore',
    color: 'from-violet-500 to-violet-600',
  },
  {
    persona: '👴 Extended Family Caregiver',
    title: 'Grandparents & Relatives',
    scenario: 'Rehman looks after his grandson two days a week while his daughter works. Though he loves his grandson deeply, communication was always difficult and stressful. With VoiceBridge, even a grandparent with minimal tech experience can read the notification and respond to a need within seconds.',
    benefits: [
      'No technical expertise required to use',
      'Notifications work on any smartphone',
      'Urdu support bridges language gaps',
      'Builds confidence in all caregivers',
      'Reduces handover anxiety for parents',
    ],
    quote: '"I was nervous about looking after him. Now I feel confident. When he needs something, my phone tells me."',
    attribution: 'Grandfather and part-time caregiver',
    color: 'from-pink-500 to-rose-500',
  },
  {
    persona: '🏥 Speech Therapy Center',
    title: 'Therapy Centers & Clinics',
    scenario: 'A speech and language therapy center in Karachi onboarded 15 families in the first month. Therapists use the professional dashboard to view each client\'s communication board, track session progress, and add clinical notes that parents can access at home.',
    benefits: [
      'Centralized dashboard for all client families',
      'Session documentation and progress notes',
      'Data-driven therapy planning',
      'Extends therapy impact into the home',
      'Streamlined family onboarding',
      'Billing-friendly session tracking',
    ],
    quote: '"It bridges the gap between clinic and home. Parents see the same goals we\'re working on, every day."',
    attribution: 'Director, KAR Speech and Language Clinic',
    color: 'from-amber-500 to-orange-500',
  },
  {
    persona: '🏫 Special Education School',
    title: 'Schools & Special Education Programs',
    scenario: 'A special needs school uses VoiceBridge in classrooms alongside traditional AAC methods. Teachers configure shared classroom boards with common phrases. Students who previously struggled to communicate with teaching staff are now expressing themselves independently.',
    benefits: [
      'Classroom-wide boards for shared phrases',
      'Individual student profiles',
      'Notify teachers of student needs',
      'Progress reports for IEP documentation',
      'Works alongside other AAC tools',
    ],
    quote: '"Three of our students who had never communicated independently are now initiating communication every day."',
    attribution: 'Lead SEN Teacher, Islamabad',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    persona: '👩‍🏫 Special Education Teacher',
    title: 'Special Education Teachers',
    scenario: 'Mrs. Sana teaches a class of 8 children with varying communication needs. She uses VoiceBridge to create individual boards for each student, and a shared class board for common needs like "bathroom", "water", and "all done". She monitors communications from the teacher dashboard during class.',
    benefits: [
      'Individual and shared classroom boards',
      'Real-time class monitoring dashboard',
      'Customize boards per student\'s IEP goals',
      'Communication logs for progress tracking',
      'Parent communication portal',
    ],
    quote: '"It\'s the first tool that works for all my students, not just some of them."',
    attribution: 'Special Education Teacher, 8 years experience',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    persona: '🌍 NGO & Community Program',
    title: 'NGOs & Community Health Programs',
    scenario: 'An NGO running communication support programs for people of determination across rural Punjab distributes tablets pre-loaded with VoiceBridge to families who can\'t afford traditional AAC devices. The Urdu language support and low device requirements make it accessible even in lower-resource settings.',
    benefits: [
      'Low hardware requirements — runs on old tablets',
      'Full Urdu language support',
      'No ongoing subscription cost for basic use',
      'Train families in group onboarding sessions',
      'Remote support from central team',
    ],
    quote: '"We\'ve given voices to children who never had access to communication tools before. The impact is profound."',
    attribution: 'Program Director, People of Determination Support Foundation',
    color: 'from-rose-500 to-pink-600',
  },
]

export default function UseCasesPage() {
  return (
    <>
      <SEO
        title="Use Cases"
        description="See how VoiceBridge supports parents, therapy centers, schools, special education teachers, and NGOs and community health programs across South Asia and beyond."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              VoiceBridge Works for{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Every Family's Story
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              From parents at home to therapy centers to schools and NGOs — VoiceBridge adapts to where communication needs to happen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.title} variant="fadeUp" delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${uc.color} p-5 text-white`}>
                    <div className="text-2xl mb-2">{uc.persona}</div>
                    <h2 className="text-lg font-bold">{uc.title}</h2>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{uc.scenario}</p>
                    <div className="mb-5">
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Benefits</h3>
                      <ul className="space-y-1.5">
                        {uc.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <blockquote className="mt-auto bg-slate-50 rounded-xl p-4 border-l-4 border-violet-400">
                      <p className="text-sm text-slate-600 italic mb-2">{uc.quote}</p>
                      <cite className="text-xs text-slate-400 not-italic">— {uc.attribution}</cite>
                    </blockquote>
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
            <h2 className="text-3xl font-black text-white mb-4">Which story is yours?</h2>
            <p className="text-violet-100 mb-8">
              Whatever your situation, VoiceBridge can be customized to fit. Start here today — no commitment required.
            </p>
            <a
              href="https://voicebridge-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-violet-700 font-bold rounded-xl hover:scale-105 transition-transform"
            >
              Get Started →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
