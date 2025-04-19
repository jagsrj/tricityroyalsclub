import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Teams', path: '/teams' },
  { name: 'Tournaments', path: '/tournaments' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [location] = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/trc_logo.png"
            alt="TRC Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-blue-800 hidden sm:inline">Tricity Royals</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-medium transition ${
                location === item.path
                  ? 'text-blue-900 underline underline-offset-4'
                  : 'text-blue-700 hover:text-blue-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-2xl text-blue-700"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-2 pb-4 bg-white/90 border-t border-blue-100 shadow-inner"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  location === item.path
                    ? 'text-blue-900 underline underline-offset-4'
                    : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
