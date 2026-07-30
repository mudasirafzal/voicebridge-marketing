import { useState } from 'react'
import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'
import { ChevronRight, ExternalLink } from 'lucide-react'

const sections = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: '🚀',
    content: {
      title: 'Getting Started with VoiceBridge',
      body: `VoiceBridge works across two platforms: a web dashboard for caregivers and parents, and a mobile app (iOS & Android) that turns any phone or tablet into a child's communication board.

**Step 1: Create Your Account**
Visit voicebridge.website and click "Sign Up". Choose whether you're signing up as a Parent/Caregiver or a Therapy Center. Enter your email address and create a secure password.

**Step 2: Add a Profile**
Click "+ Add" from your dashboard. You can provide:
- **Name** (required)
- **Date of birth** — used to display age on the profile
- **Profile photo** — shown on the board header and in alerts
- **Preferred language** — English 🇬🇧, Urdu 🇵🇰, or Arabic 🇸🇦
- **Address** and **Notes** — useful for therapy centers storing client details

**Step 3: Configure the Board**
Open the profile to set board language, the number of cards displayed, and alert settings. All settings are managed directly from the profile page and take effect immediately on the board.

**Step 4: Set Up a Communication Device**
You have two options for the board device:
- **Mobile app** (recommended): download the VoiceBridge app for iOS or Android, then enter the 6-digit pairing code on the Pair screen
- **Web browser**: navigate to /pair on the web app and enter the pairing code

The board has no back button, so the person cannot accidentally leave it.

**Step 5: Enable Notifications**
Allow push notifications on your caregiver device so you receive real-time alerts whenever a card is tapped.

**Step 6: Configure Voice & Speaking Style**
In Settings → Configurations, choose an English voice accent and a speaking style preset (Natural, Child, Clear, or Expressive). For Urdu and Arabic, high-quality native-accent TTS is used automatically if no native voice is installed.`,
    },
  },
  {
    id: 'child-profiles',
    label: 'Profiles',
    icon: '👧',
    content: {
      title: 'Managing Profiles',
      body: `Each person of determination has their own profile that centralises their personal details and board settings.

**Profile Information**
The profile stores:
- **Name** — displayed on the board and spoken in all alerts
- **Date of birth** — shown as the person's age on the profile page
- **Profile photo** — displayed on the board header and in caregiver alerts
- **Preferred language** — controls which language the board and text-to-speech use
- **Address** — optional; useful for therapy centers
- **Notes** — free-text field for communication style notes, medical information, or therapy goals

**Editing a Profile**
From the Profiles page, click "View Profile" on any card, then click "Edit Profile". All fields including the photo can be updated at any time.

**Board Settings (per profile)**
Each profile page includes a live Board Settings panel where you can adjust:
- **Push notifications** toggle — enable or disable alerts for this profile
- **Board language** — switch between English, Urdu, and Arabic instantly
- **Cards on board** — choose 2, 4, 6, 9, or 12 cards (fewer = larger cards)
- **Alert interval** — how often the board repeats the phrase in seconds (minimum 5s)

Settings take effect immediately on all paired board devices without requiring a refresh.

**Paired Devices**
The "Board Settings" section shows all devices currently paired to this profile's board. You can:
- Generate a new 6-digit pairing code to connect another device
- Revoke any device — the board on that device immediately redirects to the pairing screen

**Activity Log**
The profile page tracks all communication events over time with timestamps and acknowledgement records.`,
    },
  },
  {
    id: 'board-pairing',
    label: 'Board & Pairing',
    icon: '📲',
    content: {
      title: 'Setting Up the Child Board',
      body: `The communication board is the screen the person of determination uses. It can run in a web browser or via the VoiceBridge mobile app.

**Web Board**
On a tablet or spare phone browser:
1. Go to the VoiceBridge web app
2. Navigate to /pair (or click "Open as Child Board →" on the Children page)
3. Enter the 6-digit pairing code from the child's profile
4. The board opens immediately — the device is now paired

**Mobile App Board (Recommended)**
The VoiceBridge mobile app for iOS and Android is the recommended way to use the board on a dedicated device. It supports Urdu and Arabic TTS, background alerts, and locks to the board so the person cannot accidentally navigate away:
1. Download and open the VoiceBridge app
2. Tap "Enter Pairing Code" on the Pair screen
3. Enter the 6-digit code generated from the profile page on the web dashboard
4. The board loads and the device is registered as a paired session

**Generating a Pairing Code**
From the web dashboard:
1. Open the child's profile (Children → View Profile)
2. Scroll to "Board Settings" → "Paired Devices"
3. Tap "+ Pair" — a 6-digit code appears, valid for 5 minutes
4. Enter the code on the board device

**Multiple Paired Devices**
One child can be paired with multiple devices simultaneously. All boards receive the same cards and settings. When a card is tapped on any board, all caregiver devices are notified.

**Revoking a Device**
From the Paired Devices list on the child's profile, click "Revoke" next to any device. The board on that device immediately redirects to the pairing screen — no action is required on the device itself.

**Board Safety: No Back Button**
The child's board has no back button and blocks the device's back gesture. This prevents the child from accidentally leaving the board and navigating to other parts of the app or browser.`,
    },
  },
  {
    id: 'notifications',
    label: 'Alerts & Notifications',
    icon: '🔔',
    content: {
      title: 'Alerts & Notification Guide',
      body: `The alert system closes the communication loop — when a person taps a card, every caregiver is notified instantly.

**How It Works**
When a card is tapped on the board:
1. The board speaks the phrase aloud and continues repeating it at the configured interval
2. A real-time alert is sent to all connected caregiver devices simultaneously
3. The alert banner shows the person's name, the card phrase, and plays a chime + spoken alert
4. Any caregiver taps "Acknowledge" — this stops the alert on all caregiver devices AND stops the board speaking on all paired board devices instantly
5. The event is logged with a timestamp and acknowledgement record

**Acknowledgement Behaviour**
- **Acknowledge**: Stops the spoken alert and chime on all caregiver devices, and stops the board speaking on every paired board device. The event is marked as resolved.
- **Dismiss (×)**: Silences the alert on that device only. The board keeps speaking and other caregivers are still alerted.

**Multiple Caregiver Devices**
All caregivers receive alerts at the same time. When any one acknowledges, the alert is resolved for everyone — no other action is needed on any device.

**Per-Profile Alert Settings**
Each profile has individual alert settings on its profile page:
- **Push notifications toggle** — turn alerts on or off for a specific profile
- **Alert interval** — how often the board repeats the phrase (default 30 seconds)

**Setting Up Notifications on Your Device**
Push notifications require browser or system permission:
- **Chrome (desktop/Android)**: Allow notifications when prompted on first login
- **Safari on iPhone**: Add VoiceBridge to your Home Screen first (Share → Add to Home Screen), then open from Home Screen and allow notifications
- **Mobile app**: Grant notification permission when the app requests it on first launch

**Global Alert & Voice Settings**
From the Configurations page (Settings menu), you can configure:
- **Browser notification permission** — grant or check permission status
- **Alert sounds** — enable in-browser chime and spoken alerts
- **English Voice & Accent** — choose from voices available on your device
- **Speaking Style** — Natural, Child, Clear, or Expressive (adjusts pitch and rate)
- **Urdu & Arabic Voice** — automatically uses high-quality native-accent TTS if no native voice is installed
- **Organization logo** — therapy centers can upload their clinic logo`,
    },
  },
  {
    id: 'voice-settings',
    label: 'Voice & Speaking Styles',
    icon: '🎙️',
    content: {
      title: 'Voice & Speaking Style Settings',
      body: `VoiceBridge gives you full control over how the app sounds — on the board, on caregiver alerts, and on the mobile app.

**Accessing Voice Settings**
Go to Settings → Configurations → Voice & Accent section.

**English Voice**
Choose from any English voice installed on your device or browser. The list shows all available voices with their language tags. Tap "🔊 Test" to preview a voice before saving.

**Speaking Style Presets**
Choose a speaking style that matches the individual's needs:
- **🎵 Natural** — balanced, conversational tone (default)
- **🧒 Child** — slightly higher pitch, slower rate — familiar and gentle
- **📢 Clear** — slower, deliberate speech — ideal for new learners
- **✨ Expressive** — slightly faster, energetic — good for engaged communicators

The selected style applies to English speech on both the caregiver alert and the board.

**Urdu & Arabic Voice**
If your device has a native Urdu or Arabic voice installed, it will appear in the voice picker. If not, VoiceBridge automatically uses Google TTS for authentic native pronunciation — no setup needed.

A green "✓ Google TTS Active" badge confirms the automatic fallback is in use. You can expand the section to see instructions for installing a native voice on Android, iOS, or Windows if preferred.

**Fixing "Wrong Voice" on First Alert**
Browsers load available voices asynchronously. VoiceBridge waits for voices to fully load before speaking the first alert, so the selected accent is used consistently from the very first notification.

**Mobile App Voice**
On the mobile app, voice selection uses the device's system TTS. For Urdu and Arabic, the app fetches audio from the VoiceBridge server and plays it through the device speaker — giving consistent native pronunciation regardless of installed voices.`,
    },
  },
  {
    id: 'customizing-cards',
    label: 'Customizing Cards',
    icon: '🎨',
    content: {
      title: 'Customizing Communication Cards',
      body: `VoiceBridge is fully customizable so the board reflects the individual's actual vocabulary and communication needs.

**Default Card Library**
VoiceBridge includes pre-built cards organized into categories:
- **Basic Needs**: Water, Food, Toilet, Sleep, Help, More, All Done
- **Emotions**: Happy, Sad, Angry, Scared, Excited, Tired, Sick
- **Activities**: Play, Watch TV, Go Outside, Read, Music, School
- **Social**: Hello, Goodbye, Thank You, Please, Yes, No
- **Family**: Mom, Dad, Teacher, Friend, Doctor

**Creating Custom Cards**
To create a custom card:
1. Open the child's board editor → Add Card
2. Upload a photo from your gallery or take one with the camera
3. Enter the English label, plus a translated label in Urdu and/or Arabic
4. Enter the spoken phrase (used for text-to-speech on the board)
5. Save — the card appears immediately on the board

**Adjusting Grid Size**
The number of cards on the board is set in the child's profile under Board Settings. Options are 2, 4, 6, 9, or 12 cards:
- **2–4 cards**: Very large cards, ideal for younger children or those with motor difficulties
- **6–9 cards**: Balanced size for daily use
- **12 cards**: Compact grid for individuals with a larger active vocabulary

**Board Language**
The board language is set per child in their profile. Switching between English, Urdu, and Arabic changes both the card labels and the text-to-speech voice. Changes apply immediately to all paired board devices.`,
    },
  },
  {
    id: 'therapy-guide',
    label: 'Therapy Centers',
    icon: '🏥',
    content: {
      title: 'Therapy Center & Professional Guide',
      body: `VoiceBridge includes a dedicated professional dashboard for therapy centers, clinics, and individual therapists supporting people of determination.

**Setting Up a Therapy Center Account**
When signing up, select "Therapy Center" as your account type. You'll be asked to provide your center's name and contact details. After email verification, you'll have access to the professional dashboard with a super-admin view of all users and profiles.

**Organization Logo**
Therapy centers can upload their clinic logo from the Configurations page (Settings → Configurations → Organization Logo). The logo appears in place of your initials in the navigation and on reports.

**Managing Client Profiles**
Each client profile stores the full set of personal details — name, date of birth, photo, preferred language, address, and clinical notes. This makes it easy to maintain a complete record for each person of determination in your care.

**Board Settings per Client**
From each client's profile page, therapists can instantly adjust:
- Board language (English, Urdu, or Arabic)
- Number of cards displayed
- Alert repeat interval
- Push notification preferences

Changes take effect immediately on the client's board device without any action from the family.

**Paired Devices Management**
Therapists can view and manage all devices paired to a client's board from the client's profile. Revoking a device immediately disconnects it — useful when a client moves to a new device or ends a session.

**Communication History**
The dashboard shows a live activity feed of recent communication events across all clients. Individual client history is available from their profile, showing every card tapped with timestamps and acknowledgement records.

**Super Admin Dashboard**
Therapy center owners have access to an admin panel that shows all registered users, their roles, account status, and child counts. You can approve or reject new registrations from this panel.`,
    },
  },
  {
    id: 'faq',
    label: 'FAQ',
    icon: '❓',
    content: {
      title: 'Frequently Asked Questions',
      body: `**Is VoiceBridge only for children with autism?**
No. VoiceBridge is designed for all people of determination — anyone who is non-verbal or minimally verbal, regardless of the underlying condition. This includes individuals with cerebral palsy, Down syndrome, apraxia, stroke-related communication loss, and other conditions affecting speech.

**Is VoiceBridge free to use?**
Yes. Core VoiceBridge features are free for families. Optional premium features for therapy centers may be introduced in future, but communication functionality will always remain free for families.

**Do I need to install an app?**
The caregiver dashboard is web-based and requires no installation. For the child's communication board, we offer both a web option (open in browser and pair via code) and a dedicated mobile app (iOS & Android) for the best board experience.

**What devices work as a child board?**
Any phone or tablet running the VoiceBridge mobile app (iOS or Android), or any device with a modern browser (Chrome or Safari). Older Android tablets and iPads work well as dedicated board devices.

**Can one child be paired with multiple board devices?**
Yes. You can pair as many devices as you like to one child's board. All devices show the same cards and settings. When a card is tapped on any device, all caregivers are alerted.

**What happens when I revoke a paired device?**
The board on that device immediately redirects to the pairing screen. The child can no longer use that device until a new pairing code is entered.

**What if a caregiver acknowledges — does the board stop speaking?**
Yes. When any caregiver acknowledges an alert, the board stops speaking on all paired board devices, and the alert is cleared for all caregiver devices simultaneously.

**Can my child accidentally leave the board?**
No. The board has no back button and blocks the device's back gesture, so the child cannot navigate away from the board accidentally.

**What languages are supported?**
English, Urdu, and Arabic are fully supported, including text-to-speech in all three languages. More languages are on the roadmap.

**How is data stored?**
All data is stored securely on encrypted servers. Only you and people you explicitly invite can access your data. We never share data with third parties.

**What if I need help?**
Email us at info@mstechlabs.com and we'll respond within 24 hours. Onboarding calls are available for therapy centers.`,
    },
  },
]

