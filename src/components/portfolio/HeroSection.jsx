import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';

export default function HeroSection() {


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#E63946] to-[#F77F00] opacity-30 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#F77F00] to-[#FFC300] opacity-25 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#FFC300] to-[#E63946] opacity-20 blur-[80px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8"
        >
          <span className="text-[#f5f5f5]">INFINITE</span>
          <span className="bg-gradient-to-r from-[#E63946] via-[#F77F00] to-[#FFC300] bg-clip-text text-transparent">21</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Crafting <span className="text-[#FFC300]">Cutting-Edge</span> Digital Experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href={createPageUrl('Projects')}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(230, 57, 70, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] text-white font-bold text-lg shadow-lg shadow-[#E63946]/30 transition-all"
            >
              <Eye className="w-5 h-5 group-hover:animate-pulse" />
              Explore Work
            </motion.button>
          </Link>

          <Link href={createPageUrl('Contact')}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#FFC300]/50 text-[#FFC300] font-bold text-lg hover:border-[#FFC300] transition-all"
            >
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#F77F00]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}