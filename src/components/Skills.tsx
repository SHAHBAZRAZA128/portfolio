import { SectionHeader } from './SectionHeader';
import { SkillBadge } from './SkillBadge';
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Smartphone,
  Layout,
  Server,
  Palette,
  Box,
  Wrench,
  Zap,
  Link,
  ShoppingCart,
  Blocks,
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', icon: Code2, level: 'Advanced' as const },
      { name: 'JavaScript', icon: Code2, level: 'Advanced' as const },
      { name: 'Python', icon: Code2, level: 'Advanced' as const },
      { name: 'PHP', icon: Code2, level: 'Advanced' as const },
      { name: 'Solidity', icon: Blocks, level: 'Advanced' as const },
      { name: 'SQL', icon: Database, level: 'Advanced' as const },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React 18/19', icon: Code2, level: 'Advanced' as const },
      { name: 'Next.js 15', icon: Layout, level: 'Advanced' as const },
      { name: 'Tailwind CSS', icon: Palette, level: 'Advanced' as const },
      { name: 'Radix UI', icon: Layout, level: 'Advanced' as const },
      { name: 'Material UI', icon: Palette, level: 'Advanced' as const },
      { name: 'Framer Motion', icon: Zap, level: 'Advanced' as const },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'NestJS', icon: Server, level: 'Advanced' as const },
      { name: 'Node.js', icon: Server, level: 'Advanced' as const },
      { name: 'FastAPI', icon: Server, level: 'Advanced' as const },
      { name: 'Laravel', icon: Server, level: 'Advanced' as const },
      { name: 'CodeIgniter', icon: Server, level: 'Advanced' as const },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'React Native', icon: Smartphone, level: 'Advanced' as const },
      { name: 'Expo', icon: Smartphone, level: 'Advanced' as const },
      { name: 'App Store Deploy', icon: Smartphone, level: 'Advanced' as const },
      { name: 'Play Store Deploy', icon: Smartphone, level: 'Advanced' as const },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: Database, level: 'Advanced' as const },
      { name: 'MySQL', icon: Database, level: 'Advanced' as const },
      { name: 'Redis', icon: Database, level: 'Advanced' as const },
      { name: 'Supabase', icon: Database, level: 'Intermediate' as const },
      { name: 'Prisma', icon: Database, level: 'Advanced' as const },
      { name: 'TypeORM', icon: Database, level: 'Advanced' as const },
    ],
  },
  {
    category: 'Blockchain/Web3',
    skills: [
      { name: 'Solidity', icon: Blocks, level: 'Advanced' as const },
      { name: 'Hardhat', icon: Wrench, level: 'Advanced' as const },
      { name: 'Ethers.js', icon: Blocks, level: 'Advanced' as const },
      { name: 'Wagmi', icon: Blocks, level: 'Advanced' as const },
      { name: 'OpenZeppelin', icon: Blocks, level: 'Advanced' as const },
      { name: 'Chainlink', icon: Link, level: 'Intermediate' as const },
      { name: 'RainbowKit', icon: Blocks, level: 'Advanced' as const },
      { name: 'Viem', icon: Blocks, level: 'Advanced' as const },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EKS, RDS, S3, SES, KMS)', icon: Cloud, level: 'Advanced' as const },
      { name: 'Terraform', icon: Cloud, level: 'Advanced' as const },
      { name: 'Docker', icon: Box, level: 'Advanced' as const },
      { name: 'Vercel', icon: Cloud, level: 'Advanced' as const },
      { name: 'DigitalOcean', icon: Cloud, level: 'Intermediate' as const },
      { name: 'GCP / Azure', icon: Cloud, level: 'Intermediate' as const },
    ],
  },
  {
    category: 'Integrations',
    skills: [
      { name: 'Stripe', icon: Link, level: 'Advanced' as const },
      { name: 'GoCardless', icon: Link, level: 'Advanced' as const },
      { name: 'Plaid', icon: Link, level: 'Advanced' as const },
      { name: 'Auth0', icon: Link, level: 'Advanced' as const },
      { name: 'Twilio', icon: Link, level: 'Advanced' as const },
      { name: 'OpenAI', icon: Zap, level: 'Advanced' as const },
      { name: 'Codat / Apideck', icon: Link, level: 'Advanced' as const },
      { name: 'Mailchimp', icon: Link, level: 'Intermediate' as const },
    ],
  },
  {
    category: 'CMS & E-commerce',
    skills: [
      { name: 'WordPress', icon: ShoppingCart, level: 'Advanced' as const },
      { name: 'Shopify', icon: ShoppingCart, level: 'Advanced' as const },
      { name: 'WooCommerce', icon: ShoppingCart, level: 'Advanced' as const },
      { name: 'Webflow', icon: Layout, level: 'Intermediate' as const },
      { name: 'HubSpot', icon: ShoppingCart, level: 'Intermediate' as const },
    ],
  },
  {
    category: 'Tools & Practices',
    skills: [
      { name: 'Git', icon: GitBranch, level: 'Advanced' as const },
      { name: 'Nx Monorepo', icon: Wrench, level: 'Advanced' as const },
      { name: 'Bull Queue', icon: Wrench, level: 'Advanced' as const },
      { name: 'Swagger', icon: Wrench, level: 'Advanced' as const },
      { name: 'Storybook', icon: Wrench, level: 'Intermediate' as const },
      { name: 'RBAC / MFA / CASL', icon: Wrench, level: 'Advanced' as const },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit built over 7+ years across full-stack, blockchain, cloud, and AI domains"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                <h3 className="text-lg text-cyan-400 whitespace-nowrap">{category.category}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    {...skill}
                    index={categoryIndex * 8 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
