/**
 * PluginsSection Component
 * Displays Minecraft plugins and work
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Package, Sparkles } from 'lucide-react';

const plugins = [
  {
    name: 'Infi KOTH',
    description: 'Featured high-performance Minecraft KOTH plugin with advanced mechanics',
    icon: Sword,
    color: '#E63946',
    featured: true,
  },
  {
    name: 'Nice Plugin',
    description: 'Quality Minecraft server enhancement',
    icon: Package,
    color: '#F77F00',
  },
  {
    name: 'Custom Plugins',
    description: 'Tailored solutions for unique server needs',
    icon: Sparkles,
    color: '#FFC300',
  },
];

export default function PluginsSection() {
  return (
    <section id="plugins" className="relative py-24 md:py-32 bg-[#1F1F1F] overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#E63946] opacity-10 blur-[150px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] text-sm font-semibold uppercase tracking-wider mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Plugins & <span className="text-[#F77F00]">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Custom Minecraft plugins built for performance and reliability
          </p>
        </motion.div>

        {/* Plugins Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plugins.map((plugin, index) => (
            <motion.div
              key={plugin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `${plugin.color}40` }}
              />

              {/* Card */}
              <div className={`relative h-full bg-[#2a2a2a] rounded-2xl p-8 border-2 ${
                plugin.featured ? 'border-[#E63946]/30' : 'border-white/5'
              } group-hover:border-[#F77F00]/30 transition-all`}>
                {plugin.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] text-white text-xs font-bold uppercase">
                    Featured
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${plugin.color}15`,
                    border: `2px solid ${plugin.color}40`
                  }}
                >
                  <plugin.icon 
                    className="w-8 h-8" 
                    style={{ color: plugin.color }} 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC300] transition-colors">
                  {plugin.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {plugin.description}
                </p>

                {/* Bottom Accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-75"
                  style={{ background: `linear-gradient(90deg, ${plugin.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}