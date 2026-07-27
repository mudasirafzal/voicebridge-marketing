import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent of 8-year-old person of determination',
    initials: 'SM',
    color: 'bg-violet-500',
    quote: 'VoiceBridge transformed how our son communicates. He can finally tell us when he\'s hungry or needs help — things he couldn\'t express before. The notification system means we never miss what he\'s trying to say.',
    stars: 5,
  },
  {
    name: 'Dr. Ahmed K.',
    role: 'Speech-Language Pathologist',
    initials: 'AK',
    color: 'bg-pink-500',
    quote: 'An invaluable tool for our therapy sessions. The progress tracking has been remarkable — I can see exactly which cards my patients use most, helping me tailor sessions to build on their natural communication patterns.',
    stars: 5,
  },
  {
    name: 'Fatima R.',
    role: 'Therapy Center Director',
    initials: 'FR',
    color: 'bg-amber-500',
    quote: 'We\'ve onboarded 20 families and the feedback has been overwhelmingly positive. The bilingual support is a game-changer for our Urdu-speaking families who previously had limited options.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
            Trusted by Families & Professionals
          </h2>
        </AnimatedSection>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} variant="fadeUp" delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
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
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{testimonials[current].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonials[current].color} text-white text-sm font-bold flex items-center justify-center`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{testimonials[current].name}</p>
                    <p className="text-xs text-slate-500">{testimonials[current].role}</p>
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
