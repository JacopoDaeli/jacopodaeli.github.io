export interface Role {
  company: string
  title: string
  period: string
  location: string
  impact: string
}

export const experience: Role[] = [
  {
    company: 'Palo Alto Networks',
    title: 'Distinguished Engineer',
    period: 'Nov 2025 — Present',
    location: 'New York, NY',
    impact:
      'Leading architecture for a next-generation AI-driven threat intelligence and incident response platform. Mentoring a distributed team of 10+ engineers.',
  },
  {
    company: 'Palo Alto Networks',
    title: 'Senior Principal Software Engineer',
    period: 'May 2023 — Oct 2025',
    location: 'New York, NY',
    impact:
      'Founded and led the company’s first threat intelligence and incident response platform, growing a two-person effort into a 10+ person organization delivering enterprise-wide capabilities.',
  },
  {
    company: 'GoDaddy',
    title: 'Principal Software Engineer',
    period: 'Feb 2021 — Apr 2023',
    location: 'New York, NY',
    impact:
      'Set technical direction for the CTO engineering organization. Built a scalable object ledger and CDN management system, cutting average response time from 250 ms to 37 ms and lifting uptime above 99.99%.',
  },
  {
    company: 'GoDaddy',
    title: 'Lead Software Engineer',
    period: 'Sep 2017 — Jan 2021',
    location: 'San Francisco, CA',
    impact:
      'Led UX Platform cloud migration. Designed Kubernetes infrastructure on AWS, built a Kubernetes operator for secret synchronization, and authored CI/CD pipelines for a microservice fleet.',
  },
  {
    company: 'Tribe App',
    title: 'Head of Engineering',
    period: 'Oct 2016 — Aug 2017',
    location: 'Paris, France',
    impact:
      'Led engineering for a Sequoia/KPCB-backed group video chat platform. Designed a Node.js/Go microservice architecture handling millions of requests per day.',
  },
  {
    company: 'Impero',
    title: 'Chief Software Engineer',
    period: 'Jan 2014 — Sep 2016',
    location: 'London, UK',
    impact:
      'Architected web applications and a Docker/ECS-based PaaS for client projects. Shifted engineering culture toward open source and contributed npm modules to the Node.js ecosystem.',
  },
]

export const interests = [
  'Machine Learning / AI',
  'Distributed Systems',
  'Cybersecurity',
] as const
