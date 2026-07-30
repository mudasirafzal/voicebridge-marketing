import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 'sarah-m',
    initials: 'SM',
    color: 'bg-violet-500',
    stars: 5,
  },
  {
    id: 'ahmed-k',
    initials: 'AK',
    color: 'bg-pink-500',
    stars: 5,
  },
  {
    id: 'fatima-r',
    initials: 'FR',
    color: 'bg-amber-500',
    stars: 5,
  },
]

export default function Testimonials() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">{t('homeTestimonials.eyebrow')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            {t('homeTestimonials.title')}
          </h2>
        </AnimatedSection>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.id} variant="fadeUp" delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed flex-1 mb-6 italic">"{t(`homeTestimonials.items.${item.id}.quote`)}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${item.color} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t(`homeTestimonials.items.${item.id}.name`)}</p>
                    <p className="text-xs text-slate-500">{t(`homeTestimonials.items.${item.id}.role`)}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{t(`homeTestimonials.items.${testimonials[current].id}.quote`)}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonials[current].color} text-white text-sm font-bold flex items-center justify-center`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t(`homeTestimonials.items.${testimonials[current].id}.name`)}</p>
                    <p className="text-xs text-slate-500">{t(`homeTestimonials.items.${testimonials[current].id}.role`)}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-violet-600 w-6' : 'bg-slate-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
