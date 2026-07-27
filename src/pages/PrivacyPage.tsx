import SEO from '../components/SEO'

const sections = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Account Information',
        text: 'When you create a VoiceBridge account, we collect your name, email address, and account type (parent, caregiver, or therapy center). This information is necessary to create and manage your account.',
      },
      {
        subtitle: 'Profile Information',
        text: 'You may add profiles for the individuals who use the communication board (name, photo, and preferred language). This information is used solely to personalize the app experience.',
      },
      {
        subtitle: 'Communication Data',
        text: 'VoiceBridge logs card taps and communication events to provide the history and notification features. This data includes timestamps, card titles, and phrases — it is tied to individual profiles and visible only to authorized account holders.',
      },
      {
        subtitle: 'Device & Usage Information',
        text: 'We collect basic technical information such as device type, operating system, and app version to maintain service quality and diagnose issues. We do not use this data for advertising.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'To Provide the Service',
        text: 'We use your information to operate the VoiceBridge platform — delivering real-time notifications, maintaining communication logs, and personalizing the board experience.',
      },
      {
        subtitle: 'To Improve the App',
        text: 'Aggregate, anonymized usage patterns help us understand which features are most valuable and where we can improve. Individual communication content is never used for this purpose.',
      },
      {
        subtitle: 'To Communicate With You',
        text: 'We may send you service-related emails such as account confirmations, security alerts, and product updates. You can opt out of non-essential communications at any time.',
      },
    ],
  },
  {
    title: 'Data Sharing & Disclosure',
    content: [
      {
        subtitle: 'We Never Sell Your Data',
        text: 'VoiceBridge does not sell, rent, or trade your personal information or your family\'s communication data to any third party, ever.',
      },
      {
        subtitle: 'Service Providers',
        text: 'We work with a small number of trusted infrastructure providers (cloud hosting, push notification delivery) who process data strictly on our behalf under confidentiality agreements.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose information if required by law, regulation, or a valid legal process. We will notify you when legally permitted to do so.',
      },
      {
        subtitle: 'Therapy Centers',
        text: 'If a parent links a profile to a therapy center account, the therapy center can view that profile\'s board and communication history. This sharing is initiated and controlled by the parent.',
      },
    ],
  },
  {
    title: 'Data Security',
    content: [
      {
        subtitle: 'Encryption',
        text: 'All data is transmitted over encrypted connections (TLS). Data at rest is encrypted using industry-standard protocols on our cloud infrastructure.',
      },
      {
        subtitle: 'Access Controls',
        text: 'Access to your data is restricted by role-based permissions. Only you and the caregivers you authorize can view your family\'s communication data.',
      },
      {
        subtitle: 'Incident Response',
        text: 'In the unlikely event of a data breach affecting your personal information, we will notify you promptly and take immediate steps to contain and remediate the issue.',
      },
    ],
  },
  {
    title: 'Children\'s Privacy',
    content: [
      {
        subtitle: 'Accounts for Adults Only',
        text: 'VoiceBridge accounts are created and managed by adults (parents, caregivers, or therapy professionals). We do not knowingly collect personal information directly from children.',
      },
      {
        subtitle: 'Profile Data',
        text: 'Information added to a child\'s profile (name, photo, communication history) is entered by an adult account holder and is protected under that account\'s privacy settings.',
      },
    ],
  },
  {
    title: 'Your Rights & Choices',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You can view and update your account information and profile data at any time from within the app.',
      },
      {
        subtitle: 'Data Deletion',
        text: 'You may request deletion of your account and all associated data by contacting us at privacy@voicebridge.app. We will process your request within 30 days.',
      },
      {
        subtitle: 'Data Export',
        text: 'You may request an export of your communication history and account data. Contact us at privacy@voicebridge.app to submit a request.',
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      {
        subtitle: 'Notification of Updates',
        text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app notice. Continued use of VoiceBridge after the effective date of a revision constitutes acceptance of the updated policy.',
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy — VoiceBridge"
        description="How VoiceBridge collects, uses, and protects your family's data. We never sell your data and communication content stays private."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-medium mb-6">
            🔒 Your Privacy Matters
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-lg">Effective date: January 1, 2025</p>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-xl mx-auto">
            VoiceBridge is built for families. We treat your data — and especially your family's communication data — with the utmost care and transparency.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick summary */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 mb-12">
            <h2 className="text-base font-black text-violet-900 mb-3">The Short Version</h2>
            <ul className="space-y-2 text-sm text-violet-800">
              <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">✓</span> We never sell your data or your family's communication content.</li>
              <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">✓</span> Communication logs are visible only to you and caregivers you authorize.</li>
              <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">✓</span> You can request deletion of your account and all data at any time.</li>
              <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">✓</span> We use minimal data — only what's needed to run the service.</li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                  {i + 1}. {section.title}
                </h2>
                <div className="space-y-5">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      <h3 className="text-sm font-bold text-slate-800 mb-1">{item.subtitle}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold text-slate-700 mb-1">Questions about this policy?</p>
            <p className="text-sm text-slate-500 mb-4">We're happy to answer any questions about how we handle your data.</p>
            <a
              href="mailto:privacy@voicebridge.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-sm hover:bg-violet-700 transition-colors"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
