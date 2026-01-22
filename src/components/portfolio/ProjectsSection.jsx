'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Gamepad2, Code, Cpu, Sparkles } from 'lucide-react';

const categories = ['All'];

const projects = [
  {
    title: 'Infi KOTH',
    subtitle: 'Featured Project',
    description: 'High-performance Minecraft KOTH plugin. Optimized, configurable, and production-ready.',
    tags: ['Java', 'Spigot', 'Performance'],
    category: 'Minecraft Plugins',
    icon: Code,
    color: '#E63946',
    link: 'https://modrinth.com/plugin/infikoth',
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{ x: [-30, 30, -30], y: [30, -30, 30] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#F77F00] opacity-10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] text-sm font-semibold uppercase tracking-wider mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Projects & <span className="text-[#FFC300]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready Minecraft development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `${project.color}40` }}
                />

                {/* Card */}
                <div className="relative h-full bg-[#222] rounded-2xl overflow-hidden border-2 border-[#E63946]/30 group-hover:border-[#F77F00]/50 transition-all">
                  {/* Header */}
                  <div className="p-8 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}15`, border: `2px solid ${project.color}50` }}
                      >
                        <project.icon className="w-8 h-8" style={{ color: project.color }} />
                      </div>
                    </div>

                    <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: project.color }}>
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#FFC300] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="px-8 pb-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full bg-[#2a2a2a] text-sm font-semibold text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-[#E63946] to-[#F77F00] text-white font-bold text-lg transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View on Modrinth
                      </motion.a>
                    )}
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-100"
                    style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}