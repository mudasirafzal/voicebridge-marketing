import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { ChevronDown } from 'lucide-react'

const faqIds = [
  'whatIsVoiceBridge',
  'whoIsItFor',
  'availableOnMobile',
  'languagesSupported',
  'alertAcknowledgeSystem',
  'voiceAndSpeakingStyle',
  'customCards',
  'multipleCaregivers',
  'dataSecurity',
  'gettingStarted',
] as const

function FAQItem({ id, index }: { id: string; index: number }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimatedSection variant="fadeUp" delay={index * 0.04}>
      <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        >
          <span className="font-semibold text-slate-900 pr-4">{t(`homeFAQ.items.${id}.q`)}</span>
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
                {t(`homeFAQ.items.${id}.a`)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}

export default function FAQ() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('homeFAQ.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            {t('homeFAQ.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            {t('homeFAQ.subtitle')}
          </p>
        </AnimatedSection>
        <div className="space-y-3">
          {faqIds.map((id, i) => (
            <FAQItem key={id} id={id} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
