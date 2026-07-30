import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import AnimatedSection from '../components/ui/AnimatedSection'
import AppCTAButtons from '../components/ui/AppCTAButtons'
import { ChevronRight, ExternalLink } from 'lucide-react'

const sectionMeta = [
  { id: 'getting-started', icon: '🚀' },
  { id: 'child-profiles', icon: '👧' },
  { id: 'board-pairing', icon: '📲' },
  { id: 'notifications', icon: '🔔' },
  { id: 'voice-settings', icon: '🎙️' },
  { id: 'customizing-cards', icon: '🎨' },
  { id: 'therapy-guide', icon: '🏥' },
  { id: 'faq', icon: '❓' },
]

export default function DocsPage() {
  const { t } = useTranslation()
  const [active, setActive] = useState(sectionMeta[0].id)

  const sections = sectionMeta.map((s) => ({
    ...s,
    label: t(`docsPage.sections.${s.id}.label`),
    content: {
      title: t(`docsPage.sections.${s.id}.title`),
      body: t(`docsPage.sections.${s.id}.body`),
    },
  }))

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
        title={t('docsPage.seo.title')}
        description={t('docsPage.seo.description')}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">{t('docsPage.hero.title')}</h1>
            <p className="text-lg text-slate-300">{t('docsPage.hero.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t('docsPage.sidebar.heading')}</h2>
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
                <p className="text-xs font-semibold text-violet-700 mb-2">{t('docsPage.sidebar.helpTitle')}</p>
                <p className="text-xs text-slate-600 mb-3">{t('docsPage.sidebar.helpBody')}</p>
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
                    {t('docsPage.footer.stillHaveQuestions')}{' '}
                    <a href="mailto:info@mstechlabs.com" className="text-violet-600 hover:underline">
                      {t('docsPage.footer.emailUs')}
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
