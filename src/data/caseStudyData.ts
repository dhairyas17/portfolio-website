export interface TableData {
  table: string[][];
  context?: string;
  image?: string;
}

export interface Action {
  heading: string;
  details: string;
}

export interface ChallengeMitigation {
  challenge: string;
  mitigation: string;
}

export interface CustomerFeedback {
  text: string;
  author: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  role: string;
  team: string;
  duration: string;
  stack: string;
  deployment: string;
  summary: string;
  situation: string[];
  roleDescription: string;
  task: string[];
  actions: Action[];
  crossFunctionalCollaboration: string[];
  systemThinking: TableData;
  productThinking: TableData;
  tradeoffs: TableData;
  challenges: ChallengeMitigation[];
  results: TableData;
  outcomes: string;
  customerFeedback: CustomerFeedback[];
  takeaways: string[];
}

// Your actual case study data
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Redesigned Gate Report for Real-Time Edge-Based Object Detection",
    category: "Product Design, System Design, Edge AI",
    role: "TPM (Product + Program Leadership)",
    team: "6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 QA",
    duration: "6 months",
    stack: "Jetson, YOLOv5, RabbitMQ, PostgreSQL, Ansible, RTSP, REST APIs",
    deployment: "100+ Construction Sites",
    summary: `Redesigned a high-latency, high-cost video analytics system into a scalable, edge-first product for construction site monitoring. 
    Delivered a 99.98% latency reduction, 94% lower bandwidth usage, 4.5x MRR growth, and 71-point NPS increase. Led full product and 
    technical transformation across a 14-person cross-functional team.`,
    roleDescription: "Led the full product and technical transformation as Technical Product Manager, owning the end-to-end roadmap, cross-functional execution, and architecture redesign. Coordinated engineering, AI, DevOps, design, QA, and customer success teams to deliver a scalable, reliable edge-first solution that dramatically improved latency, cost, and user experience.",
    situation: [
      "Evercam’s Gate Report is a vehicle monitoring system used at enterprise and construction site gates. It originally relied on uploading full video footage to the cloud for inference and processing. As deployments grew, customers faced:",
      "7–8 hour delays in event availability",
      "Massive bandwidth usage (3TB+/site/month)",
      "Low reliability due to poor network connectivity",
      "Poor user experience due to raw detections and no offline support",
      "As a result, the product had low adoption and a 7% NPS. It was over-engineered, hard to support, and failing in the field.",
    ],
    task: [
      "As TPM, I led a full product and architecture redesign to:",
      "Eliminate latency and bandwidth bottlenecks",
      "Improve reliability and offline support on unstable networks",
      "Simplify the tech stack to reduce cost and ops overhead",
      "Make the UX actionable for non-technical site managers",
      "Drive adoption, improve satisfaction, and grow recurring revenue",
    ],
    actions: [
      {
        heading: "Built Edge-First System for Fast Inference",
        details: `Migrated inference from cloud to on-device YOLOv5 on NVIDIA Jetson, reducing event latency from 7+ hours to <5 seconds and cutting bandwidth by 94% by sending metadata instead of raw video.`,
      },
      {
        heading: "Optimized AI Stack for Performance",
        details: `Removed underused FaceNet re-ID to focus on vehicle detection, improving inference speed and system stability.`,
      },
      {
        heading: "Developed Scalable OTA Update Pipeline",
        details: `Created Ansible + AWX pipeline with safe rollbacks, enabling DevOps and CS teams to deploy updates independently with minimal downtime.`,
      },
      {
        heading: "Simplified UX for Non-Technical Users",
        details: `Collaborated on dashboard redesign to add clear sync status and event-focused views, making the tool intuitive for site managers.`,
      },
      {
        heading: "Established Weekly Customer Feedback Loops",
        details: `Led sessions with customers and CS to align features with user needs and pain points.`,
      },
    ],
    crossFunctionalCollaboration: [
      "Facilitated alignment between engineering, AI, DevOps, design, and CS teams through weekly syncs and transparent roadmap sharing.",
      "Resolved blockers across functions by establishing shared OKRs and priorities.",
      "Enabled rapid, coordinated execution across 14-person cross-functional team.",
    ],
    systemThinking: {
      table: [
        [
          "Hardware Constraints",
          "Optimized YOLOv5 model to run efficiently on Jetson Nano devices",
          "Achieved <5 second real-time detection despite limited compute power"
        ],
        [
          "Network Variability",
          "Implemented RabbitMQ event queue with offline persistence and automatic resync",
          "Ensured >99% reliable event delivery under unstable, low-bandwidth networks"
        ],
        [
          "User Context",
          "Built for rugged construction sites with intermittent connectivity and power",
          "Created fault-tolerant architecture that operates autonomously and resyncs data"
        ],
        [
          "Cross-team Input",
          "Aligned Engineering, AI, DevOps, Design, QA, and CS teams via regular syncs",
          "Ensured coordinated architecture decisions and timely, user-driven delivery"
        ],
      ],
      image: '/assets/case-studies/gr-d2.png',
    },
    productThinking: {
      table: [
        [
          "User Needs",
          "Focused on vehicle entry/exit detection only, removing extraneous AI features",
          "Simplified product to core Jobs-to-be-Done, reducing complexity and cost"
        ],
        [
          "UX Design",
          "Developed event-driven dashboard with filtering, search, and sync status indicators",
          "Enabled users to quickly find actionable events and monitor system health"
        ],
        [
          "Feedback Loop",
          "Held weekly feedback sessions with end users and Customer Success team",
          "Used Agile and Lean Startup cycles to iterate rapidly based on real user data"
        ],
        [
          "Outcome Focus",
          "Set and tracked OKRs for adoption, latency, reliability, and revenue impact",
          "Delivered measurable business growth: NPS +71 pts, MRR 4.5×, latency ↓ 99.98%"
        ],
      ],
      image: '/assets/case-studies/gate-report-ui.png',
    },
    tradeoffs: {
      table: [
        ["AI Complexity vs Reliability", "Removed FaceNet and complex ML", "Improved compute performance and stability"],
        ["Feature Scope vs Performance", "Narrowed focus to essential insights", "Faster inference, reduced cost"],
        ["Edge Complexity vs Network Dependency", "Edge-first with offline sync", "Resilient on poor networks, near real-time data"],
        ["Scalability vs Customization", "Standardized OTA update pipeline", "Fast rollout to 100+ sites with low ops overhead"],
      ],
    },
    challenges: [
      {
        challenge: "Unstable site network connectivity",
        mitigation: "RabbitMQ buffering with auto-resync ensured zero event loss and smooth offline/online sync."
      },
      {
        challenge: "Low compute on NVIDIA Jetson",
        mitigation: "Optimized inference pipeline, pruned classifiers, cut load 40% with no accuracy loss."
      },
      {
        challenge: "Risky OTA firmware updates",
        mitigation: "Built rollback-capable OTA system via Ansible + AWX for safe, autonomous updates."
      },
      {
        challenge: "Raw data unusable for non-technical users",
        mitigation: "Revamped UI to show high-signal, actionable events, boosting decision speed 60%."
      }
    ],
    results: {
      table: [
        ["NPS", "7%", "78%", "+71 pts"],
        ["MRR", "1×", "4.5×", "+350%"],
        ["Latency", "7–8 hours", "<5 seconds", "↓ 99.98%"],
        ["Data Usage/Site", "3TB+/month", "<200GB/month", "↓ 94%"],
        ["Event Reliability", "70%", "99.3%", "+29%"],
      ],
    },
    outcomes: `The redesign transformed a high-latency, high-cost system into a fast, scalable, and user-friendly product. Latency dropped by 99.98%, bandwidth usage was cut by 94%, and reliability rose to over 99%. These improvements led to a 4.5x increase in monthly recurring revenue and an NPS surge from 7% to 78%. The system now supports 100+ active deployments with minimal operational load.`,
    customerFeedback: [
      {
        text: "Before, we had to wait and guess. Now, we get real-time data—exactly what we needed.",
        author: "Skanska Site Manager",
      },
      {
        text: "This product has strong potential for market success.",
        author: "Head of Sales, Evercam",
      },
    ],
    
    takeaways: [
      "Customer-First, Not AI-First: Focused on delivering reliable, usable event data over novelty in ML.",
      "Edge AI at Scale: On-device inference with offline support cut latency and bandwidth dramatically.",
      "Cross-Functional Execution: Weekly iteration across CS, DevOps, AI, and design ensured delivery and adoption.",
      "Impact-Driven Decisions: Every tradeoff aligned with adoption, usability, and revenue growth.",
    ],
  },
  {
    "id": 2,
    "title": "Redesigned Evercam’s Edge Architecture to Scale Globally with Zero-Dev Onboarding",
    "category": "System Design, Infrastructure Optimization, Product Operations",
    "role": "TPM (Technical Product Manager)",
    "team": "1 TPM, 3 Firmware Engineers, 2 DevOps, 5 Developers, 2 Support Engineers",
    "duration": "4 months",
    "stack": "SBCs (Jetson/Raspberry Pi), RTSP, Ansible, AWX, Docker, Custom Firmware, YAML Configs",
    "deployment": "627+ Projects (1200+ Kits)",
    "summary": "Led the Edge Standardization Program at Evercam to transition from custom camera-based deployments to a standardized kit-based system. Improved scalability, reliability, and support while reducing deployment errors and tech debt. Successfully rolled out automation tools and empowered non-technical teams with UI-driven deployment and updates.",
    "roleDescription": "As TPM, I lead the Edge Standardization initiative, working cross-functionally with firmware, DevOps, development, and support teams. Defined a unified spec for hardware, firmware, and software layers, and implemented automation for OTAs and configuration management, streamlining the deployment process and empowering non-technical staff.",
    "situation": [
      "Evercam’s edge device deployments were inconsistent, with no standardization in hardware, firmware, or camera configurations.",
      "Deployment delays, high support overhead, and frequent configuration errors plagued the process, creating significant tech debt."
    ],
    "task": [
      "Standardize the hardware and software configurations across all deployments to improve scalability, reliability, and maintainability.",
      "Enable non-technical support teams to handle edge device resets and updates without needing engineering assistance.",
      "Automate the deployment pipeline to reduce manual setup and minimize configuration errors."
    ],
    "actions": [
      {
        "heading": "Defined Modular Kit-Based Architecture",
        "details": "Transitioned from custom camera-based setups to pre-approved Edge Kits, consisting of validated SBCs, cameras, and storage, to ensure consistency across all deployments."
      },
      {
        "heading": "Implemented Automation for Configuration Rollout",
        "details": "Created an Ansible-based deployment pipeline for OTA updates, integrated with AWX for UI-driven deployment, allowing non-technical teams to easily manage device configurations."
      },
      {
        "heading": "Developed Self-Serve Tools for Field Operations",
        "details": "Built user-friendly documentation and UI-driven tools that empowered the support team to troubleshoot, reset, and push configurations independently."
      },
      {
        "heading": "Standardized Version Control for Firmware and Software",
        "details": "Introduced centralized version control for hardware, firmware, and software to eliminate inconsistencies and track changes across all devices."
      }
    ],
    "crossFunctionalCollaboration": [
      "Coordinated with firmware engineers to define a baseline image and upgrade strategy for all edge devices.",
      "Worked with DevOps to build and manage the Ansible and AWX automation stack for efficient deployment and updates.",
      "Collaborated with developers to create modular components for containerized deployment across all kits.",
      "Trained support engineers on how to use the new UI-driven tools to handle resets and device management without developer intervention."
    ],
    "systemThinking": {
      "table": [
        [
          "Hardware Consistency",
          "Pre-approved Edge Kits with standardized components",
          "Ensured reproducible hardware setup across all deployments"
        ],
        [
          "Configuration Management",
          "Manual configuration for each site",
          "Automated config deployment via YAML profiles and OTA updates"
        ],
        [
          "Support Team Autonomy",
          "Devs required for resets and troubleshooting",
          "Enabled support team to manage devices independently with UI tools"
        ],
        [
          "Version Control",
          "No version tracking for firmware or hardware",
          "Centralized version control for all software and hardware components"
        ]
      ],
      "image": ""
    },
    
    "productThinking": {
      "table": [
        [
          "User Needs",
          "Consistent, reliable edge deployments across all projects",
          "Eliminated ad-hoc setups to reduce errors and tech debt"
        ],
        [
          "UX Design",
          "Manual configuration and updates",
          "Developed UI-driven deployment tools to empower support and field teams"
        ],
        [
          "Feedback Loop",
          "Feedback primarily from engineering and support teams",
          "Gathered input from all teams to refine deployment workflows and tools"
        ],
        [
          "Outcome Focus",
          "No tracking of deployment performance",
          "Tracked deployment speed, error rates, and support overhead to measure success"
        ]
      ],
      "image": ""
    },
    
    "tradeoffs": {
      "table": [
        ["Customization vs Standardization", "Ad-hoc hardware setups", "Pre-approved kits for consistent deployments"],
        ["Developer Dependency vs Support Team Autonomy", "Devs needed for device resets", "Support team can independently manage devices via UI"],
        ["Manual Setup vs Automation", "Manual SSH-based setup", "Automated config deployment with Ansible and AWX"]
      ]
    },
    "challenges": [
      {
        "challenge": "Inconsistent hardware and firmware versions across sites",
        "mitigation": "Standardized hardware kits and centralized version control to ensure uniformity and reproducibility."
      },
      {
        "challenge": "Manual deployment processes leading to errors and delays",
        "mitigation": "Implemented automated OTA updates and Ansible playbooks to streamline deployment and reduce human error."
      },
      {
        "challenge": "Lack of support team autonomy in device management",
        "mitigation": "Developed user-friendly tools and documentation, empowering support to handle edge device management independently."
      }
    ],
    "results": {
      "table": [
        ["Deployment Speed", "Weeks per project", "Days per project", "↓ 70%"],
        ["Support Overhead", "High, with devs involved in every deployment", "Low, support can manage independently", "↓ 90%"],
        ["Tech Debt", "High due to inconsistent setups", "Low due to standardized kits and version control", "↓ 80%"],
        ["Error Rates", "Frequent configuration errors", "Rare configuration issues", "↓ 95%"]
      ]
    },
    "outcomes": "The Edge Standardization Program drastically improved the scalability and reliability of Evercam’s deployments. With a standardized kit-based approach, deployment errors were reduced by 95%, support overhead was cut by 90%, and projects were completed 70% faster. The introduction of automation and self-serve tools empowered non-technical teams to manage edge devices independently, freeing up engineering resources for higher-priority tasks.",
    customerFeedback: [
      {
        text: "Standardizing the kits changed everything. Now we just ship, install, and forget about it.",
        author: "Global Operation Lead, Evercam",
      },
      {
        text: "AWX lets support handle edge resets and updates on their own. No more waiting on developers.",
        author: "Support Engineer, Evercam",
      },
    ],
    
    "takeaways": [
      "Standardization Drives Scalability: A unified hardware and software spec improved consistency across deployments.",
      "Automation for Speed: Ansible and AWX helped reduce deployment time and human error.",
      "Enabling Non-Technical Teams: User-friendly tools and UI-driven processes allowed non-technical teams to manage the edge devices independently.",
      "Reduced Tech Debt: Centralized version control and standardized kits eliminated inconsistencies and simplified future updates."
    ]
  },
  {
    "id": 3,
    "title": "Real-Time Edge Fleet Observability: From Blind Spots to Instant Insights",
    "category": "System Design, Product Strategy, DevOps Enablement",
    "role": "TPM (Technical Product Manager)",
    "team": "1 TPM, 3 DevOps Engineers, 2 Backend Engineers, 1 Embedded Engineer, Support Lead, QA Engineer",
    "duration": "4 months",
    "stack": "Prometheus, Grafana, Ansible, AWX, Heartbeat Daemon",
    "deployment": "1200+ Devices",
    "summary": "Led the design and implementation of a real-time observability system for Evercam's edge devices. The system provided proactive health monitoring, improved issue resolution, and drastically reduced field technician visits and operational costs. Integrated Prometheus and Grafana for full visibility, automated alerts, and scalable OTA deployment via Ansible and AWX.",
    "roleDescription": "As TPM, I defined observability as a core product feature, led cross-functional collaboration, and ensured alignment across firmware, DevOps, backend, support, and QA teams. I drove the system architecture, implemented Prometheus and Grafana for real-time monitoring, and ensured the system could scale with automated OTA updates.",
    "situation": [
      "Evercam’s edge device fleet lacked real-time observability, leading to reactive issue resolution and high operational costs.",
      "Field technician visits were expensive and often unnecessary, as failures were not detected until reported by customers.",
      "The existing alerting system was entirely customer-initiated, causing delays and poor NPS due to slow issue resolution."
    ],
    "task": [
      "Build a real-time observability system to proactively monitor device health and alert teams before issues escalate.",
      "Enable SiteOps teams with visibility into the entire fleet’s health without requiring engineering intervention.",
      "Minimize the need for site visits by automating failure detection and resolution workflows."
    ],
    "actions": [
      {
        "heading": "Implemented Real-Time Device Health Monitoring",
        "details": "Deployed Prometheus to collect device health metrics, providing real-time monitoring of critical device parameters and failures."
      },
      {
        "heading": "Built Grafana Dashboards for SiteOps",
        "details": "Created intuitive, user-friendly Grafana dashboards that provided clear visibility into device status, empowering SiteOps teams to act proactively."
      },
      {
        "heading": "Automated Failure Alerts",
        "details": "Developed an automated alerting system that notified SiteOps teams about critical failures in real-time, reducing reliance on customer-initiated alerts."
      },
      {
        "heading": "Streamlined OTA Deployment for Scaling",
        "details": "Implemented Ansible and AWX for large-scale OTA deployment, allowing the observability system to be easily rolled out and updated across 1200+ devices."
      }
    ],
    "crossFunctionalCollaboration": [
      "Worked closely with DevOps engineers to implement Prometheus for real-time metrics collection and ensure scalability.",
      "Collaborated with backend engineers to integrate device health metrics and automate alerting based on predefined thresholds.",
      "Partnered with support and QA teams to design intuitive dashboards and gather feedback on usability for non-technical users."
    ],
    "systemThinking": {
      "table": [
        [
          "Device Health Monitoring",
          "No real-time observability",
          "Prometheus metrics for continuous, proactive health checks"
        ],
        [
          "Alerting System",
          "Customer-initiated alerts for failures",
          "Automated alerts based on real-time device health metrics"
        ],
        [
          "Deployment Process",
          "Manual updates and configuration changes",
          "OTA deployment via Ansible and AWX for large-scale rollout"
        ],
        [
          "UI/UX for Non-Technical Users",
          "Complex monitoring tools not suited for SiteOps teams",
          "Simple Grafana dashboards tailored for SiteOps with intuitive design"
        ]
      ],
      "image": "/assets/case-studies/gr.png"
    },
    
    "productThinking": {
      "table": [
        [
          "User Needs",
          "Proactive device health monitoring and fast issue resolution",
          "Built a real-time observability system to monitor device health and alert teams in advance"
        ],
        [
          "UX Design",
          "No intuitive interface for non-technical teams",
          "Created user-friendly Grafana dashboards to make observability accessible to SiteOps"
        ],
        [
          "Automation & Scalability",
          "Manual, time-consuming deployment processes",
          "Implemented automated OTA updates and alerts for fast, scalable management"
        ],
        [
          "Feedback Loop",
          "Lack of continuous feedback from end-users",
          "Collaborated with SiteOps and QA teams to iterate on dashboard design and alert thresholds"
        ]
      ],
      "image": "/assets/case-studies/OTA_OBV.jpeg"
    },
    
    "tradeoffs": {
      "table": [
        ["Real-Time Data vs Resource Consumption", "Prometheus for flexible metrics", "Requires careful setup to optimize resource usage"],
        ["User Experience vs Complexity", "Detailed but complex dashboards", "Simplified Grafana dashboards tailored for non-technical users"],
        ["Centralized Monitoring vs Device Load", "Heavy metrics gathering at the device level", "Heartbeat daemon to minimize device load while monitoring health"]
      ]
    },
    "challenges": [
      {
        "challenge": "High operational costs due to site visits",
        "mitigation": "Real-time monitoring with Prometheus and automated failure detection reduced the need for site visits by 80%."
      },
      {
        "challenge": "Lack of visibility into device health",
        "mitigation": "Implemented Grafana dashboards that provided SiteOps teams with full transparency into device status across all 1200+ devices."
      },
      {
        "challenge": "Customer-initiated alerting system",
        "mitigation": "Automated the alerting system to proactively notify teams about critical failures, reducing response time and improving customer satisfaction."
      },
      {
        "challenge": "Scalability of observability tools",
        "mitigation": "Used Ansible and AWX to ensure seamless OTA deployment and updates of the observability system across the fleet."
      }
    ],
    "results": {
      "table": [
        ["Device Failures", "High failure rates due to undetected issues", "75% reduction in device failures with real-time monitoring"],
        ["Field Technician Visits", "Frequent site visits for issue detection", "80% reduction in technician visits due to automated alerts"],
        ["NPS", "Low NPS due to long resolution times", "Improved NPS by 35% thanks to faster issue resolution"],
        ["System Transparency", "Limited visibility for SiteOps", "Complete transparency through Grafana dashboards"]
      ]
    },
    "outcomes": "The real-time observability system empowered SiteOps teams with full visibility into device health, reducing field technician visits by 80%, device failures by 75%, and boosting NPS by 35%. The shift to proactive monitoring and automated alerts dramatically improved operational efficiency and reduced reliance on reactive customer reports.",
    customerFeedback: [
      {
        text: "We can see how every device is doing in real time. This has saved us many trips to sites.",
        author: "SiteOps Manager, Evercam",
      },
      {
        text: "The new Grafana dashboards help us watch devices without needing help from engineers.",
        author: "Support Lead, Evercam",
      },
    ],    
    "takeaways": [
      "Proactive Monitoring: Real-time observability and automated alerts dramatically reduce downtime and operational costs.",
      "Scalable Deployment: Automated OTA updates ensured the observability system could scale easily across 1200+ devices.",
      "Enabling Non-Technical Teams: Simple, intuitive Grafana dashboards made observability accessible to SiteOps and support teams.",
      "Reduced Overhead: 80% fewer site visits and 75% fewer device failures showed the power of proactive monitoring and automation."
    ]
  },
  {
    "id": 4,
    "title": "Designing a Scalable AI-Driven Snapshot Intelligence API Platform",
    "category": "API Architecture, Image Intelligence, AI Integration",
    "role": "TPM (Technical Product Manager)",
    "team": "1 TPM, 2 ML Engineers, 1 Backend Engineer",
    "duration": "7 months",
    "stack": "FastAPI, Python, Docker, Kubernetes, PostgreSQL, Redis, RabbitMQ, Kafka, Prometheus, Grafana, Swagger UI, GitHub Actions",
    "deployment": "AWS EC2 + EKS, Local (Docker Compose)",
    "summary": "Led the design and implementation of a modular and scalable AI-driven snapshot intelligence API platform. The platform features production-ready APIs for object detection, face embedding, segmentation, inpainting, and anomaly detection, optimized for low-latency performance in cloud deployments.",
    "roleDescription": "As TPM, I led the overall architecture and design of the platform, ensuring scalability, modularity, and near real-time performance for high-resolution snapshot processing. I collaborated with ML engineers to integrate AI models, worked with backend developers on API and database design, and ensured cross-functional alignment across design, ops, and engineering teams.",
    "situation": [
      "AI snapshot intelligence pipelines were fragmented and lacked a scalable, modular, and developer-friendly API solution.",
      "The system had limited deployment flexibility for cloud-based image analysis, hindering scalability and accessibility for developers.",
      "The system lacked a clean abstraction of complex AI tasks, making it difficult for developers to integrate or extend the platform."
    ],
    "task": [
      "Design and implement a scalable, modular API platform for snapshot intelligence tasks such as object detection, segmentation, and inpainting.",
      "Build a system optimized for low-latency inference in cloud environments.",
      "Provide a developer-friendly API with easy-to-use REST endpoints for various AI tasks, abstracting away the complexity of snapshot analysis."
    ],
    "actions": [
      {
        "heading": "Unified AI Tasks into Developer-Friendly APIs",
        "details": "Developed clean, modular REST APIs for key snapshot intelligence tasks including object detection (YOLOv8), face embedding (FaceNet), segmentation (SAM), inpainting (LaMa), and anomaly detection."
      },
      {
        "heading": "Optimized for Low-Latency Inference",
        "details": "Achieved less than 150ms latency on critical API endpoints (/detect, /segment), ensuring near real-time performance for snapshot analysis tasks."
      },
      {
        "heading": "Built Scalable and Modular Infrastructure",
        "details": "Created a cloud-optimized system using Docker, Kubernetes, and scalable load balancing to handle high concurrency."
      },
      {
        "heading": "Implemented Full CI/CD Pipeline",
        "details": "Set up a GitHub Actions pipeline for continuous integration, automating tests, Docker builds, and deployment, ensuring reliable and efficient deployment processes."
      }
    ],
    "crossFunctionalCollaboration": [
      "Collaborated with ML engineers to validate model performance (SAM, LaMa) and optimize them for low-latency inference.",
      "Worked with backend developers to design a modular database schema for image metadata and optimize API performance.",
      "Partnered with ops teams to ensure scalable deployment, monitoring, and observability of the system using Prometheus and Grafana."
    ],
    "systemThinking": {
      "table": [
        [
          "API Modularity",
          "Fragmented AI pipelines with no clear integration",
          "Unified multiple AI tasks (e.g., object detection, segmentation) under clean, modular REST APIs"
        ],
        [
          "Low-Latency Performance",
          "No responsive or optimized image processing",
          "Optimized API endpoints with less than 150ms latency for critical tasks like object detection and segmentation"
        ],
        [
          "Scalability",
          "Non-scalable pipelines and fixed infrastructure",
          "Built with cloud-based scalability via Kubernetes and Docker"
        ],
        [
          "Developer Experience",
          "Complex, non-user-friendly interfaces",
          "Designed a simple and intuitive Swagger UI for easy API testing and integration by developers"
        ]
      ],
      "image": "/assets/case-studies/api_diagram.svg"
    },
    "productThinking": {
      "table": [
        [
          "User Needs",
          "Developers needed easy-to-use, modular APIs for AI snapshot intelligence tasks",
          "Built developer-friendly APIs abstracting complex AI tasks behind simple REST endpoints"
        ],
        [
          "UX Design",
          "No easy way to interact with APIs or test models",
          "Designed an intuitive Swagger UI for API testing and seamless integration"
        ],
        [
          "Scalability & Flexibility",
          "Difficult to scale in cloud environments",
          "Ensured cloud scalability, handling 100+ concurrent API calls"
        ],
        [
          "Automation & CI/CD",
          "Manual deployments with little automation",
          "Implemented GitHub Actions for CI/CD, automating tests, builds, and deployments for efficiency"
        ]
      ],
      "image": "/assets/case-studies/obj_detection.png"
    },
    "tradeoffs": {
      "table": [
        ["Low-Latency Inference vs Accuracy", "Optimized endpoints for fast inference (e.g., /detect, /segment)", "Maintaining sub-150ms latency required balancing model complexity and resolution"],
        ["Modularity vs Complexity", "Built a modular API system for flexible integration", "Complex backend architecture with multiple containerized services"]
      ]
    },
    "challenges": [
      {
        "challenge": "Fragmented AI pipelines with no integration",
        "mitigation": "Unified AI tasks into a single API platform with modular endpoints for object detection, segmentation, and other snapshot intelligence tasks."
      },
      {
        "challenge": "Ensuring low-latency performance for AI models",
        "mitigation": "Optimized critical endpoints to achieve under 150ms latency, ensuring near real-time inference in cloud deployments."
      },
      {
        "challenge": "Scalability in cloud environments",
        "mitigation": "Designed the system for high scalability using Kubernetes and load balancing."
      }
    ],
    "results": {
      "table": [
        ["API Latency", "High latency in image analysis", "Achieved 150ms average latency for /detect and /segment endpoints"],
        ["Concurrency", "Limited scalability for high-volume requests", "Scalable to 100+ concurrent API calls with low-latency performance"],
        ["Deployment Flexibility", "Single, unscalable environment", "Optimized for scalable cloud deployments"],
        ["System Integration", "Fragmented, unscalable AI pipelines", "Unified multiple AI models into a modular, scalable API platform"]
      ]
    },
    "outcomes": "The platform successfully integrated multiple AI snapshot intelligence tasks into a modular, scalable API system, optimized for low-latency performance in the cloud. It enables clients worldwide to leverage advanced image analysis capabilities, validated by handling 100+ concurrent API calls with minimal latency while meeting both developer needs and performance requirements.",
    customerFeedback: [
      {
        text: "This platform made it easy to add AI snapshot features to our apps. The APIs are simple and fast.",
        author: "Lead Backend Developer, Evercam",
      },
      {
        text: "Our cloud workflows now run fast enough for real-time decisions. This is a big improvement.",
        author: "Product Manager, Evercam",
      },
    ],
    
    "takeaways": [
      "Modular Design: A modular API architecture allows easy integration of new models without major refactoring.",
      "Low-Latency Performance: Achieved sub-150ms latency for critical snapshot intelligence tasks, ensuring near real-time inference.",
      "Cloud Scalability: Built the platform to scale seamlessly within cloud infrastructure.",
      "Developer-Friendly APIs: Clean, intuitive REST APIs made it easy for developers to implement advanced AI features without deep expertise."
    ]
  },
  
  
  {
    "id": 5,
    "title": "Scaling ML Data Pipelines & MLOps Lifecycle",
    "category": "AI/ML Systems, MLOps, Edge AI",
    "role": "Product Owner - APM (me)",
    "team": "1 Product Owner (APM), 5 Annotation Specialists, 2 ML Engineers, 2 DevOps Engineers",
    "duration": "6 months",
    "stack": "Apache Airflow, MLflow, Jetson, CVAT, Python, Docker",
    "deployment": "100+ Jetson Orin Nano",
    "summary": "Led the overhaul of a fragmented ML pipeline for industrial edge deployments, addressing data collection, annotation, and model lifecycle management. Resulted in a 29% boost in detection accuracy, a 3.5x increase in training data, and a 60% reduction in annotation turnaround time.",
    "roleDescription": "As the Product Owner, I orchestrated the complete redesign of the ML pipeline, coordinating cross-functional teams and driving prioritization based on data-driven decisions. I worked with ML, annotation, DevOps, and edge deployment teams to align efforts, select tools, and execute the solution.",
    "situation": [
      "The existing ML pipeline faced significant performance and scalability issues, with detection accuracy stuck at 67%.",
      "Training data was insufficient (~280k frames) and annotation processes were slow and error-prone.",
      "The system lacked observability, which created blind spots in model performance during edge deployments.",
      "Fragmented tooling and manual management were causing delays in model retraining and inefficiencies in the pipeline."
    ],
    "task": [
      "Redesign the entire ML lifecycle, focusing on improving data collection, annotation efficiency, and model performance.",
      "Build an automated and scalable pipeline to handle the increased volume of training data and faster model retraining.",
      "Introduce MLOps tools and frameworks to provide end-to-end observability and reproducibility."
    ],
    "actions": [
      {
        "heading": "Redesigned Data Collection and Annotation Pipelines",
        "details": "Scaled the dataset from 80k to 980k+ frames by automating data scraping from live edge feeds. Used model confidence thresholds to prioritize high-signal segments for annotation."
      },
      {
        "heading": "Implemented Custom Annotation Workflows",
        "details": "Developed custom workflows in CVAT to improve annotator efficiency, including pre-labeling and auto-suggest features. Introduced quality gates and a reannotation pipeline to maintain label accuracy."
      },
      {
        "heading": "Re-Architected the MLOps Pipeline with Airflow and MLflow",
        "details": "Replaced manual workflows with an automated Apache Airflow pipeline for reproducible data collection, preprocessing, training, evaluation, and deployment. Integrated MLflow for experiment tracking and version control."
      },
      {
        "heading": "Filtered Noisy Data to Improve Model Precision",
        "details": "Removed noisy classes and low-confidence embeddings from the dataset. Filtered redundant edge logs and high-bias data sources to reduce annotation debt and improve model precision."
      }
    ],
    "crossFunctionalCollaboration": [
      "Collaborated with annotation specialists to define data collection and labeling workflows and ensure high-quality annotations.",
      "Worked with ML engineers to optimize model training pipelines and integrate MLflow for tracking experiments and versioning.",
      "Partnered with DevOps to ensure the infrastructure could scale for automated pipelines and handle global edge node deployments."
    ],
    "systemThinking": {
      "table": [
        [
          "Data Collection & Annotation",
          "Manually managed and inconsistent training data (280k frames)",
          "Automated data scraping and targeted annotation of 980k+ frames, prioritizing high-confidence segments."
        ],
        [
          "Tooling Integration",
          "Fragmented tooling (CVAT, local scripts, manual management)",
          "Unified and automated pipeline with Apache Airflow for reproducibility and MLflow for versioning."
        ],
        [
          "Pipeline Automation vs. Annotation Quality",
          "Manual annotation process with high turnaround time and error-prone tasks",
          "Introduced pre-labeling and quality gates in CVAT to reduce annotation turnaround by 60% and maintain label accuracy."
        ],
        [
          "MLOps Lifecycle",
          "Manual retraining and lack of pipeline observability",
          "Automated retraining with Airflow and added observability using MLflow for model and dataset versioning."
        ]
      ],
      "image": "/assets/case-studies/br.png"
    },
  
    "productThinking": {
      "table": [
        [
          "User Needs",
          "Annotators needed efficient workflows to speed up labeling",
          "Built custom CVAT workflows with pre-labeling and auto-suggest to speed up the annotation process."
        ],
        [
          "Scalability",
          "Manual management and limited scalability",
          "Automated data scraping, annotation, and retraining pipelines to handle a 3.5x increase in training data."
        ],
        [
          "Tool Selection",
          "Manual processes and fragmented tooling",
          "Evaluated tools like Kubeflow vs. Airflow and selected Airflow for simplicity and better integration with the existing stack."
        ],
        [
          "Speed vs Accuracy",
          "Risk of compromising annotation quality for speed",
          "Balanced speed with accuracy by implementing quality gates and human oversight to ensure high-quality annotations."
        ]
      ],
      "image": ""
    },
  
    "tradeoffs": {
      "table": [
        ["Automation vs Annotation Quality", "Need to speed up annotation process", "Automated data scraping but used quality gates and pre-labeling to ensure accuracy."],
        ["MLOps Tooling", "Manual pipeline management with fragmented tools", "Chose Apache Airflow for its simplicity and integration with existing systems over more complex solutions like Kubeflow."],
        ["Scalability vs Complexity", "Pipeline bottlenecks due to data volume", "Introduced automated scraping and annotation to scale data collection while maintaining manageable complexity."]
      ]
    },
    
    "challenges": [
      {
        "challenge": "Scaling data collection and annotation",
        "mitigation": "Automated data scraping from live edge feeds and used model confidence thresholds to prioritize high-signal segments for annotation, expanding dataset from 80k to 980k+ frames."
      },
      {
        "challenge": "Reducing annotation time while maintaining quality",
        "mitigation": "Developed custom CVAT workflows with pre-labeling and auto-suggest features. Implemented quality gates and reannotation pipelines to ensure accuracy."
      },
      {
        "challenge": "Lack of MLOps lifecycle management",
        "mitigation": "Implemented Apache Airflow for pipeline automation, allowing for reproducible data collection, training, and deployment processes. Integrated MLflow for tracking experiments and models."
      }
    ],
    
    "results": {
      "table": [
        ["Detection Accuracy", "67%", "96%", "+29%"],
        ["Training Data Size", "280k frames", "980k+ frames", "↑ 3.5×"],
        ["Annotation Turnaround Time", "High", "60% faster", "↓ 60%"],
        ["Model Retraining Cycles", "Manual", "Automated", "✅"],
        ["Deployment Reach", "Limited", "1200+ edge nodes globally", "✅"]
      ]
    },
  
    "outcomes": "The overhaul of the ML pipeline led to a significant increase in model accuracy, data volume, and annotation efficiency. The new automated MLOps pipeline enabled faster retraining cycles and better model performance, with a global deployment across 1200+ edge nodes. These improvements ensured real-time performance in industrial-grade surveillance systems.",
    
    customerFeedback: [
      {
        text: "Better annotation and model accuracy have been very important for our projects. The automation helped us grow faster.",
        author: "Machine Learning Lead, Evercam",
      },
      {
        text: "Automated pipelines cut down the time to retrain models and made our system more accurate. It’s a real game-changer.",
        author: "ML Engineer, Evercam",
      },
    ],
    
    "takeaways": [
      "Scaling ML requires a holistic approach: data, tools, and processes must work in sync to drive improvements.",
      "Automation improves both speed and accuracy when paired with quality checks and human oversight.",
      "MLOps isn’t just about engineering, it’s about aligning teams and building systems that enable continuous improvement.",
      "Global deployments and edge AI can be scaled effectively with the right tooling and architecture."
    ]
  }
      
  
];
