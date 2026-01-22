import React from 'react';
import { motion } from 'framer-motion';
import { Github, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Discord', icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  ), href: '#', color: '#5865F2' },
  { name: 'GitHub', icon: Github, href: '#', color: '#f5f5f5' },
  { name: 'YouTube', icon: Youtube, href: '#', color: '#FF0000' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] border-t border-white/5">
      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-[#E63946] via-[#F77F00] to-[#FFC300]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-black tracking-tight inline-block mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#E63946]">INFINITE</span>
              <span className="text-[#FFC300]">21</span>
            </motion.a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Infinite21. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-[#F77F00]/30 transition-all"
                style={{ '--hover-color': social.color }}
                onMouseEnter={(e) => e.currentTarget.style.color = social.color}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            Crafted with <span className="text-[#E63946]">♥</span> and lots of <span className="text-[#FFC300]">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}