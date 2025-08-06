import { SystemDesignCase } from "../types/systemDesign";

export const systemDesignCases: SystemDesignCase[] = [
  {
    id: "1",
    category: "system-design",
    title: "AI Platform Architecture",
    subtitle: "Scaling ML Infrastructure for 100+ Global Sites",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    duration: "6 months",
    team: "15 engineers",
    impact: "90% faster processing",
    tags: ["Microservices", "Kubernetes", "ML Pipeline", "Real-time Processing"],

    overview:
      "This post explores the system design behind a distributed AI platform, highlighting how we scaled real-time ML processing across 100+ global sites using microservices, Kubernetes, and event-driven infrastructure.",

    challenge:
      "The legacy monolithic system created deployment bottlenecks, lacked observability, and couldn’t scale with growing data and model complexity across global sites.",

    designGoals: [
      "Decouple components for independent scaling",
      "Enable low-latency, real-time inference",
      "Support zero-downtime model deployments",
      "Improve fault tolerance and observability",
      "Optimize for infrastructure cost efficiency",
    ],

    solution:
      "We architected a microservices-based platform leveraging Kubernetes, Kafka, and TensorFlow Serving. The design decoupled ingestion, processing, and inference; introduced stream-first communication; and supported regional scaling with monitoring baked in from day one.",

    architecture: {
      description:
        "Kafka acts as the central data backbone, decoupling data ingestion and inference. Kubernetes manages microservices with autoscaling policies. TensorFlow Serving exposes model endpoints. Redis handles stateful caching, and S3 stores model artifacts and logs.",
      diagram: "https://example.com/architecture-diagram.png",
    },

    mvpApproach:
      "The MVP focused on one high-volume site to validate real-time inference, autoscaling, and modular deployments. This helped us refine observability, deployment workflows, and cost models before scaling to 100+ sites.",

    techDecisions: [
      {
        choice: "Kubernetes",
        reason:
          "Needed dynamic orchestration and self-healing for ML workloads",
      },
      {
        choice: "Kafka",
        reason: "Best suited for high-throughput, loosely coupled pipelines",
      },
      {
        choice: "TensorFlow Serving",
        reason:
          "Standardized inference interface with GPU/CPU flexibility",
      },
      {
        choice: "Docker",
        reason: "Simplified service packaging and portability",
      },
      {
        choice: "Redis",
        reason:
          "Enabled fast caching of inference outputs and metadata",
      },
      {
        choice: "AWS",
        reason:
          "Provided regional scalability and managed services for rapid provisioning",
      },
    ],

    implementation: [
      {
        phase: "Discovery & Planning",
        duration: "4 weeks",
        description:
          "Identified bottlenecks in the monolith, documented goals, interviewed site engineers, and prioritized critical flows.",
      },
      {
        phase: "Infrastructure Setup",
        duration: "8 weeks",
        description:
          "Provisioned Kubernetes clusters, configured Kafka, implemented monitoring (Prometheus, Grafana), and CI/CD pipelines.",
      },
      {
        phase: "Core Platform Development",
        duration: "12 weeks",
        description:
          "Built modular services for data ingestion, preprocessing, inference, and feedback loops.",
      },
      {
        phase: "Migration & Testing",
        duration: "8 weeks",
        description:
          "Launched blue/green deployments, ran load tests, validated rollback strategies, and gradually onboarded sites.",
      },
    ],

    results: [
      {
        metric: "Processing Speed",
        improvement: "90% faster",
        description: "Reduced model pipeline time from 45 min to 4 min",
      },
      {
        metric: "System Uptime",
        improvement: "99.9%",
        description:
          "Achieved production-grade SLA through better fault isolation and auto-healing",
      },
      {
        metric: "Scalability",
        improvement: "10x capacity",
        description:
          "System scaled from 10 to 100+ sites with horizontal scaling and sharding",
      },
      {
        metric: "Cost Efficiency",
        improvement: "40% reduction",
        description:
          "Containerized workloads and efficient job routing lowered infra cost",
      },
    ],

    technologies: [
      "Kubernetes",
      "Kafka",
      "TensorFlow Serving",
      "Docker",
      "AWS",
      "Redis",
    ],

    lessons: [
      "Start small — one solid MVP can de-risk a large migration",
      "Design APIs and pipelines for evolution, not perfection",
      "Monitoring is not a feature — it’s part of the architecture",
      "Stream-first architecture makes scale and resilience easier",
      "Expect failure and design for rollback from the beginning",
    ],

    tradeOffs: [
      {
        decision: "Chose real-time stream processing over batch pipelines",
        pros: "Enabled low-latency inference and faster feedback loops",
        cons:
          "Higher operational complexity, harder to debug, stricter availability SLAs",
      },
      {
        decision: "Built on Kubernetes instead of managed ML platforms",
        pros: "Full control, portability, and cost savings at scale",
        cons:
          "Steep learning curve, required platform engineering investment",
      },
      {
        decision: "Used Kafka as backbone instead of HTTP or gRPC sync calls",
        pros: "Loose coupling, durability, and scalability",
        cons: "More moving parts, requires tuning and monitoring",
      },
      {
        decision:
          "Maintained custom observability stack (Prometheus/Grafana)",
        pros:
          "Flexibility in telemetry and alerts tailored to ML needs",
        cons:
          "Higher maintenance than turnkey SaaS observability tools",
      },
    ],

    futureWork: [
      "Integrate GPU-aware autoscaling to optimize inference cost",
      "Unify model deployment workflow with version control and lineage tracking",
      "Expand to active-active regional failover for zero downtime",
      "Add dynamic model selection based on context and confidence",
    ],
  },
  {
    id: "2",
    category: "system-design",
    title: "Webhook Delivery Platform",
    subtitle: "Designing a Scalable Webhook Architecture for 3rd-Party Integrations",
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
    duration: "5 months",
    team: "10 engineers",
    impact: "99.99% reliable delivery at scale",
    tags: ["Event-Driven", "Webhooks", "Queueing", "Retries", "Observability"],
  
    overview:
      "This post explores the system design behind a scalable and fault-tolerant webhook platform that reliably delivers millions of events per day to 3rd-party partners with varying SLAs, formats, and availability guarantees.",
  
    challenge:
      "The legacy synchronous model was brittle: retries caused system overload, downstream failures led to backpressure, and any partner downtime could delay internal processing pipelines.",
  
    designGoals: [
      "Guarantee at-least-once delivery with idempotency support",
      "Support partner-specific retry logic and backoff strategies",
      "Scale horizontally with traffic spikes",
      "Provide real-time observability into delivery pipelines",
      "Enable easy onboarding of new webhook destinations"
    ],
  
    solution:
      "We designed an event-driven webhook platform decoupling internal systems from external deliveries using message queues, retry schedulers, and destination-specific processors. A control plane manages onboarding, routing rules, and tenant-level configuration.",
  
    architecture: {
      description: "Events are published to Kafka and routed to a delivery queue. Workers read from the queue, apply transformation and enrichment, and attempt delivery. Failed attempts are retried using an exponential backoff strategy with dead-lettering. A separate control plane allows each destination to configure retry windows, authentication, and rate limits.",
      diagram: "https://example.com/webhook-architecture-diagram.png"
    },
  
    mvpApproach: "The MVP focused on 3 high-traffic partners with strict delivery SLAs. This allowed us to validate the retry framework, observability tooling, and schema management before general rollout.",
  
    techDecisions: [
      { choice: "Kafka", reason: "Decouples producers and consumers, handles high-throughput delivery events" },
      { choice: "PostgreSQL", reason: "Manages webhook metadata, delivery logs, and retry schedules" },
      { choice: "Redis", reason: "Used for rate-limiting and deduplication of idempotent events" },
      { choice: "Kubernetes", reason: "Autoscaling workers based on delivery lag and failures" },
      { choice: "Prometheus + Grafana", reason: "Real-time delivery metrics and alerting dashboards" },
      { choice: "OpenTelemetry", reason: "Distributed tracing across async pipelines for debugging" }
    ],
  
    implementation: [
      {
        phase: "Requirements & Partner Analysis",
        duration: "3 weeks",
        description: "Interviewed integration partners, mapped retry needs, idempotency constraints, and payload formats."
      },
      {
        phase: "Control Plane & Config Service",
        duration: "4 weeks",
        description: "Built a config-driven system for per-tenant webhook rules, rate limits, and authentication policies."
      },
      {
        phase: "Delivery Engine Development",
        duration: "8 weeks",
        description: "Implemented queue readers, retry scheduler, dead-letter queues, and delivery status APIs."
      },
      {
        phase: "Testing & Partner Onboarding",
        duration: "6 weeks",
        description: "Ran simulations, validated retries, set up dashboards, and onboarded the first 3 partners in stages."
      }
    ],
  
    results: [
      { metric: "Delivery Reliability", improvement: "99.99%", description: "Reduced failure rates through retries, circuit breakers, and dead-letter queues" },
      { metric: "Integration Time", improvement: "70% faster", description: "Self-service onboarding with per-partner config and templates" },
      { metric: "Scalability", improvement: "100x throughput", description: "System scaled to handle 10M+ daily events with autoscaled workers" },
      { metric: "Ops Load", improvement: "50% reduction", description: "Fewer on-call incidents due to observability and backpressure controls" }
    ],
  
    technologies: ["Kafka", "PostgreSQL", "Redis", "Kubernetes", "Prometheus", "Grafana", "OpenTelemetry"],
  
    lessons: [
      "Push vs. pull queue mechanics drastically impact observability and retries",
      "Partner-specific circuit breakers prevent cascading failures",
      "Treat external systems as unreliable by default — plan for retries and timeouts",
      "Make delivery metadata first-class: it enables self-service debugging",
      "Start with a minimal control plane — scale features based on partner needs"
    ],
  
    tradeOffs: [
      {
        decision: "Used Kafka for asynchronous delivery instead of direct HTTP calls",
        pros: "Improved decoupling, scalability, and fault tolerance",
        cons: "Increased complexity and operational overhead in managing Kafka clusters"
      },
      {
        decision: "Implemented custom retry logic per partner",
        pros: "Flexible SLA handling and reduced delivery failures",
        cons: "More code paths to maintain and test"
      },
      {
        decision: "Built an internal control plane instead of using a 3rd-party webhook service",
        pros: "Full customization, tenant isolation, and internal tooling integration",
        cons: "Longer development time and increased maintenance cost"
      },
      {
        decision: "Chose Kubernetes-based autoscaling over serverless workers",
        pros: "Greater control and better performance tuning",
        cons: "Requires cluster management and tuning scaling policies"
      }
    ],
  
    futureWork: [
      "Add webhook signature verification for enhanced security",
      "Support multi-region delivery failover with latency-based routing",
      "Expose delivery logs via partner-facing APIs and dashboards",
      "Introduce a visual flow builder for custom retry and enrichment logic"
    ]
  },
  {
    "id": "3",
    "category": "system-design",
    "title": "Fault-Tolerant Design Patterns for Streaming Architectures",
    "subtitle": "Building Reliable Data Pipelines with Kafka and Stateful Recovery",
    "image": "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg",
    "duration": "4 months",
    "team": "8 engineers",
    "impact": "Reduced downtime from 3 hours/month to <10 min/month",
    "tags": ["Kafka", "Streaming", "Resilience", "Event-Driven Architecture"],

    "overview": "This article breaks down the system design behind a highly fault-tolerant streaming architecture for mission-critical workloads. We cover how we introduced recovery mechanisms, replayable pipelines, and guaranteed delivery using Kafka, state stores, and circuit-breakers.",

    "challenge": "The streaming system had unpredictable failure points — brokers crashing, offset loss, and unprocessed messages during scale events — that led to inconsistent data states and prolonged recovery.",

    "designGoals": [
        "Ensure at-least-once and exactly-once processing where needed",
        "Isolate failure domains and provide self-healing capabilities",
        "Enable real-time insights while preserving data accuracy",
        "Recover gracefully from outages and restarts",
        "Minimize operational burden in monitoring and debugging"
    ],

    "solution": "We designed a layered architecture built on Kafka, stream processors with local state stores, circuit breakers, retry queues, and dead-letter topics. This allowed ingestion to continue independently while processors recovered or failed gracefully.",

    "architecture": {
        "description": "Kafka sits at the core, decoupling producers and consumers. Stateful stream processors maintain local RocksDB stores for fast recovery. Retry queues handle transient failures, and dead-letter topics isolate poison messages. Health checks and circuit breakers prevent cascading failures.",
        "diagram": "https://example.com/fault-tolerant-architecture.png"
    },

    "mvpApproach": "We began with a critical fraud-detection stream to validate failover behavior, dead-letter handling, and consumer recovery. Once this stabilized, we rolled the architecture out across other latency-sensitive flows.",

    "techDecisions": [
        { "choice": "Kafka", "reason": "Persistent logs, topic partitioning, and native offset management" },
        { "choice": "RocksDB", "reason": "Embedded state store for fault-tolerant local caching" },
        { "choice": "Debezium", "reason": "Change-data-capture from source DBs with replayable events" },
        { "choice": "Java + Kafka Streams", "reason": "Typed processing with built-in checkpointing and DSL" },
        { "choice": "Kubernetes", "reason": "Container orchestration and scaling of processing nodes" },
        { "choice": "Prometheus + Alertmanager", "reason": "Monitoring failure patterns and triggering recovery automation" }
    ],

    "implementation": [
        {
            "phase": "Discovery & Failure Analysis",
            "duration": "3 weeks",
            "description": "Mapped existing failure modes, performed chaos testing, and profiled message loss/duplication cases."
        },
        {
            "phase": "Core Resilient Components",
            "duration": "6 weeks",
            "description": "Added retry queues, DLQs, local state management, and recovery workflows. Built dashboards for failure detection."
        },
        {
            "phase": "MVP Deployment",
            "duration": "4 weeks",
            "description": "Rolled out architecture on fraud-detection stream, simulated broker failures and node restarts."
        },
        {
            "phase": "Production Rollout",
            "duration": "3 weeks",
            "description": "Extended architecture to all production flows. Trained SREs and added chaos tests to CI."
        }
    ],

    "results": [
        { "metric": "Downtime", "improvement": "Reduced to <10 minutes/month", "description": "Automatic recovery and retry logic eliminated manual interventions" },
        { "metric": "Data Accuracy", "improvement": "Near-zero loss", "description": "DLQs and retries ensured every message was accounted for" },
        { "metric": "MTTR", "improvement": "5x faster", "description": "Circuit breakers and alerting cut recovery time from hours to minutes" }
    ],

    "technologies": ["Kafka", "Kafka Streams", "RocksDB", "Debezium", "Java", "Prometheus", "Kubernetes"],

    "lessons": [
        "Faults are inevitable — recovery must be a first-class design goal",
        "Replayability and immutability unlock easier rollback and audit",
        "DLQs are not an afterthought — design them from day one",
        "Health checks need to be tied to data quality, not just uptime",
        "Testing for failure should be part of every release pipeline"
    ],

    "tradeOffs": [
        {
            "decision": "Used Kafka Streams over Flink or Spark Streaming",
            "pros": "Simpler operationally, integrates tightly with Kafka, native state store support",
            "cons": "Less flexibility in complex windowing or cross-topic joins"
        },
        {
            "decision": "Chose local RocksDB for state storage",
            "pros": "Fast recovery, lower latency, no external dependency",
            "cons": "Tight coupling to instance lifecycle, requires careful snapshotting"
        },
        {
            "decision": "Built in-house DLQ and retry logic",
            "pros": "Custom fit to our flows and alerting systems",
            "cons": "Higher implementation and maintenance burden"
        },
        {
            "decision": "Deployed on Kubernetes vs. managed stream platform",
            "pros": "Full control, reuse of infra tools",
            "cons": "Operational complexity and tuning responsibility falls on us"
        }
    ],

    "futureWork": [
        "Implement exactly-once semantics across all streams",
        "Explore tiered storage for Kafka to reduce infra cost",
        "Add data integrity checks to consumer recovery logic",
        "Visualize DLQ root causes with better dashboarding"
    ]
}
];
