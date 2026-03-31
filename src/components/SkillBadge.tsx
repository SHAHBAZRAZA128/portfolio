import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  index: number;
}

export function SkillBadge({ name, icon: Icon, level, index }: SkillBadgeProps) {
  const levelConfig = {
    Beginner: { color: 'text-yellow-400', bg: 'bg-yellow-400', dots: 1 },
    Intermediate: { color: 'text-cyan-400', bg: 'bg-cyan-400', dots: 2 },
    Advanced: { color: 'text-green-400', bg: 'bg-green-400', dots: 3 },
  };

  const config = level ? levelConfig[level] : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="flex items-center gap-3 bg-gradient-to-r from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group"
    >
      <Icon size={18} className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm truncate">{name}</div>
      </div>
      {config && (
        <div className="flex gap-1 flex-shrink-0">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${
                dot <= config.dots ? config.bg : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
