'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPageUrl } from '@/lib/utils';

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'About', page: 'About' },
  { name: 'Services', page: 'Services' },
  { name: 'Projects', page: 'Projects' },
  { name: 'Reviews', page: 'Reviews' },
  { name: 'Contact', page: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (page) => {
    if (page === 'Home') return pathname === '/' || pathname === '/Home';
    return pathname.includes(`/${page.toLowerCase()}`);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={createPageUrl('Home')}>
            <motion.div
              className="text-2xl md:text-3xl font-black tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#E63946]">INFINITE</span>
              <span className="text-[#FFC300]">21</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={createPageUrl(link.page)}>
                <motion.div
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${isActivePage(link.page)
                    ? 'text-[#FFC300]'
                    : 'text-gray-300 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {isActivePage(link.page) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F77F00]"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#2a2a2a] text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActivePage(link.page)
                      ? 'bg-gradient-to-r from-[#E63946]/20 to-[#F77F00]/20 text-[#FFC300] border-l-2 border-[#F77F00]'
                      : 'text-gray-300 hover:bg-white/5'
                      }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}