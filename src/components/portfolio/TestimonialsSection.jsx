/**
 * TestimonialsSection Component  
 * Displays client testimonials with ratings
 * Clean card design with accent highlights
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'EzZ_CooKed',
    role: 'Server Owner',
    rating: 4.3,
    text: 'Nice plugin, smooth performance, and very reliable. Infi KOTH works perfectly.',
    color: '#E63946',
  },
  {
    name: 'Zyxx3n',
    role: 'Minecraft Developer',
    rating: 4.8,
    text: 'High-quality plugins and fast support. Very satisfied with the work.',
    color: '#F77F00',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#1F1F1F] overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#FFC300] opacity-10 blur-[150px]"
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
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Client <span className="text-[#E63946]">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from Minecraft server owners and developers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                style={{ background: `${testimonial.color}20` }}
              />

              {/* Card */}
              <div className="relative h-full bg-[#2a2a2a] rounded-2xl p-8 border-2 border-white/5 group-hover:border-[#F77F00]/30 transition-all duration-300">
                {/* Quote Icon */}
                <div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: testimonial.color }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'fill-current text-[#FFC300]' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[#FFC300] font-bold text-lg">
                    {testimonial.rating} / 5
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm mt-1" style={{ color: testimonial.color }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-75"
                  style={{ background: `linear-gradient(90deg, ${testimonial.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}