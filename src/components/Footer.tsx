import { Github, Linkedin, Mail, Heart, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/SHAHBAZRAZA128', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shahbazprince', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shahbazraza1281@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/923054395954', label: 'WhatsApp' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p className="font-medium">&copy; {currentYear} <span className="text-white">Shahbaz Raza</span>. All rights reserved.</p>
            <p className="text-sm mt-1 flex items-center justify-center md:justify-start gap-1.5 text-gray-500">
              Built with <Heart size={14} className="text-cyan-400 fill-cyan-400" /> using React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
