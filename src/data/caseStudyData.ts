// caseStudyData.ts
export interface TableData {
    table: string[][];
    context?: string;
  }
  
  export interface Action {
    heading: string;
    details: string;
  }
  
  export interface CaseStudy {
    title: string;
    category: string;
    role: string;
    team: string;
    duration: string;
    stack: string;
    deployment: string;
    situation: string;
    task: string;
    actions: Action[];
    systemThinking: TableData;
    productThinking: TableData;
    tradeoffs: TableData;
    results: TableData;
    takeaways: string[];
  }
  
  export const caseStudy: CaseStudy[] = [
    {
      title: "Case Study: Redesigning Evercam’s Gate Report",
      category: "Product Design, System Design, Edge AI",
      role: "TPM (Product + Program Leadership)",
      team: "6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 QA",
      duration: "6 months",
      stack: "Jetson, YOLOv5, RabbitMQ, PostgreSQL, Ansible, RTSP, REST APIs",
      deployment: "100+ Construction Sites",
      situation: `Evercam’s Gate Report monitored vehicle traffic at enterprise and construction site gates. It relied on full video uploads to the cloud for inference and processing. As deployments grew, customers faced:
  
  7–8 hour delays in event availability
  
  Massive bandwidth usage (3TB+/site/month)
  
  Low reliability on poor networks
  
  Poor UX with raw detections and no offline support
  
  This led to low adoption and a 7% NPS. The product was over-engineered, hard to sell, and failing in the field.`,
      task: `As TPM, I led a full product and system redesign to:
  
  - Eliminate latency and bandwidth issues
  
  - Increase event reliability and offline support
  
  - Simplify architecture to reduce cost and operational overhead
  
  - Make UI actionable for non-technical site managers
  
  - Drive adoption, improve satisfaction, and increase revenue`,
      actions: [
        {
          heading: "Led System Architecture Redesign to Edge-First",
          details: `Shifted from cloud uploads to on-device YOLOv5 inference on Jetson, slashing event latency from hours to seconds.
  Implemented RabbitMQ for offline buffering and auto-resync, ensuring reliable near-real-time delivery.
  Reduced bandwidth by 94% by replacing video uploads with lightweight metadata events.`,
        },
        {
          heading: "Streamlined AI Stack for Efficiency",
          details: `Removed costly FaceNet re-identification, focusing solely on vehicle detection and direction — the core user need.`,
        },
        {
          heading: "Implemented Scalable OTA Update Pipeline",
          details: `Built Ansible + AWX OTA system, empowering DevOps and CS teams to deploy updates safely and autonomously, reducing engineering overhead.`,
        },
        {
          heading: "Revamped UX for Actionability",
          details: `Rebuilt dashboard with filtered, event-centric views and real-time sync health indicators, empowering non-technical users.`,
        },
        {
          heading: "Established Weekly Customer Feedback Loops",
          details: `Ran continuous feedback with CS and users, iterating rapidly to align features with real-world pain points and boost adoption.`,
        },
      ],
      systemThinking: {
        table: [
          [
            "Hardware Constraints",
            "On-device Jetson YOLOv5 inference",
            "Near real-time detection, low latency on limited compute",
          ],
          [
            "Network Variability",
            "RabbitMQ event queue for buffering",
            "Reliable event syncing, offline operation, zero data loss",
          ],
          [
            "User Context",
            "Designed for harsh site environments",
            "Robust, fault-tolerant system resilient to real-world disruptions",
          ],
          [
            "Cross-team Input",
            "Coordinated engineering, AI, DevOps, CS",
            "Aligned priorities, scalable and maintainable architecture",
          ],
        ],
        context: `Balanced Jetson’s compute limits with unstable network conditions on sites. RabbitMQ decoupled event processing from connectivity, enabling offline buffering and sync recovery. Cross-team collaboration ensured operationally robust, scalable architecture for 100+ sites.`,
      },
      productThinking: {
        table: [
          ["User Needs", "Focused on core vehicle detection and direction insights", "Jobs-to-be-Done (JTBD)"],
          ["UX Design", "Built intuitive, actionable dashboard with clear sync status", "Design Thinking, Usability Testing"],
          ["Feedback Loop", "Weekly customer engagement and iterative improvements", "Agile Development, Lean Startup Principles"],
          ["Outcome Focus", "Prioritized adoption, NPS, revenue growth", "OKRs, Impact Mapping"],
        ],
        context: `Using JTBD, we honed in on vehicle detection and direction—exactly what site managers needed. Design Thinking guided the UX for trust and ease of use. Weekly Agile feedback loops ensured continuous alignment with user pain points, driving adoption and satisfaction.`,
      },
      tradeoffs: {
        table: [
          ["AI Complexity vs Reliability", "Removed FaceNet re-identification", "Lower compute, higher system stability"],
          ["Feature Scope vs Performance", "Limited to vehicle detection and direction", "Faster inference, bandwidth savings"],
          ["Edge Complexity vs Network Dependency", "Full edge inference with offline sync", "Eliminated multi-hour delays and failures"],
          ["Scalability vs Customization", "Standardized OTA update pipeline", "Autonomous, large-scale field management"],
        ],
        context: `Accepted narrower AI scope and added device complexity to boost responsiveness and reliability. Dropped costly classifiers to save resources and uptime. Edge-first design removed critical network bottlenecks. OTA pipeline empowered DevOps and CS for rapid scaling.`,
      },
      results: {
        table: [
          ["NPS", "7%", "78%", "+71 pts"],
          ["MRR", "1×", "4.5×", "+450%"],
          ["Latency", "7–8 hours", "<5 seconds", "↓ 99.98%"],
          ["Data Usage/Site", "3TB+/month", "<200GB/month", "↓ 94%"],
          ["Event Reliability", "70%", "99.3%", "+29%"],
        ],
        context: `“Before this, we had to wait and guess. Now we get the data in real time. It's exactly what we needed.” – Skanska Site Manager
  “This is a product we can sell and scale.” – Head of Sales, Evercam`,
      },
      takeaways: [
        "Customer-First, Not AI-First: Focused on delivering reliable, usable event data over novel but unnecessary ML features.",
        "Edge AI at Scale: On-device inference with offline support unlocked massive latency and cost improvements.",
        "Cross-Functional Execution: Weekly iteration with CS, DevOps, Design, and AI ensured product-market fit and roadmap alignment.",
        "Impact-Driven Decisions: Delivered a system that’s not only fast but also scalable, usable, and commercially viable.",
      ],
    },
  ];
  