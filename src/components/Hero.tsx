import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MessageCircle, Download, ArrowRight, Sparkles } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/SHAHBAZRAZA128', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shahbazprince', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shahbazraza1281@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/923054395954', label: 'WhatsApp' },
];

const stats = [
  { value: '7+', label: 'Years Exp.' },
  { value: '25+', label: 'Projects' },
  { value: '10+', label: 'Microservices' },
  { value: '4+', label: 'Blockchains' },
];

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Extra glow effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>Available for hire</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg"
            >
              Hi, I'm <span className="text-cyan-400 font-semibold">Shahbaz Raza</span>
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">Senior Full Stack</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mt-2">Developer</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              7+ years architecting <span className="text-gray-300">25+ production-grade applications</span> across
              FinTech, DeFi/Web3, SaaS & E-commerce.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="https://drive.google.com/file/d/1rFDeQemo9PVCD4zi5sy4vsJzS7HzmNRd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
            >
              <Download size={18} />
              Download Resume
            </motion.a>

            <motion.a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl transition-all"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-8 pt-8 border-t border-white/5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]"
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl opacity-60"></div>

            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20"
            ></motion.div>
            <div className="absolute inset-4 rounded-full border border-cyan-500/10"></div>

            {/* Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
              <img
                src="/profile.jpg"
                alt="Shahbaz Raza"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/30 to-transparent"></div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-1/4 px-3 py-1.5 bg-[#0a0a0f]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg text-xs text-cyan-400 shadow-lg"
            >
              React / Next.js
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-2 bottom-1/4 px-3 py-1.5 bg-[#0a0a0f]/80 backdrop-blur-md border border-purple-500/30 rounded-lg text-xs text-purple-400 shadow-lg"
            >
              Solidity / Web3
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-4 bottom-8 px-3 py-1.5 bg-[#0a0a0f]/80 backdrop-blur-md border border-green-500/30 rounded-lg text-xs text-green-400 shadow-lg"
            >
              NestJS / AWS
            </motion.div>

            {/* Floating accent dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-[2px]"></div>
              <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-purple-400 rounded-full blur-[2px]"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
