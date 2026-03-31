import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl tracking-tight font-bold">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
      </div>
    </motion.div>
  );
}
