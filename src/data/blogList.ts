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
    title: 'Scaling Edge Deployments: 100 to 1,200+',
    subtitle: 'How we scaled SBC-based products across 1,200+ edge deployments',
    excerpt:
      'Real stories and strategy from scaling AI infrastructure in the field, covering deployment challenges, observability, and cross-functional alignment.',
    image: '/assets/blogs/1.png',
    category: 'Edge AI',
    date: '2024-12-01',
    readTime: '6 min read',
    tags: ['Edge AI', 'TPM', 'Product Strategy'],
    author: {
      name: 'Dhairya Sharma',
      avatar: '',
      bio: 'Product & Strategy Leader building scalable AI products',
    },
  },
  {
    id: '2',
    slug: '2.md',
    title: 'Feature Prioritization in Technical Products',
    subtitle: 'Balancing OKRs, Tech Debt & Customer Feedback. A real-world system to balance engineering, UX and business needs',
    excerpt:
      'How I used RICE, MoSCoW and Productboard to manage priorities across firmware, DevOps and user experience in AI product development.',
    image: '/assets/blogs/2.png',
    category: 'Product Management',
    date: '2025-02-02',
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
    title: 'Leading AI Teams Without Being the Smartest Engineer',
    subtitle: 'How I led ML teams by facilitating clarity, not code',
    excerpt:
      'Lessons on leading machine learning teams as a TPM/APM from alignment to feasibility to trust-building without being the deepest technical expert.',
    image: '/assets/blogs/3.png',
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
    subtitle: 'Where MLOps is going and how to keep up',
    excerpt:
      'From MLflow to Airflow to TensorRT – how tools and workflows evolve in the world of real-time inference, versioning, and deployment at scale.',
    image: '/assets/blogs/4.png',
    category: 'MLOps',
    date: '2025-04-10',
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
      'Drawing from edge/OTA experience, this post explores why Edge AI is beating the cloud in real-world scenarios, and where things are heading.',
    image: '/assets/blogs/5.png',
    category: 'Edge AI',
    date: '2024-12-29',
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
    title: 'From Engineer to TPM: Influencing Without Authority',
    subtitle: 'My journey from IC to strategic leader in product and AI',
    excerpt:
      'A personal story of transitioning from CV engineer to product owner to TPM and how communication, trust, and alignment became my real tools.',
    image: '/assets/blogs/6.png',
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
    title: 'Stakeholder Management for TPMs – From Chaos to Clarity',
    subtitle: 'Real tools and rituals to build cross-functional trust',
    excerpt:
      'Tips, rituals, and lessons from aligning firmware, DevOps, data science and business teams while scaling AI/edge products as a TPM.',
    image: '/assets/blogs/7.png',
    category: 'Leadership',
    date: '2025-07-17',
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
    title: 'How GenAI Will Reshape the TPM Role',
    subtitle: 'The new toolkit for AI-native product leaders',
    excerpt:
      'Beyond prompting, how GenAI is transforming technical PM workflows, from customer discovery to engineering velocity.',
    image: '/assets/blogs/8.png',
    category: 'GenAI',
    date: '2025-08-11',
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
    title: 'A SaaS Mindset for Scaling Edge Infrastructure',
    subtitle: 'Making Edge AI reliable with cloud-native practices',
    excerpt:
      'A deep dive into how we built firmware OTA, telemetry, and observability for distributed edge AI and how a SaaS mindset helped.',
    image: '/assets/blogs/9.png',
    category: 'Infra',
    date: '2025-06-09',
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
  title: 'Choosing the Right Database for Your Product',
  subtitle: 'A decision-making guide for PMs and engineers',
  excerpt:
    'Relational or NoSQL? Postgres or DynamoDB? Here’s how I choose the right database for every product phase, with real trade-offs and mistakes made.',
  image: '/assets/blogs/11.png',
  category: 'Product',
  date: '2025-03-11',
  readTime: '6 min read',
  tags: ['System Design', 'Databases', 'Product Decisions'],
  author: {
    name: 'Dhairya Sharma',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Product & Strategy Leader building scalable AI products',
  },
},
{
  id: '11',
  slug:'11.md',
  title: 'Designing Clean API Integrations',
  subtitle: 'Lessons from building and consuming APIs at scale',
  excerpt:
    'From naming conventions to auth flows, these are the principles I follow when designing APIs that scale, evolve, and don’t break clients.',
  image: '/assets/blogs/12.png',
  category: 'Product',
  date: '2024-05-12',
  readTime: '5 min read',
  tags: ['API Design', 'Integration', 'Engineering Collaboration'],
  author: {
    name: 'Dhairya Sharma',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Product & Strategy Leader building scalable AI products',
  },
},
{
  id: '12',
  slug: '12.md',
  title: 'Cost-Effective System Design: Balancing Performance & Budget',
  subtitle: 'This is the system design playbook I wish I had earlier',
  excerpt:
    'This is the playbook I’ve used to design systems that scale without setting money on fire. Real-world trade-offs, metrics, and lessons for PMs and engineers.',
  image: '/assets/blogs/13.png',
  category: 'Product',
  date: '2025-04-13',
  readTime: '6 min read',
  tags: ['System Design', 'Cost Optimization', 'Performance', 'Cloud Architecture'],
  author: {
    name: 'Dhairya Sharma',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Product & Strategy Leader building scalable AI products',
  },
},
];
