export interface ImplementationPhase {
  phase: string;
  duration: string;
  description: string;
}

export interface Result {
  metric: string;
  before: string;
  after: string;
  change: string;
}

export interface KeyDecision {
  decision: string;
  reason: string;
  tradeOff: string;
}

export interface Architecture {
  before: string[];
  after: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  team: string;
  impact: string;
  tags: string[];

  businessGoal: string;
  role: string;

  overview: string;
  challenge: string;
  solution: string;
  implementation: ImplementationPhase[];
  results: Result[];
  technologies: string[];

  collaboration: string[];
  keyDecisions: KeyDecision[];
  lessons: string[];
  quote: string;
  takeaways: string[];

  // Newly added fields
  architecture: Architecture;
  customerFeedback: string[];
}

  
  const caseStudies: CaseStudy[] = [
    {
      id: '4',
      title: "Redesigning Evercam's Gate Report",
      subtitle: 'Real-Time Edge-Based Object Detection at Scale',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      duration: '6 months',
      team: '1 TPM (myself), 6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 Annotation + QA',
      impact: 'Transformed from 7% NPS to 78%, and 750% MRR growth across 100+ industrial sites',
      tags: [
        'Edge AI', 'Real-Time Systems', 'Product Design', 'System Design', 'Offline Sync',
        'RabbitMQ', 'YOLOv5', 'Jetson', 'TPM', 'NPS Growth', 'OTA Deployment', 'AI Simplification',
      ],
  
      businessGoal:
        'Redesign Evercam’s Gate Report product to reduce latency, lower data costs, and improve reliability by moving inference from cloud to edge devices.',
  
      role:
        'As TPM, I led the product and system redesign. I removed non-critical ML features, introduced real-time edge inference, and collaborated across AI, DevOps, QA, CS, and Design to deliver a reliable, scalable product.',
  
      overview:
        'Gate Report, Evercam’s flagship vehicle monitoring product, initially used a cloud-based architecture that struggled under high latency, cost, and reliability issues. I drove a redesign towards an edge-first, event-based architecture optimized for reliability, offline-first support, and real-time insights.',
  
      challenge:
        'Cloud-centric processing caused multi-minute delays, heavy data usage, and unreliable performance under bad network conditions. The over-engineered stack added complexity with little value to end users.',
  
      solution:
        'Moved inference to Jetson devices using YOLOv5. Removed FaceNet and full-frame pipelines. Integrated RabbitMQ for offline event queuing and built an OTA system using Ansible + AWX for rapid updates.',
  
      implementation: [
        {
          phase: 'Problem Validation & Prioritization',
          duration: '3 weeks',
          description: 'Validated pain points across users and internal teams. Reframed the goal as delivering *reliable real-time events*, not “cool AI”.',
        },
        {
          phase: 'Architecture Redesign',
          duration: '4 weeks',
          description: 'Replaced cloud inference with on-device YOLOv5, event-level RabbitMQ queues, and sync logic.',
        },
        {
          phase: 'OTA Rollout & Dashboarding',
          duration: '5 weeks',
          description: 'Integrated Ansible + AWX for OTA deployment. Built new dashboards for event visibility and sync monitoring.',
        },
        {
          phase: 'Customer Feedback & Iteration',
          duration: '4 weeks',
          description: 'Weekly syncs with CS and users to iterate on UX, filters, event reliability, and sync issues.',
        },
      ],
  
      results: [
        {
          metric: 'NPS',
          before: '7%',
          after: '78%',
          change: '+71 pts',
        },
        {
          metric: 'Monthly Recurring Revenue',
          before: '1×',
          after: '8.5×',
          change: '+750%',
        },
        {
          metric: 'Latency',
          before: '2–10 mins',
          after: '<1 sec',
          change: '↓ 90%',
        },
        {
          metric: 'Data Usage per Site',
          before: '3TB+/month',
          after: '<200GB/month',
          change: '↓ 94%',
        },
        {
          metric: 'Event Reliability',
          before: '70%',
          after: '99.3%',
          change: '↑ 29%',
        },
      ],
  
      technologies: [
        'Jetson',
        'YOLOv5',
        'RabbitMQ',
        'PostgreSQL',
        'Ansible',
        'AWX',
        'RTSP',
        'REST APIs',
      ],
  
      collaboration: [
        'AI/ML Team: Pruned unnecessary models, optimized YOLO for Jetson',
        'DevOps: Built AWX-based OTA rollout pipeline',
        'CS Team: Weekly syncs to prioritize UX improvements',
        'QA & Annotation: Validated detection quality across deployments',
        'Design: Created event-centric UI with filters, search, and sync indicators',
      ],
  
      keyDecisions: [
        {
          decision: 'Removed FaceNet + complex classifiers',
          reason: 'Not aligned with actual customer use cases',
          tradeOff: 'Reduced "AI novelty" but improved speed & simplicity',
        },
        {
          decision: 'Real-time detection on Jetson devices',
          reason: 'Reduced latency, better reliability',
          tradeOff: 'Required careful model optimization for edge',
        },
        {
          decision: 'Event-level sync via RabbitMQ + Sync Service',
          reason: 'Resilience in poor networks',
          tradeOff: 'Increased local system complexity',
        },
        {
          decision: 'Rebuilt UX for actionability (events, filters)',
          reason: 'Focus on what users need to act on',
          tradeOff: 'Dropped advanced debug views used internally',
        },
        {
          decision: 'Ansible + AWX for OTA deployments',
          reason: 'Empowered non-dev teams to push updates',
          tradeOff: 'Needed training and access control setup',
        },
      ],
  
      lessons: [
        'Real-world product thinking often means removing, not adding tech.',
        'Offline-first + sync-later design is critical in edge environments.',
        'TPMs must synthesize user need, tech feasibility, and business outcomes.',
      ],
  
      quote:
        '"Before this, we had to wait and guess. Now we get the data in real time. It\'s exactly what we needed." — Construction Site Manager, Enterprise Client',
  
      takeaways: [
        'Designing with end-user goals in mind drives the best outcomes.',
        'Good TPMs simplify and prioritize — they don’t just ship more features.',
        'Scalable edge platforms require thoughtful tradeoffs, not raw compute power.',
      ],
  
      architecture: {
        before: [
          'Camera → Video Upload → Cloud Inference (FaceNet, YOLO, Classifier) → DB → UI',
          'Single point of failure (network/cloud)',
          'Video-heavy sync',
          'Complex and costly',
        ],
        after: [
          'Camera → Jetson SBC → YOLOv5 (on-device inference) → RabbitMQ (local event queue)',
          '↳ Local Storage → Sync Engine → Admin DB → UI',
          'Real-time detection',
          'Works offline and resyncs later',
          'Low bandwidth footprint',
          'Scalable and OTA-deployable',
        ],
      },
  
      customerFeedback: [
        '"Before this, we had to wait and guess. Now we get the data in real time. It\'s exactly what we needed." — Construction Site Manager, Enterprise Client',
        '"This is a product we can sell and scale." — Head of Sales, Evercam',
      ],
    },
  ];
  
  
  export default caseStudies;
  