import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../../components/ui/AnimatedSection'
import AppCTAButtons from '../../components/ui/AppCTAButtons'
import { PhoneMockup, BrowserMockup } from '../../components/ui/DeviceMockup'
import BoardScreenshot from '../../components/screenshots/BoardScreenshot'
import AlertsScreenshot from '../../components/screenshots/AlertsScreenshot'
import ParentSetupScreenshot from '../../components/screenshots/ParentSetupScreenshot'
import ParentDashboardScreenshot from '../../components/screenshots/ParentDashboardScreenshot'
import TherapyCenterScreenshot from '../../components/screenshots/TherapyCenterScreenshot'
import CardConfigScreenshot from '../../components/screenshots/CardConfigScreenshot'

const tabIds = ['board', 'parent-setup', 'parent-dashboard', 'card-config', 'therapy', 'alerts'] as const

export default function Screenshots() {
  const { t } = useTranslation()
  const [active, setActive] = useState('board')

  const tabs = tabIds.map((id) => ({
    id,
    label: t(`homeScreenshots.tabs.${id}.label`),
    desc: t(`homeScreenshots.tabs.${id}.desc`),
  }))
  const activeTab = tabs.find(tab => tab.id === active)!

  return (
    <section id="screenshots" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('homeScreenshots.eyebrow')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            {t('homeScreenshots.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            {t('homeScreenshots.description')}
          </p>
        </AnimatedSection>

        {/* Tab switcher */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${active === tab.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active + '-desc'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-slate-500 text-sm mb-10"
          >
            {activeTab.desc}
          </motion.p>
        </AnimatePresence>

        {/* Screenshot display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center"
          >
            {active === 'board' && (
              <div className="w-72">
                <PhoneMockup><BoardScreenshot /></PhoneMockup>
              </div>
            )}
            {active === 'parent-setup' && (
              <div className="w-72">
                <PhoneMockup><ParentSetupScreenshot /></PhoneMockup>
              </div>
            )}
            {active === 'parent-dashboard' && (
              <BrowserMockup className="w-full max-w-3xl">
                <ParentDashboardScreenshot />
              </BrowserMockup>
            )}
            {active === 'card-config' && (
              <div className="w-72">
                <PhoneMockup><CardConfigScreenshot /></PhoneMockup>
              </div>
            )}
            {active === 'therapy' && (
              <BrowserMockup className="w-full max-w-3xl">
                <TherapyCenterScreenshot />
              </BrowserMockup>
            )}
            {active === 'alerts' && (
              <div className="w-72">
                <PhoneMockup><AlertsScreenshot /></PhoneMockup>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">{t('homeScreenshots.ctaText')}</p>
          <div className="flex justify-center">
            <AppCTAButtons theme="onwhite" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
