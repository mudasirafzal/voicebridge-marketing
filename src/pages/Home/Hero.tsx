import { motion } from 'framer-motion'
import { Play, Shield, Smartphone, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PhoneMockup } from '../../components/ui/DeviceMockup'
import BoardScreenshot from '../../components/screenshots/BoardScreenshot'
import AppCTAButtons from '../../components/ui/AppCTAButtons'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const trustBadges = [
  { icon: Shield, label: 'Secure & Private' },
  { icon: Smartphone, label: 'Mobile + Web' },
  { icon: Globe, label: 'English & Urdu' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Now available in English & Urdu
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Giving Every Child{' '}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                a Voice
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg"
            >
              VoiceBridge helps non-verbal people of determination express their needs through visual cards — keeping parents and caregivers instantly informed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-10"
            >
              <AppCTAButtons theme="dark" />
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                Watch How It Works
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300"
                >
                  <Icon className="w-3.5 h-3.5 text-violet-400" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <PhoneMockup>
                <BoardScreenshot />
              </PhoneMockup>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-4 top-20 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 w-52"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-lg shrink-0">
                  🔔
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Musa tapped a card</p>
                  <p className="text-xs text-violet-600 font-medium">"I need water" 💧</p>
                </div>
              </motion.div>

              {/* Floating success badge */}
              <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-4 bottom-24 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Request acknowledged</p>
                  <p className="text-xs text-slate-500">Parent notified instantly</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