export default function DocsPage() {
  const [active, setActive] = useState(sections[0].id)

  const activeSection = sections.find((s) => s.id === active)!

  // Simple markdown-like renderer
  const renderContent = (text: string) => {
    return text.split('\n\n').map((block, i) => {
      if (block.startsWith('**') && block.endsWith('**') && !block.includes('\n')) {
        return <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2">{block.replace(/\*\*/g, '')}</h3>
      }
      const lines = block.split('\n')
      const processed = lines.map((line, li) => {
        if (line.startsWith('- ')) {
          return <li key={li} className="ml-4 text-slate-700">{line.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}</li>
        }
        if (line.match(/^\d+\./)) {
          return <li key={li} className="ml-4 text-slate-700 list-decimal">{line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return <h4 key={li} className="font-bold text-slate-900 mt-4">{line.replace(/\*\*/g, '')}</h4>
        }
        if (line.trim() === '') return null
        return (
          <span key={li}>
            {line.split(/\*\*(.*?)\*\*/g).map((part, pi) =>
              pi % 2 === 1 ? <strong key={pi}>{part}</strong> : part
            )}
          </span>
        )
      }).filter(Boolean)

      if (lines.some((l) => l.startsWith('- '))) {
        return <ul key={i} className="list-disc space-y-1 my-3 text-slate-600">{processed}</ul>
      }
      if (lines.some((l) => l.match(/^\d+\./))) {
        return <ol key={i} className="list-decimal space-y-1 my-3 text-slate-600 ml-4">{processed}</ol>
      }
      return <p key={i} className="text-slate-600 leading-relaxed my-3">{processed}</p>
    })
  }

  return (
    <>
      <SEO
        title="Documentation"
        description="VoiceBridge documentation — getting started, parent guide, therapy center guide, notification setup, and FAQ."
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Documentation</h1>
            <p className="text-lg text-slate-300">Everything you need to get the most out of VoiceBridge.</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Documentation</h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActive(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${
                      active === section.id
                        ? 'bg-violet-50 text-violet-700 border border-violet-200'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{section.icon}</span>
                    {section.label}
                    {active === section.id && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-violet-50 rounded-xl border border-violet-100">
                <p className="text-xs font-semibold text-violet-700 mb-2">Need more help?</p>
                <p className="text-xs text-slate-600 mb-3">Our team is happy to assist. Email us anytime.</p>
                <a
                  href="mailto:info@mstechlabs.com"
                  className="text-xs font-medium text-violet-600 hover:underline flex items-center gap-1"
                >
                  info@mstechlabs.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3">
            <AnimatedSection variant="fadeIn" key={active}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  {activeSection.content.title}
                </h1>
                <div className="prose-like space-y-2">
                  {renderContent(activeSection.content.body)}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    Still have questions?{' '}
                    <a href="mailto:info@mstechlabs.com" className="text-violet-600 hover:underline">
                      Email us
                    </a>
                  </div>
                  <AppCTAButtons theme="onwhite" size="compact" showComingSoon={false} />
                </div>
              </div>
            </AnimatedSection>
          </main>
        </div>
      </div>
    </>
  )
}
