// src/data/caseStudies.ts

export interface ImplementationPhase {
    phase: string;
    duration: string;
    description: string;
  }
  
  export interface Result {
    metric: string;
    improvement: string;
    description: string;
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
    keyDecisions: string[];
    lessons: string[];
    quote: string;
    takeaways: string[];
  }
  
  const caseStudies: CaseStudy[] = [

    {
        id: '1',
        title: 'AI Platform Architecture',
        subtitle: 'Enabling Real-Time ML at Scale Across 100+ Global Sites',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        duration: '6 months',
        team: 'Led 15 engineers + cross-functional stakeholders',
        impact: '90% faster model processing, 75% faster time to market',
        tags: ['Product Platform', 'Microservices', 'Kubernetes', 'ML Ops', 'Scalability'],
      
        businessGoal:
          'Accelerate the delivery of ML-driven features across global products by reducing inference latency and improving deployment velocity.',
      
        role:
          'As the Technical Product Manager, I led the end-to-end architecture, team coordination, and execution strategy to modernize our ML infrastructure. I worked cross-functionally with platform, data science, and product teams to ensure alignment with business goals.',
      
        overview:
          'The goal was to design and roll out a scalable, real-time ML platform serving 100+ global sites. The legacy monolithic architecture couldn’t support the increasing volume and demand for real-time inference. I drove the transition to a modular, cloud-native platform that significantly boosted system responsiveness and enabled faster ML feature rollouts.',
      
        challenge:
          'The legacy system’s batch-based architecture resulted in long model processing times (45+ minutes), and deployment cycles were slow, taking up to 2 weeks. This created delays in feature delivery and operational inefficiencies across geographies.',
      
        solution:
          'I defined a modern platform strategy leveraging Kubernetes for orchestration, Apache Kafka for real-time streaming, and TensorFlow Serving for scalable inference. I partnered with ML and infra leads to drive modular service definitions, setup CI/CD, and enable observability and autoscaling using Prometheus and Grafana.',
      
        implementation: [
          {
            phase: 'Discovery & Stakeholder Alignment',
            duration: '4 weeks',
            description:
              'Conducted 10+ stakeholder interviews across ML, product, and engineering to map current pain points. Created a migration impact matrix to prioritize capabilities and ensure business continuity.',
          },
          {
            phase: 'Architecture Definition',
            duration: '3 weeks',
            description:
              'Designed a microservices-based architecture with clear separation between data ingestion, processing, and serving. Documented platform interfaces, SLAs, and failover plans to ensure global uptime.',
          },
          {
            phase: 'Development & Rollout',
            duration: '12 weeks',
            description:
              'Led agile sprints with a cross-functional team of 15 engineers. Integrated Kafka, deployed inference services with TensorFlow Serving, and containerized all workloads using Docker on AWS EKS.',
          },
          {
            phase: 'CI/CD, Monitoring & Scaling',
            duration: '4 weeks',
            description:
              'Established CI/CD pipelines (GitHub Actions + Helm) for reproducible deployments. Introduced Prometheus/Grafana dashboards and configured Kubernetes HPA for autoscaling based on live traffic.',
          },
        ],
      
        results: [
          {
            metric: 'Processing Speed',
            improvement: '90% faster',
            description: 'Reduced model processing latency from 45 minutes to under 4 minutes through real-time streaming and parallel processing.',
          },
          {
            metric: 'Deployment Velocity',
            improvement: '75% improvement',
            description: 'Reduced model deployment cycle from 2 weeks to 3 days by implementing CI/CD and container orchestration.',
          },
          {
            metric: 'Global Feature Rollout Time',
            improvement: '60% faster delivery',
            description: 'Enabled product teams to launch ML features 60% faster across 100+ global sites with consistent performance SLAs.',
          },
        ],
      
        technologies: [
          'Kubernetes',
          'Apache Kafka',
          'TensorFlow Serving',
          'Docker',
          'AWS EKS',
          'PostgreSQL',
          'Redis',
          'Prometheus',
          'Grafana',
          'GitHub Actions',
          'Helm',
        ],
      
        collaboration: [
          'Partnered with Data Science teams to understand model serving requirements.',
          'Coordinated with Infrastructure and SREs to ensure 99.99% uptime and autoscaling across regions.',
          'Worked with Product Managers to prioritize MVP rollout and define success KPIs.',
          'Presented to CTO and stakeholders at each milestone to align on roadmap and tradeoffs.',
        ],
      
        keyDecisions: [
          'Chose Kubernetes over ECS for better portability and self-healing.',
          'Opted for Kafka to decouple services and support real-time streaming at scale.',
          'Introduced GitOps for declarative infrastructure management.',
        ],
      
        lessons: [
          'Start with deep discovery and stakeholder alignment to avoid rework later.',
          'Modularizing platform components enables faster iteration and testing.',
          'Automation and monitoring are critical for global-scale reliability.',
          'Change management is key—gradual migration avoided system downtime during the transition.',
        ],
      
        quote:
          '"This platform transformation allowed our teams to experiment faster and deploy smarter. It fundamentally changed our speed of innovation." — Director of Data Science',
      
        takeaways: [
          'Strong product-led thinking is essential to deliver scalable ML platforms.',
          'Cross-functional alignment is as critical as technical execution.',
          'FAANG-scale TPMs must balance architectural depth with business velocity.',
        ],
      },
      
    {
        id: '2',
        title: 'ML Observability Platform',
        subtitle: 'Building Trustworthy AI with Real-Time Monitoring and Alerting',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        duration: '4 months',
        team: 'Led 10 engineers + collaborated with 4 DS teams',
        impact: 'Reduced model drift incidents by 80%',
        tags: ['ML Observability', 'Monitoring', 'Model Drift', 'AIOps', 'Post-deployment Monitoring'],
      
        businessGoal:
          'Improve model reliability and transparency by detecting data drift, inference anomalies, and pipeline issues in production before they impact users.',
      
        role:
          'As the TPM, I owned the vision and execution of an observability platform that surfaced real-time ML issues. I aligned data science, SRE, and product teams under a unified monitoring initiative.',
      
        overview:
          'This case study covers the rollout of a real-time ML observability platform designed to detect data drift, latency spikes, and confidence anomalies across deployed models. It empowered both data scientists and platform engineers with proactive alerts, dashboards, and root-cause diagnostics.',
      
        challenge:
          'Prior to this project, there was no visibility into how models behaved in production. Several undetected drift issues led to inaccurate predictions and poor user experience, costing the company credibility and revenue.',
      
        solution:
          'I led the design of a monitoring pipeline that captured live inputs/outputs, calculated distributional shifts, and emitted alerts using Prometheus, OpenTelemetry, and Grafana. A dashboard was created to track drift, latency, and confidence scores in real-time.',
      
        implementation: [
          {
            phase: 'Requirements & Alignment',
            duration: '2 weeks',
            description:
              'Hosted workshops with DS teams to understand model failure points and worked with SREs to define operational SLAs for ML components.',
          },
          {
            phase: 'Design & Data Instrumentation',
            duration: '3 weeks',
            description:
              'Defined metrics schema and built streaming hooks for Kafka-based feature pipelines. Integrated Prometheus exporters for live metric collection.',
          },
          {
            phase: 'System Build & Deployment',
            duration: '6 weeks',
            description:
              'Worked with engineers to develop anomaly scoring and alerting logic. Deployed dashboards in Grafana with model-level drill-downs.',
          },
          {
            phase: 'Testing & Rollout',
            duration: '3 weeks',
            description:
              'Piloted with 3 models, ran chaos tests to simulate drift scenarios. Trained DS teams on alert interpretation and RCA workflows.',
          },
        ],
      
        results: [
          {
            metric: 'Model Drift Detection',
            improvement: '80% fewer incidents',
            description: 'Reduced undetected model drift events from 5/month to 1/month on average.',
          },
          {
            metric: 'Issue Resolution Time',
            improvement: '60% faster RCA',
            description: 'Cut mean time to resolution from 8 hours to 3 hours by enabling real-time alerts and dashboards.',
          },
          {
            metric: 'Data Science Confidence',
            improvement: 'Increased model trust',
            description: 'Enabled DS teams to confidently monitor live model health and performance trends.',
          },
        ],
      
        technologies: [
          'Prometheus',
          'Grafana',
          'OpenTelemetry',
          'Apache Kafka',
          'PostgreSQL',
          'Python',
          'FastAPI',
        ],
      
        collaboration: [
          'Collaborated with SRE team to integrate alerts into on-call playbooks.',
          'Co-created RCA workflows with DS leads for anomaly interpretation.',
          'Reported progress and KPIs to platform leadership every 2 weeks.',
        ],
      
        keyDecisions: [
          'Selected OpenTelemetry for flexible, vendor-agnostic tracing.',
          'Chose to store drift baselines in a time-series DB for versioned comparisons.',
          'Designed alerts with threshold-based and statistical triggers for robustness.',
        ],
      
        lessons: [
          'Model performance isn’t just a training-time concern—observability is essential for sustained value.',
          'Alert fatigue is real; meaningful thresholds and DS input were key to adoption.',
          'A platform mindset helped unify fragmented model monitoring approaches.',
        ],
      
        quote:
          '"This platform helped us detect silent failures before they became customer problems. It changed how we build and monitor ML products." — Lead Data Scientist',
      
        takeaways: [
          'Good TPMs focus not just on delivery, but also on long-term maintainability and trust.',
          'Driving cross-functional alignment requires you to speak data, ops, and product languages fluently.',
          'Visibility is a product feature—especially in AI systems.',
        ],
      },
      {
        id: '3',
        title: 'Edge Dev Platform',
        subtitle: 'Accelerating AI Deployment on Jetson Devices at Scale',
        image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        duration: '5 months',
        team: '12 engineers + 3 infra specialists',
        impact: 'Cut model-to-device deployment from 2 days to 2 hours',
        tags: ['Edge AI', 'Developer Experience', 'Jetson', 'CI/CD', 'IoT', 'DevOps'],
      
        businessGoal:
          'Improve developer experience and reduce friction in deploying and monitoring ML models to 500+ edge devices (Jetson) worldwide.',
      
        role:
          'As TPM, I led the development of a self-service edge deployment platform. I defined feature scope, prioritized MVP, and coordinated infra and tooling teams for fast delivery.',
      
        overview:
          'Edge teams faced challenges deploying AI models to distributed Jetson devices. The process was manual, error-prone, and lacked visibility. I led the development of an internal platform that automated packaging, deployment, and device health monitoring via Git-based triggers and real-time telemetry.',
      
        challenge:
          'Each device required SSH-based setup and custom configs. Lack of version control and rollback led to instability in production deployments.',
      
        solution:
          'We built a GitOps-style deployment platform with containerized model packages, OTA updates, and real-time fleet telemetry. The platform integrated with Jenkins for CI/CD and used MQTT for device comms.',
      
        implementation: [
          {
            phase: 'Problem Validation & MVP Scoping',
            duration: '2 weeks',
            description:
              'Conducted 6+ user interviews with edge developers and field engineers. Mapped key friction points and defined a narrow MVP scope.',
          },
          {
            phase: 'Architecture & Platform Setup',
            duration: '4 weeks',
            description:
              'Designed deployment workflows using Docker, Git triggers, and OTA agents. Setup MQTT brokers and device heartbeat logging.',
          },
          {
            phase: 'CI/CD Integration & Security',
            duration: '5 weeks',
            description:
              'Integrated Jenkins + GitHub Actions for image builds and deployments. Added RBAC and audit logs for traceability.',
          },
          {
            phase: 'Telemetry & Dashboarding',
            duration: '3 weeks',
            description:
              'Built live fleet dashboards to show connectivity, deployment success rate, and model version status using Grafana.',
          },
        ],
      
        results: [
          {
            metric: 'Deployment Time',
            improvement: '95% faster',
            description: 'Reduced manual deployment cycle from 2 days to 2 hours.',
          },
          {
            metric: 'Rollback Success Rate',
            improvement: '99% safe rollbacks',
            description: 'Enabled seamless version rollback with near-zero downtime.',
          },
          {
            metric: 'Fleet Visibility',
            improvement: '100% coverage',
            description: 'Achieved full observability into deployment status and device health.',
          },
        ],
      
        technologies: [
          'NVIDIA Jetson',
          'Docker',
          'GitHub Actions',
          'Jenkins',
          'MQTT',
          'Grafana',
          'Node.js',
          'PostgreSQL',
        ],
      
        collaboration: [
          'Worked closely with edge dev teams to co-design workflows.',
          'Collaborated with infra team for secure OTA and network resilience.',
          'Aligned with product and operations to coordinate rollout across regions.',
        ],
      
        keyDecisions: [
          'Used MQTT for lightweight and reliable IoT communication.',
          'Introduced GitOps patterns for model deployment governance.',
          'Prioritized developer experience by integrating with existing CI tools.',
        ],
      
        lessons: [
          'For edge platforms, reliability and observability are just as important as speed.',
          'Productizing infra platforms means thinking like a user—focus on pain points.',
          'Security, rollback, and audit trails must be first-class citizens in DevOps for edge.',
        ],
      
        quote:
          '"This platform removed so many blockers. Deploying to hundreds of edge devices became as simple as a PR merge." — Edge Developer Lead',
      
        takeaways: [
          'TPMs in platform teams must blend deep technical architecture with usability thinking.',
          'Speed alone isn’t enough—governance and auditability matter at scale.',
          'Good infrastructure fades into the background. That’s when it’s truly great.',
        ],
      }

  ];
  
  export default caseStudies;
  