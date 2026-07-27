import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import AppCTAButtons from '../ui/AppCTAButtons'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it Works' },
  // { to: '/use-cases', label: 'Use Cases' },
  { to: '/docs', label: 'Docs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-slate-200'
          : 'bg-white/95 backdrop-blur-lg border-b border-slate-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/40 transition-shadow">
                <MessageCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              VoiceBridge
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? 'text-violet-600 bg-violet-50'
                      : 'text-slate-800 hover:text-violet-600 hover:bg-violet-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <AppCTAButtons theme="onwhite" size="compact" showComingSoon={false} />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-violet-600 hover:bg-violet-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-b border-slate-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? 'text-violet-600 bg-violet-50'
                        : 'text-slate-800 hover:text-violet-600 hover:bg-violet-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2" onClick={() => setIsOpen(false)}>
                <AppCTAButtons theme="onwhite" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
