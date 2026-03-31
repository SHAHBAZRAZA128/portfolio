import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { MapPin, Briefcase, Code2, Calendar, GraduationCap, Globe } from 'lucide-react';

const highlights = [
  { icon: Calendar, label: 'Experience', value: '7+ Years', color: 'from-cyan-500/20 to-cyan-500/5' },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', color: 'from-purple-500/20 to-purple-500/5' },
  { icon: Code2, label: 'Main Stack', value: 'React / NestJS / Web3', color: 'from-green-500/20 to-green-500/5' },
  { icon: Briefcase, label: 'Current Role', value: 'Senior SDE', color: 'from-orange-500/20 to-orange-500/5' },
  { icon: GraduationCap, label: 'Education', value: 'BSCS (Ongoing)', color: 'from-blue-500/20 to-blue-500/5' },
  { icon: Globe, label: 'Languages', value: 'English, Urdu, Hindi', color: 'from-pink-500/20 to-pink-500/5' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          label="About Me"
          title="Building Scalable Solutions"
          subtitle="Results-driven Senior Full Stack Developer with expertise across FinTech, DeFi/Web3, SaaS, and E-commerce"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                Architected and delivered a distributed microservices platform comprising <span className="text-white font-medium">10+ independent
                NestJS services</span> handling payments, email, banking, and accounting integrations at scale.
                Built and deployed <span className="text-white font-medium">8+ React/Next.js frontend applications</span> and <span className="text-white font-medium">3+ React Native mobile apps</span> published on Apple App Store and Google Play Store.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                Developed and deployed <span className="text-white font-medium">Solidity smart contracts</span> with upgradeable proxy patterns, multi-chain
                DeFi vaults, and NFT-based ticketing systems on <span className="text-white font-medium">Ethereum, Arbitrum, Optimism, and Base</span> networks.
                Engineered AI-powered and ML-driven microservices including document extraction, risk scoring,
                and intelligent invoice-transaction matching systems.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-green-500/30 hover:border-green-500/60 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                Managed end-to-end cloud infrastructure using <span className="text-white font-medium">Terraform (IaC)</span> on AWS with EKS, RDS, ElastiCache,
                S3, VPC, and KMS modules across multi-environment deployments. Passionate about technical leadership,
                system architecture, and mentoring teams.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all group`}
              >
                <item.icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
