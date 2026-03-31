import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Mail, MapPin, Clock, MessageCircle, Send, Github, Linkedin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shahbazraza1281@gmail.com', href: 'mailto:shahbazraza1281@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 30543 95954', href: 'https://wa.me/923054395954' },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', href: null },
  { icon: Clock, label: 'Availability', value: 'Open to opportunities', href: null },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/SHAHBAZRAZA128', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shahbazprince', label: 'LinkedIn' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's build something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Wrapper = item.href ? 'a' : 'div';
                const wrapperProps = item.href
                  ? { href: item.href, target: '_blank' as const, rel: 'noopener noreferrer' }
                  : {};

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Wrapper
                      {...(wrapperProps as any)}
                      className={`flex items-center gap-4 bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 rounded-xl p-4 transition-all ${
                        item.href ? 'hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 cursor-pointer group' : ''
                      }`}
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500/15 to-purple-500/15 border border-cyan-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="text-cyan-400" size={20} />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Domains */}
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-xl p-6">
              <h4 className="text-cyan-400 mb-3 font-medium">Domain Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['FinTech', 'DeFi/Web3', 'SaaS', 'E-commerce', 'AI/ML', 'Enterprise'].map((domain) => (
                  <span key={domain} className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4 text-sm">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-gray-400 hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-600 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-600 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-600 resize-none transition-all"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
                  disabled={status === 'success'}
                >
                  {status === 'success' ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
