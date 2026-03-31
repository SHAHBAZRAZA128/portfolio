import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { GraduationCap, BookOpen, Award, Users, Compass } from 'lucide-react';

const softSkills = [
  { icon: Award, label: 'Technical Leadership', color: 'border-cyan-500/20 hover:border-cyan-500/40' },
  { icon: Compass, label: 'System Architecture', color: 'border-purple-500/20 hover:border-purple-500/40' },
  { icon: Users, label: 'Cross-functional Collaboration', color: 'border-green-500/20 hover:border-green-500/40' },
  { icon: BookOpen, label: 'Agile Methodology', color: 'border-orange-500/20 hover:border-orange-500/40' },
  { icon: Users, label: 'Mentorship', color: 'border-blue-500/20 hover:border-blue-500/40' },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          label="Education & Skills"
          title="Academic Background"
          subtitle="Continuous learning and professional development"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/20 rounded-xl flex-shrink-0">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-1">Bachelor of Science in Computer Science</h3>
                  <p className="text-cyan-400 font-medium">Virtual University</p>
                  <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                Ongoing
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pursuing a comprehensive degree in Computer Science while actively building production-grade applications
                  and gaining hands-on experience in enterprise software development.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl text-white font-semibold mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent max-w-[60px]"></div>
              Soft Skills
            </h3>
            <div className="grid gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className={`flex items-center gap-4 bg-gradient-to-r from-white/[0.05] to-transparent backdrop-blur-sm border ${skill.color} rounded-xl px-5 py-4 transition-all group`}
                >
                  <skill.icon className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-300">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
