import { SystemProduct } from "../types/systemProduct"


export const systemProductList: SystemProduct[] = [
  // ---------- SYSTEM DESIGN PROJECTS ----------
  {
    id: '1',
    category: 'system-design',
    title: 'AI Platform Architecture',
    subtitle: 'Scaling ML Infrastructure for 100+ Global Sites',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    duration: '6 months',
    team: '15 engineers',
    impact: '90% faster processing',
    tags: ['Microservices', 'Kubernetes', 'ML Pipeline', 'Real-time Processing'],
    overview: 'This case study explores the design and implementation of a distributed AI platform...',
    challenge: 'The existing monolithic system was struggling...',
    solution: 'I architected a cloud-native, microservices-based platform...',
    implementation: [
      { phase: 'Discovery & Planning', duration: '4 weeks', description: 'Conducted interviews...' },
      { phase: 'Infrastructure Setup', duration: '8 weeks', description: 'Set up clusters...' },
      { phase: 'Core Platform Development', duration: '12 weeks', description: 'Built microservices...' },
      { phase: 'Migration & Testing', duration: '8 weeks', description: 'Gradually migrated sites...' }
    ],
    results: [
      { metric: 'Processing Speed', improvement: '90% faster', description: 'Reduced time from 45 min to 4 min' },
      { metric: 'System Uptime', improvement: '99.9%', description: 'Achieved enterprise-grade reliability' },
      { metric: 'Scalability', improvement: '10x capacity', description: '10x more jobs' },
      { metric: 'Cost Efficiency', improvement: '40% reduction', description: 'Lowered infra costs' }
    ],
    technologies: ['Kubernetes', 'Kafka', 'TensorFlow Serving', 'Docker', 'AWS'],
    lessons: [
      'Start with bottleneck assessment',
      'Gradual migrations reduce risk',
      'Monitoring from day one',
      'Design for failure'
    ]
  },
  {
    id: '2',
    category: 'system-design',
    title: 'Real-Time Fleet Tracking System',
    subtitle: 'Low-latency GPS + Telematics Pipeline',
    image: 'https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg',
    duration: '4 months',
    team: '10 engineers',
    impact: '95% tracking accuracy in real time',
    tags: ['IoT', 'Kafka', 'Time-Series DB', 'Edge Computing'],
    overview: 'Designed a real-time GPS + sensor tracking system across 3,000 vehicles...',
    challenge: 'Legacy system lacked real-time visibility and had frequent data delays...',
    solution: 'Developed an edge processing pipeline with MQTT, Kafka, and InfluxDB...',
    implementation: [
      { phase: 'Requirement Gathering', duration: '2 weeks', description: 'Mapped fleet routes and data types' },
      { phase: 'Prototype & POC', duration: '4 weeks', description: 'Built a scalable tracking proof of concept' },
      { phase: 'Edge Node Deployment', duration: '6 weeks', description: 'Configured IoT gateways for 3,000 vehicles' },
      { phase: 'Platform Go-Live', duration: '4 weeks', description: 'Live deployment with anomaly detection alerts' }
    ],
    results: [
      { metric: 'Latency', improvement: 'Sub-second', description: 'Live updates across web & mobile apps' },
      { metric: 'Device Uptime', improvement: '98%', description: 'Remote diagnostics and self-healing nodes' },
    ],
    technologies: ['MQTT', 'Kafka', 'InfluxDB', 'Node-RED', 'Grafana'],
    lessons: [
      'Real-time telemetry needs lean protocols',
      'Use edge compute to reduce cloud costs',
      'Automated alerting prevents failures'
    ]
  },
  {
    id: '3',
    category: 'system-design',
    title: 'Scalable Video Processing Pipeline',
    subtitle: 'Handling 5M+ surveillance frames per day',
    image: 'https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg',
    duration: '5 months',
    team: '12 engineers',
    impact: '80% faster alerting',
    tags: ['Video Streaming', 'FFmpeg', 'YOLO', 'Redis Queue'],
    overview: 'Built a distributed video processing pipeline for a smart city surveillance project...',
    challenge: 'Legacy system used on-prem batch processing and missed real-time alerts...',
    solution: 'Migrated to containerized microservices using Redis queues and GPU-based inference...',
    implementation: [
      { phase: 'Initial Setup', duration: '2 weeks', description: 'Dockerized legacy modules' },
      { phase: 'Model Integration', duration: '6 weeks', description: 'Integrated YOLOv5 with alerting logic' },
      { phase: 'Pipeline Optimization', duration: '4 weeks', description: 'Reduced decode/encode lag via FFmpeg tuning' },
      { phase: 'City-wide Rollout', duration: '8 weeks', description: 'Onboarded 10 zones with alert validation workflows' }
    ],
    results: [
      { metric: 'Frame Processing Speed', improvement: '5x boost', description: 'GPU + async pipeline' },
      { metric: 'Incident Detection', improvement: '85% recall', description: 'Reduced false negatives' }
    ],
    technologies: ['FFmpeg', 'YOLOv5', 'Redis', 'Docker', 'Jetson'],
    lessons: [
      'Video pipelines must be async and decoupled',
      'Use GPU inference at edge',
      'Alert validation must be fast and human-friendly'
    ]
  },

  // ---------- PRODUCT DESIGN PROJECTS ----------
  {
    id: '4',
    category: 'product-design',
    title: 'Smart Home Automation Dashboard',
    subtitle: 'Unified UX for IoT Devices',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    duration: '3 months',
    team: '6 engineers + 2 designers',
    impact: 'Increased user engagement by 60%',
    tags: ['UX', 'React', 'IoT', 'Dashboard'],
    overview: 'Designed a central dashboard to control all smart devices in a home...',
    challenge: 'Users had to manage each IoT brand via separate apps...',
    solution: 'Created a unified, brand-agnostic UX with a consistent control schema...',
    implementation: [
      { phase: 'User Research', duration: '2 weeks', description: 'Surveyed 100+ smart home users' },
      { phase: 'Wireframing', duration: '3 weeks', description: 'Designed layout and interaction models' },
      { phase: 'Integration', duration: '6 weeks', description: 'Connected APIs from 10 major IoT platforms' }
    ],
    results: [
      { metric: 'App Usage Time', improvement: '2x increase', description: 'Average session time doubled' },
      { metric: 'NPS Score', improvement: '+35 points', description: 'Strong user feedback post launch' }
    ],
    technologies: ['React', 'Redux', 'REST APIs', 'Material UI'],
    lessons: [
      'Design around real-life habits, not tech specs',
      'Use modular components for future integrations'
    ]
  },
  {
    id: '5',
    category: 'product-design',
    title: 'E-commerce Checkout Redesign',
    subtitle: 'Reducing cart abandonment through UX tweaks',
    image: 'https://images.pexels.com/photos/5722209/pexels-photo-5722209.jpeg',
    duration: '1 month',
    team: '3 designers + 4 devs',
    impact: '25% conversion rate boost',
    tags: ['UX', 'Conversion Optimization', 'Mobile-first'],
    overview: 'Revamped the entire checkout flow for a retail clothing brand...',
    challenge: 'Checkout process was too long and confusing, especially on mobile...',
    solution: 'Introduced a 3-step process with real-time shipping + coupon validation...',
    implementation: [
      { phase: 'Heatmap Analysis', duration: '1 week', description: 'Identified drop-off points' },
      { phase: 'Prototype A/B Testing', duration: '2 weeks', description: 'Tested new layout variants' },
      { phase: 'Deployment', duration: '1 week', description: 'Pushed changes to prod with monitoring' }
    ],
    results: [
      { metric: 'Cart Abandonment', improvement: '30% lower', description: 'Mobile UX improvements' },
      { metric: 'Conversion Rate', improvement: '25% higher', description: 'Streamlined 3-step flow' }
    ],
    technologies: ['Figma', 'Next.js', 'Stripe'],
    lessons: [
      'Mobile-first design is critical',
      'Live error feedback boosts trust'
    ]
  },
  {
    id: '6',
    category: 'product-design',
    title: 'B2B SaaS Onboarding Experience',
    subtitle: 'From signup to value in 5 minutes',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    duration: '2 months',
    team: '5 engineers, 1 PM, 1 UX',
    impact: 'Time-to-value down to 5 minutes',
    tags: ['Onboarding', 'SaaS', 'User Journey', 'Tooltips'],
    overview: 'Redesigned the onboarding flow for a SaaS analytics tool used by marketers...',
    challenge: 'Users churned before experiencing product value...',
    solution: 'Implemented guided onboarding with data preloading and interactive tours...',
    implementation: [
      { phase: 'Funnel Drop Analysis', duration: '2 weeks', description: 'Found highest friction steps' },
      { phase: 'Guided Tour Design', duration: '3 weeks', description: 'Built a tooltip-driven flow with sample data' },
      { phase: 'Launch & Feedback Loop', duration: '3 weeks', description: 'Captured qualitative and quantitative feedback' }
    ],
    results: [
      { metric: 'Activation Rate', improvement: '3x increase', description: 'Users hitting aha moment sooner' },
      { metric: 'Churn', improvement: '50% reduction', description: 'Better onboarding led to higher retention' }
    ],
    technologies: ['React', 'Segment', 'Mixpanel', 'Chakra UI'],
    lessons: [
      'Preload data to shorten time-to-value',
      'Combine tooltips with contextual modals for guidance'
    ]
  }
];
