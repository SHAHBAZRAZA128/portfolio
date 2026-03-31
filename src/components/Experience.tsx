import { SectionHeader } from './SectionHeader';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    title: 'Senior Software Developer Engineer',
    company: 'Hive of Solutions',
    location: 'Lahore, Pakistan',
    period: 'March 2025 - Present',
    achievements: [
      'Architected a distributed integrations platform with 10+ NestJS microservices, each handling a dedicated third-party integration (Stripe, GoCardless, Plaid, Codat, Apideck, Gmail, Outlook, IMAP) with independent scaling and deployment.',
      'Built a centralized Identity & Access Management (IAM) service implementing RBAC, CASL-based authorization, MFA (OTP/TOTP), and Twilio SMS verification.',
      'Designed and provisioned AWS cloud infrastructure using Terraform IaC - managing EKS clusters, RDS PostgreSQL, ElastiCache Redis, S3, VPC, and KMS across dev/prod environments.',
      'Led development of a SaaS LLC management automation platform with NestJS backend, React frontend, and Material UI - integrating Stripe payments, Auth0 authentication, and Slack webhooks.',
      'Developed and deployed React Native + Expo mobile applications on Apple App Store and Google Play Store with cross-platform performance optimization.',
    ],
    technologies: ['NestJS', 'TypeScript', 'React', 'React Native', 'AWS', 'Terraform', 'Docker', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Software Developer Engineer',
    company: 'Fusion Tech',
    location: 'Lahore, Pakistan',
    period: 'March 2022 - March 2025',
    achievements: [
      'Developed and maintained backend services using NestJS and TypeScript with PostgreSQL and Redis for high-performance data operations.',
      'Integrated third-party payment gateways (Stripe, GoCardless) and RESTful API services for financial data processing.',
      'Collaborated with cross-functional teams in an Agile environment to deliver production-quality software solutions on schedule.',
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'GoCardless'],
  },
  {
    title: 'Software Developer',
    company: 'Titan Haze',
    location: 'Lahore, Pakistan',
    period: 'January 2021 - August 2023',
    achievements: [
      'Developed multilevel marketing software solutions for Singaporean enterprises handling complex binary tree structures and commission calculations across large datasets.',
      'Specialized in backend development using PHP with CodeIgniter framework, optimizing database queries for performance at scale.',
      'Provided technical mentorship and guidance to junior team members, fostering professional growth within the engineering team.',
    ],
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    location: 'Lahore, Pakistan',
    period: 'December 2019 - December 2020',
    achievements: [
      'Designed and developed business showcase websites, portfolio sites, and custom web applications for diverse clients.',
      'Created "Myco Foods" - a complete inventory management system using CodeIgniter with POS integration, barcode scanning, and multi-payment method support, marketed to local businesses.',
    ],
    technologies: ['CodeIgniter', 'PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Web Developer',
    company: 'Freelance / Various Clients',
    location: 'Lahore, Pakistan',
    period: 'January 2018 - November 2019',
    achievements: [
      'Developed custom WordPress themes, plugins, and Shopify stores with responsive, SEO-optimized designs.',
      'Built web applications using CodeIgniter framework with focus on performance and user experience.',
    ],
    technologies: ['WordPress', 'Shopify', 'CodeIgniter', 'PHP', 'JavaScript', 'CSS3'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Career Journey"
          title="Professional Experience"
          subtitle="7+ years of growth from web development to architecting enterprise microservices"
        />

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
