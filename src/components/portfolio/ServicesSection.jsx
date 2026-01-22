/**
 * ServicesSection Component
 * Displays what I do / services offered
 * Inspired by Notritik's services layout
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Paintbrush, Gamepad2, Puzzle, Cloud, Zap } from 'lucide-react';

const services = [
  {
    icon: Gamepad2,
    title: 'Minecraft Server Development',
    description: 'Custom Minecraft server development including plugins, configurations, performance optimization, and gameplay features. Specializing in high-quality, production-ready solutions.',
    color: '#E63946',
  },
  {
    icon: Puzzle,
    title: 'Plugin Development',
    description: 'Custom Minecraft plugins with advanced mechanics, optimized performance, and seamless integration. Built for reliability and scalability.',
    color: '#F77F00',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#1F1F1F] overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#E63946] via-[#F77F00] to-[#FFC300] rounded-full blur-[150px]"
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
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Services & <span className="text-[#E63946]">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions across web, game, and software development
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                style={{ background: `${service.color}30` }}
              />

              {/* Card */}
              <div className="relative h-full bg-[#2a2a2a] rounded-2xl p-8 border-2 border-white/5 group-hover:border-[#F77F00]/30 transition-all duration-300">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${service.color}15`,
                    border: `2px solid ${service.color}40`
                  }}
                >
                  <service.icon 
                    className="w-8 h-8" 
                    style={{ color: service.color }} 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFC300] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}