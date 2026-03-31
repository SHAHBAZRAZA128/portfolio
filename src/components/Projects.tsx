import { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Integrations Platform',
    description: 'Enterprise microservices ecosystem with 10+ independently deployable services for Stripe, GoCardless, Plaid, Codat, Apideck, Gmail, Outlook, IMAP. Centralized IAM with RBAC, MFA, and CASL-based authorization.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Terraform', 'AWS'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'enterprise',
  },
  {
    title: 'ArtsDAO',
    description: 'Full-stack DAO platform for managing community artists, content, and payments with Web3 wallet connectivity and decentralized governance.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'React 19', 'TypeScript', 'PostgreSQL', 'Stripe', 'Wagmi', 'Tailwind CSS 4'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'web3',
  },
  {
    title: 'Gami',
    description: 'Multi-chain DeFi yield farming platform supporting Ethereum, Arbitrum, Optimism, Base with real-time analytics dashboard and yield optimization.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Next.js 15', 'NestJS 11', 'Prisma', 'Wagmi', 'Chart.js', 'Viem', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'web3',
  },
  {
    title: 'LootyFi',
    description: 'Gamified DeFi platform with token rewards, Nx monorepo architecture, upgradeable Solidity contracts, and Chrome Extension for seamless Web3 interactions.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Nx Monorepo', 'Next.js', 'NestJS', 'React Native', 'Hardhat', 'Solidity', 'OpenZeppelin'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'web3',
  },
  {
    title: 'MidnightClub',
    description: 'Digital asset trading marketplace with Web3 authentication, upgradeable smart contracts, and a seamless trading experience for digital collectibles.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'React', 'Vite', 'Hardhat', 'Solidity', 'Wagmi', 'RainbowKit'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'web3',
  },
  {
    title: 'Ticket021',
    description: 'Blockchain-based event ticketing platform with NFT ticket issuance, verification, and fraud-proof attendance tracking.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'React', 'Vite', 'Wagmi', 'Ethers.js', 'TypeScript'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'web3',
  },
  {
    title: 'PaySync',
    description: 'Payment processing platform with Stripe checkout integration, Auth0 authentication, invoice management, and automated billing workflows.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'React', 'Stripe', 'Auth0', 'Material UI', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'saas',
  },
  {
    title: 'Adly',
    description: 'AI-powered business platform with OpenAI integration, Stripe payments, Slack webhooks, multi-language support, and advanced analytics dashboards.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'React', 'OpenAI', 'Stripe', 'Auth0', 'Slack', 'ApexCharts', 'i18n'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'saas',
  },
  {
    title: 'Docstract',
    description: 'Intelligent invoice extraction and verification microservice using advanced document parsing algorithms for automated financial document processing.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Python', 'FastAPI', 'Docker', 'ML'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'ai',
  },
  {
    title: 'Risk & Scoring Engine',
    description: 'Risk assessment API with ML-based scoring models for financial risk evaluation, credit scoring, and automated decision-making pipelines.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Python', 'FastAPI', 'Machine Learning'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'ai',
  },
  {
    title: 'Matching Service',
    description: 'Automated invoice-to-transaction matching engine using fuzzy string matching algorithms for intelligent financial reconciliation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Python', 'Docker', 'Fuzzy Matching'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'ai',
  },
  {
    title: 'Xplorius',
    description: 'Marketing platform with Mailchimp integration, Google OAuth, Stripe payments, and rich data visualization for campaign management.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['NestJS', 'React', 'Vite', 'Radix UI', 'Recharts', 'Mailchimp', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'saas',
  },
  {
    title: 'LRC',
    description: 'Travel and logistics management platform with Google Maps integration, Twilio SMS, AWS SES email, Bull queues for async processing.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React 19', 'Vite', 'Google Maps', 'NestJS', 'AWS S3/SES', 'Twilio', 'Apideck'],
    liveUrl: '#',
    sourceUrl: '#',
    category: 'saas',
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web3', label: 'Blockchain/Web3' },
  { key: 'saas', label: 'SaaS' },
  { key: 'ai', label: 'AI/ML' },
  { key: 'enterprise', label: 'Enterprise' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="25+ production-grade applications across FinTech, DeFi/Web3, SaaS, and E-commerce"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/[0.04] border border-white/10 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-white/[0.07]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
