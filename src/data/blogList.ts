// src/data/blogList.ts

export interface BlogMeta {
  id: string;
  slug: string; // filename of the .md file
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export const blogList: BlogMeta[] = [
  {
    id: '1',
    slug: '1.md',
    title: 'Scaling Edge Deployments from 100 to 1,200+ – Lessons from the Trenches',
    subtitle: 'How we scaled Jetson-based products across 1,200+ edge deployments',
    excerpt:
      'Real stories and strategy from scaling AI infrastructure in the field, covering deployment challenges, observability, and cross-functional alignment.',
    image: 'https://images.pexels.com/photos/24224672/pexels-photo-24224672.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Edge AI',
    date: '2025-08-01',
    readTime: '6 min read',
    tags: ['Edge AI', 'TPM', 'Product Strategy'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '2',
    slug: '2.md',
    title: 'Feature Prioritization in Technical Products – Balancing OKRs, Tech Debt & Customer Feedback',
    subtitle: 'A real-world system to balance engineering, UX and business needs',
    excerpt:
      'How I used RICE, MoSCoW and Productboard to manage priorities across firmware, DevOps and user experience in AI product development.',
    image: 'https://images.pexels.com/photos/5842330/pexels-photo-5842330.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Product Management',
    date: '2025-08-02',
    readTime: '5 min read',
    tags: ['Prioritization', 'AI Products', 'TPM'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '3',
    slug: '3.md',
    title: 'Leading AI Product Teams without Being the Smartest Engineer in the Room',
    subtitle: 'How I led ML teams by facilitating clarity, not code',
    excerpt:
      'Lessons on leading machine learning teams as a TPM/APM — from alignment to feasibility to trust-building without being the deepest technical expert.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Leadership',
    date: '2025-08-03',
    readTime: '6 min read',
    tags: ['Leadership', 'AI Teams', 'TPM'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '4',
    slug: '4.md',
    title: 'The Future of MLOps: From Research to Real-Time Alerts',
    subtitle: 'Where MLOps is going — and how to keep up',
    excerpt:
      'From MLflow to Airflow to TensorRT – how tools and workflows evolve in the world of real-time inference, versioning, and deployment at scale.',
    image: 'https://images.pexels.com/photos/2381188/pexels-photo-2381188.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'MLOps',
    date: '2025-08-04',
    readTime: '7 min read',
    tags: ['MLOps', 'AI Infra', 'Model Deployment'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '5',
    slug: '5.md',
    title: 'Why Edge AI is Eating the Cloud – 5 Predictions from the Field',
    subtitle: 'Latency, privacy, and the shift to on-device intelligence',
    excerpt:
      'Drawing from Jetson/OTA experience — this post explores why Edge AI is beating the cloud in real-world scenarios, and where things are heading.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Edge AI',
    date: '2025-08-05',
    readTime: '5 min read',
    tags: ['Edge AI', 'Predictions', 'Cloud'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '6',
    slug: '6.md',
    title: 'From Engineer to TPM: How I Learned to Influence without Authority',
    subtitle: 'My journey from IC to strategic leader in product and AI',
    excerpt:
      'A personal story of transitioning from CV engineer to product owner to TPM — and how communication, trust, and alignment became my real tools.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Career',
    date: '2025-08-06',
    readTime: '5 min read',
    tags: ['Career', 'TPM', 'Leadership'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '7',
    slug: '7.md',
    title: 'Stakeholder Management for Technical PMs – From Chaos to Clarity',
    subtitle: 'Real tools and rituals to build cross-functional trust',
    excerpt:
      'Tips, rituals, and lessons from aligning firmware, DevOps, data science and business teams while scaling AI/edge products as a TPM.',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Leadership',
    date: '2025-08-07',
    readTime: '6 min read',
    tags: ['Stakeholders', 'TPM', 'Execution'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '8',
    slug: '8.md',
    title: 'How GenAI Will Reshape the Technical PM Role – Prompting is Just the Beginning',
    subtitle: 'The new toolkit for AI-native product leaders',
    excerpt:
      'Beyond prompting — how GenAI is transforming technical PM workflows, from customer discovery to engineering velocity.',
    image: 'https://images.pexels.com/photos/11035395/pexels-photo-11035395.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'GenAI',
    date: '2025-08-08',
    readTime: '5 min read',
    tags: ['GenAI', 'Future of Work', 'TPM'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '9',
    slug: '9.md',
    title: 'How We Built OTA & Observability for 1,200+ Jetson Devices – A SaaS Mindset for Edge Infra',
    subtitle: 'Making Edge AI reliable with cloud-native practices',
    excerpt:
      'A deep dive into how we built firmware OTA, telemetry, and observability for distributed edge AI — and how a SaaS mindset helped.',
    image: 'https://images.pexels.com/photos/19713622/pexels-photo-19713622.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Infra',
    date: '2025-08-09',
    readTime: '7 min read',
    tags: ['Edge Infra', 'SaaS', 'TPM'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '10',
    slug: '10.md',
    title: '10 Tools I Can’t Live Without as a TPM in AI & Cloud',
    subtitle: 'A tactical look at the tools behind the job',
    excerpt:
      'From Productboard to Grafana, here are the tools I rely on daily to prioritize, ship, align, and measure success in fast-moving AI environments.',
    image: 'https://images.pexels.com/photos/6476267/pexels-photo-6476267.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Tools',
    date: '2025-08-10',
    readTime: '4 min read',
    tags: ['Tools', 'TPM', 'Productivity'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
// ...previous blogList array
{
  id: '11',
  slug: '11.md',
  title: 'Choosing the Right Database for Your Product',
  subtitle: 'A decision-making guide for PMs and engineers',
  excerpt:
    'Relational or NoSQL? Postgres or DynamoDB? Here’s how I choose the right database for every product phase — with real trade-offs and mistakes made.',
  image: 'https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=1200',
  category: 'Product',
  date: '2025-08-11',
  readTime: '6 min read',
  tags: ['System Design', 'Databases', 'Product Decisions'],
  author: {
    name: 'Dhairya Sharma',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Product & Strategy Leader building scalable AI products',
  },
},
{
  id: '12',
  slug: '12.md',
  title: 'Designing Clean API Integrations',
  subtitle: 'Lessons from building and consuming APIs at scale',
  excerpt:
    'From naming conventions to auth flows, these are the principles I follow when designing APIs that scale, evolve, and don’t break clients.',
  image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200',
  category: 'Product',
  date: '2025-08-12',
  readTime: '5 min read',
  tags: ['API Design', 'Integration', 'Engineering Collaboration'],
  author: {
    name: 'Dhairya Sharma',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Product & Strategy Leader building scalable AI products',
  },
},
{
  id: '13',
  slug: '13.md',
  title: 'Cost-Effective System Design: Balancing Performance & Budget',
  subtitle: 'This is the system design playbook I wish I had earlier',
  excerpt:
    'This is the playbook I’ve used to design systems that scale without setting money on fire. Real-world trade-offs, metrics, and lessons for PMs and engineers.',
  image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
  category: 'Product',
  date: '2025-08-13',
  readTime: '6 min read',
  tags: ['System Design', 'Cost Optimization', 'Performance', 'Cloud Architecture'],
  author: {
    name: 'Dhairya Sharma',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Product & Strategy Leader building scalable AI products',
  },
},
];
