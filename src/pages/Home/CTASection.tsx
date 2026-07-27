import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../../components/ui/AnimatedSection'
import AppCTAButtons from '../../components/ui/AppCTAButtons'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-pink-500 to-amber-400" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      {/* Animated blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fadeUp">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            💬
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Give Your Loved One a Voice?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Join hundreds of families who are already using VoiceBridge to transform how their loved ones communicate. Set up takes less than 5 minutes.
          </p>
          <div className="flex justify-center">
            <AppCTAButtons theme="light" />
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 border border-white/40 text-white font-bold rounded-xl hover:bg-white/30 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
