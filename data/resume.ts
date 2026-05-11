export interface Role {
  title: string
  period: string
  location: string
  impact: string
}

export interface Company {
  name: string
  span: string
  roles: Role[]
}

export const experience: Company[] = [
  {
    name: 'Palo Alto Networks',
    span: 'May 2023 — Present',
    roles: [
      {
        title: 'Distinguished Engineer',
        period: 'Nov 2025 — Present',
        location: 'New York, United States',
        impact:
          'Leading architecture for a next-generation AI-driven threat intelligence and incident response platform. Mentoring a distributed team of 10+ engineers.',
      },
      {
        title: 'Senior Principal Software Engineer',
        period: 'May 2023 — Oct 2025',
        location: 'New York, United States',
        impact:
          'Founded and led the company’s first threat intelligence and incident response platform, growing a two-person effort into a 10+ person organization delivering enterprise-wide capabilities.',
      },
    ],
  },
  {
    name: 'GoDaddy',
    span: 'Sep 2017 — Apr 2023',
    roles: [
      {
        title: 'Principal Software Engineer',
        period: 'Feb 2021 — Apr 2023',
        location: 'New York, United States',
        impact:
          'Set technical direction for the CTO engineering organization. Built a scalable object ledger and CDN management system, cutting average response time from 250 ms to 37 ms and lifting uptime above 99.99%.',
      },
      {
        title: 'Lead Software Engineer',
        period: 'Sep 2017 — Jan 2021',
        location: 'California, United States',
        impact:
          'Led UX Platform cloud migration. Designed Kubernetes infrastructure on AWS, built a Kubernetes operator for secret synchronization, and authored CI/CD pipelines for a microservice fleet.',
      },
    ],
  },
  {
    name: 'Tribe App',
    span: 'Oct 2016 — Aug 2017',
    roles: [
      {
        title: 'Head of Engineering',
        period: 'Oct 2016 — Aug 2017',
        location: 'Paris, France',
        impact:
          'Led engineering for a Sequoia/KPCB-backed group video chat platform. Designed a Node.js/Go microservice architecture handling millions of requests per day.',
      },
    ],
  },
  {
    name: 'Impero',
    span: 'Jan 2014 — Sep 2016',
    roles: [
      {
        title: 'Chief Software Engineer',
        period: 'Jan 2014 — Sep 2016',
        location: 'London, United Kingdom',
        impact:
          'Architected web applications and a Docker/ECS-based PaaS for client projects. Shifted engineering culture toward open source and contributed npm modules to the Node.js ecosystem.',
      },
    ],
  },
]

export interface Degree {
  school: string
  degree: string
  field: string
}

export const education: Degree[] = [
  {
    school: 'Politecnico di Milano',
    degree: 'M.Sc.',
    field: 'Telecommunications Engineering',
  },
  {
    school: 'Università degli Studi di Milano',
    degree: 'B.Sc.',
    field: 'Mathematics and Computer Science',
  },
]
