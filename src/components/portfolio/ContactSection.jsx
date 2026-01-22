import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      ),
      label: 'Discord',
      value: 'infinitegamer21',
      color: '#5865F2',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'infinite@raimc.fun',
      color: '#E63946',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#222] overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#E63946] to-[#F77F00] opacity-15 blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#FFC300] opacity-10 blur-[120px]"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Contact <span className="text-[#FFC300]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch for Minecraft server development projects
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `${contact.color}40` }}
              />

              {/* Card */}
              <div className="relative bg-[#2a2a2a] rounded-2xl p-8 border-2 border-white/5 group-hover:border-[#F77F00]/30 transition-all">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${contact.color}15`,
                    border: `2px solid ${contact.color}40`
                  }}
                >
                  <div style={{ color: contact.color }}>
                    <contact.icon />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {contact.label}
                </h3>
                <p className="text-[#F77F00] text-lg font-semibold">
                  {contact.value}
                </p>

                {/* Bottom Accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-75"
                  style={{ background: `linear-gradient(90deg, ${contact.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}