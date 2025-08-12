import { Project } from '../types/project';

export const projectData: Record<string, Project> = {

///////////////////////////////////////////////////////////////////////////////////////////////
'ota-firmware-updates': {
  id: 101,
  title: 'Automated Edge Firmware Updates with AWX',
  description:
    'Secure, scalable OTA firmware updates for 1,200+ edge devices via Ansible & AWX.',
  image:
    'https://images.pexels.com/photos/8972715/pexels-photo-8972715.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2024',
  team: '3 people',
  duration: '3 weeks',
  deployment: 'Internal Tool',
  status: 'Live',
  category: 'Edge Infrastructure & DevOps',
  tech: ['Ansible', 'AWX', 'Python', 'Shell Scripting'],
  overview:
    'As TPM, led the design and launch of an automated Over-the-Air firmware update pipeline using Ansible & AWX, enabling zero-downtime software delivery to 1,200+ geographically distributed NVIDIA Jetsons and Raspberry Pis. Reduced update cycles from hours to under 15 minutes while achieving 99.8% deployment success.',
  problem:
    'Manual firmware updates across distributed edge devices caused version drift, high downtime, and increased operational overhead.',
  solution:
    'Directed the development of a centralized OTA update system with AWX orchestration and Ansible playbooks, integrating version control, differential updates, automated rollbacks, and real-time monitoring to ensure reliability at scale.',
  features: [
    {
      name: 'Centralized OTA Deployment',
      description: 'Single AWX dashboard for scheduling, executing, and monitoring firmware rollouts in real time.',
    },
    {
      name: 'Mass Parallel Updates',
      description: 'Simultaneous updates to hundreds of devices without network overload.',
    },
    {
      name: 'Differential Update Support',
      description: 'Deploys only changed components, cutting update time and bandwidth usage by up to 70%.',
    },
    {
      name: 'Secure Package Delivery',
      description: 'Cryptographically signed packages verified before installation to block unauthorized changes.',
    },
  ],
  results: [
    {
      metric: 'Deployment Success Rate',
      improvement: '99.8%',
      description: 'Highly reliable rollouts with automated retries and rollback safeguards.',
    },
    {
      metric: 'Downtime Reduction',
      improvement: '85%',
      description: 'Minimized operational impact with zero-downtime deployment windows.',
    },
    {
      metric: 'Update Time',
      improvement: '–80%',
      description: 'Reduced update cycle from 2+ hours to under 15 minutes.',
    },
  ],
  architecture: [
    'AWX dashboard for centralized orchestration and live execution logs',
    'Ansible playbooks for structured deployment workflows and rollback',
    'Secure repository with versioned firmware artifacts',
    'SSH-based encrypted device connections',
    'Pre/post-deployment health checks with automated alerts',
  ],
  challenges: [
    {
      challenge: 'Network Interruption During Update',
      solution: 'Implemented retry/resume with rollback checkpoints to preserve stability.',
    },
    {
      challenge: 'Version Drift Across Devices',
      solution: 'Integrated strict version verification before and after updates.',
    },
    {
      challenge: 'Monitoring Failures at Scale',
      solution: 'Deployed centralized logging with AWX event-based alerts for anomalies.',
    },
    {
      challenge: 'OTA Security Risks',
      solution: 'Enforced signed firmware packages with signature verification pre-installation.',
    },
  ],
  keyTakeaways: [
    'Centralized orchestration dramatically simplifies multi-device updates at global scale.',
    'Rollback and retry mechanisms are essential for high availability in distributed systems.',
    'Differential updates can significantly cut delivery time and bandwidth costs.',
    'Strict version control ensures consistency and prevents drift.',
    'Real-time monitoring accelerates incident detection and resolution.',
  ],
  links: {
    github: 'https://github.com/dhairya/ota-ansible-awx',
    demo: 'https://ota-demo.com',
    documentation: 'https://docs.ota-demo.com',
  },
},
'edge-monitoring-platform': {
  id: 102,
  title: 'Real-Time Edge Monitoring with Prometheus',
  description:
    'Real-time monitoring & alerting for 1,200+ edge devices using Prometheus & Grafana.',
  image:
    'https://images.pexels.com/photos/7793628/pexels-photo-7793628.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '4 people',
  duration: '12 weeks',
  deployment: '1,200+ Edge Devices',
  status: 'Live',
  category: 'DevOps & Observability',
  tech: ['Prometheus', 'Grafana', 'Node Exporter', 'Python', 'Shell Scripting'],
  overview:
    'Led the development of a lightweight observability platform for edge devices in remote industrial environments. Integrated Prometheus and Grafana to monitor GPU usage, temperature, disk I/O, and uptime in real time, reducing device downtime by 90% through instant alerts and proactive maintenance.',
  problem:
    'Lack of real-time monitoring on remote edge devices caused silent failures, data loss, and prolonged outages.',
  solution:
    'Directed the implementation of Prometheus-based metric collection via Node Exporter and custom Grafana dashboards. Configured real-time alerts through Alertmanager (webhooks/email) and deployed services natively with systemd for minimal resource overhead.',
  features: [
    {
      name: 'Custom Grafana Dashboards',
      description: 'Interactive, real-time visualizations for GPU load, temperature, and uptime.',
    },
    {
      name: 'Instant Alerting',
      description: 'Threshold-based alerts for overheating, resource exhaustion, and service downtime.',
    },
    {
      name: 'Optimized Resource Usage',
      description: 'Low-overhead monitoring tuned for constrained edge hardware.',
    },
    {
      name: 'Persistent Native Services',
      description: 'Prometheus & exporters run as system services for stable background operation.',
    },
  ],
  results: [
    {
      metric: 'Downtime Reduction',
      improvement: '90%',
      description: 'Prevented critical failures via early detection and intervention.',
    },
    {
      metric: 'Maintenance Efficiency',
      improvement: '60%',
      description: 'Faster troubleshooting with detailed device-level diagnostics.',
    },
    {
      metric: 'Deployment Scale',
      improvement: '1,200+ devices',
      description: 'Operational across US, EU, and APAC regions.',
    },
  ],
  architecture: [
    'Node Exporter on each edge device for metric collection',
    'Central Prometheus server polling 1,200+ devices',
    'Grafana dashboards with organization-wide access',
    'Alertmanager for instant webhook & email notifications',
  ],
  challenges: [
    {
      challenge: 'Limited compute & memory on edge devices',
      solution: 'Optimized polling frequency and reduced retention without sacrificing visibility.',
    },
    {
      challenge: 'Firewall & NAT restrictions',
      solution: 'Implemented reverse SSH tunnels and static IP NAT routing for secure metric access.',
    },
  ],
  keyTakeaways: [
    'Low-overhead monitoring is critical for resource-constrained edge environments.',
    'Custom dashboards boost engineer efficiency and issue resolution speed.',
    'Instant alerts transform monitoring from reactive to proactive incident management.',
    'Network constraints can be overcome with smart tunneling and routing strategies.',
    'Native service deployment ensures long-term reliability without container overhead.',
  ],
  links: {
    github: 'https://github.com/dhairya/edge-monitoring-prometheus',
    demo: 'https://monitoring-demo.com',
    documentation: 'https://docs.edge-monitoring.com',
  },
},
'portfolio-website': {
  id: 107,
  title: 'Responsive Personal Portfolio with Reacte',
  description:
    'High-performance, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion.',
  image:
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: 'Solo Project',
  duration: '2 weeks',
  deployment: 'Personal Project',
  status: 'Live',
  category: 'Frontend Development, UI/UX Design, Personal Branding',
  tech: [
    'React.js',
    'Tailwind CSS',
    'Framer Motion',
    'EmailJS',
    'SEO Optimization',
  ],
  overview:
    'Designed and developed a high-performance, fully responsive portfolio website to showcase professional projects, blogs, and case studies. Achieved 90+ Lighthouse scores for performance, accessibility, and SEO, with a mobile-first layout and Framer Motion animations for an engaging user experience.',
  problem:
    'Most personal portfolios fail to combine aesthetics, functionality, and performance — leading to poor recruiter engagement and inconsistent branding.',
  solution:
    'Built a minimal yet visually engaging React + Tailwind CSS front-end with Framer Motion animations. Integrated EmailJS for secure, backend-free contact handling, and implemented SEO best practices for discoverability.',
  features: [
    {
      name: 'Responsive UI',
      description: 'Mobile-first design optimized for all screen sizes from smartphones to 4K displays.',
    },
    {
      name: 'Smooth Animations',
      description: 'Framer Motion-powered page transitions and interactive components.',
    },
    {
      name: 'Project & Blog Showcase',
      description: 'Filterable projects with case studies plus an SEO-friendly blog layout.',
    },
    {
      name: 'Instant Contact Form',
      description: 'EmailJS integration with client-side validation and spam protection.',
    }
  ],
  results: [
    {
      metric: 'Performance',
      improvement: '90+ Lighthouse Score',
      description: 'High accessibility, SEO, and load speed across devices.',
    },
    {
      metric: 'Engagement',
      improvement: '+65% session duration',
      description: 'Animations and clear navigation increased visitor retention.',
    },
    {
      metric: 'Responsiveness',
      improvement: '100%',
      description: 'Consistent UX across all devices and resolutions.',
    },
  ],
  architecture: [
    'React.js functional components for modular UI',
    'Tailwind CSS for utility-first styling',
    'Framer Motion for micro-interactions and transitions',
    'EmailJS for serverless email handling',
    'SEO enhancements via meta tags, semantic HTML, and sitemap',
  ],
  challenges: [
    {
      challenge: 'Balancing animations with performance',
      solution: 'Optimized Framer Motion usage and memoized components.',
    },
    {
      challenge: 'Ensuring mobile-first responsiveness',
      solution: 'Leveraged Tailwind breakpoints and tested across device sizes.',
    },
    {
      challenge: 'Preventing contact form spam',
      solution: 'Implemented validation and honeypot fields in EmailJS templates.',
    },
  ],
  keyTakeaways: [
    'Clean, responsive UI design improves first impressions for recruiters.',
    'Well-optimized animations can increase engagement without sacrificing performance.',
    'Backend-free contact forms simplify deployment and maintenance.',
    'SEO best practices are critical for visibility and discoverability.',
  ],
  links: {
    github: 'https://github.com/dhairya/portfolio-website',
    demo: 'https://dhairyasharma.dev',
  },
},
'yolov4-onnx-tensorrt': {
  id: 106,
  title: 'YOLOv4 Real-Time Inference on Jetson using ONNX & TensorRT',
  description:
    'High-speed, low-latency YOLOv4 object detection optimized with ONNX and TensorRT for edge deployment on Jetson Orin Nano.',
  image:
    'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2023',
  team: '3 people',
  duration: '2 weeks',
  deployment: 'Internal Tool',
  status: 'Live',
  category: 'Edge AI & Deep Learning',
  tech: [
    'YOLOv4',
    'ONNX',
    'TensorRT',
    'Darknet',
    'Jetson Orin Nano',
    'OpenCV',
    'Python',
    'Docker',
  ],
  overview:
    'Led the end-to-end optimization of a YOLOv4 object detection model for real-time edge inference. Trained on custom datasets, converted to ONNX, and deployed with TensorRT on Jetson Orin Nano, achieving sub-50ms latency for safety-critical use cases.',
  problem:
    'Standard YOLOv4 inference on Jetson devices via Darknet was too slow for real-time requirements, limiting deployment in latency-sensitive industrial and safety applications.',
  solution:
    'Developed a fully automated pipeline from training to deployment. Applied model conversion (Darknet → ONNX → TensorRT), used FP16/INT8 quantization, and integrated custom TensorRT plugins to handle unsupported layers. Packaged solution into Docker containers for reproducible deployment and OTA updates.',
  features: [
    {
      name: 'Custom YOLOv4 Training',
      description: 'Domain-specific training with augmentation and transfer learning.',
    },
    {
      name: 'ONNX Model Export',
      description: 'Converted Darknet-trained models to ONNX for cross-platform optimization.',
    },
    {
      name: 'TensorRT Acceleration',
      description: 'Applied layer fusion, quantization, and GPU hardware acceleration.',
    },
    {
      name: 'Real-Time Performance',
      description: 'Sub-50ms inference time (~20+ FPS) on Jetson Orin Nano.',
    },
    {
      name: 'Dockerized Deployment',
      description: 'NVIDIA runtime-enabled containers for easy rollout and updates.',
    },
  ],
  results: [
    {
      metric: 'Inference Latency',
      improvement: '<50ms',
      description: 'Achieved real-time inference for safety-critical deployments.',
    },
    {
      metric: 'Model Size',
      improvement: '-60%',
      description: 'TensorRT reduced size while improving speed and efficiency.',
    },
    {
      metric: 'Deployment Speed',
      improvement: '-70%',
      description: 'Automated pipeline accelerated testing and rollout cycles.',
    },
  ],
  architecture: [
    'YOLOv4 training in Darknet with labeled dataset',
    'Darknet → ONNX → TensorRT conversion pipeline',
    'OpenCV + GStreamer inference on Jetson devices',
    'Dockerized deployment with NVIDIA runtime',
  ],
  challenges: [
    {
      challenge: 'ONNX Compatibility',
      solution: 'Implemented custom TensorRT plugins for unsupported YOLO layers.',
    },
    {
      challenge: 'Edge Device Constraints',
      solution: 'Used FP16/INT8 quantization and memory-optimized inference scheduling.',
    },
  ],
  keyTakeaways: [
    'Model conversion and optimization are critical for edge AI performance.',
    'Quantization can significantly reduce inference time without major accuracy loss.',
    'Dockerized deployments simplify reproducibility and OTA updates.',
    'Automation from training to deployment accelerates iteration cycles.',
  ],
  links: {
    github: 'https://github.com/dhairya/yolov4-jetson-tensorrt',
    demo: 'https://yolov4-jetson-demo.com',
    documentation: 'https://docs.yolov4-jetson.com',
  },
},
"video-intelligence-api": {
  "id": 103,
  "title": "AI Video Analytics API Platform (Edge + Cloud)",
  "description": "Enterprise-grade, modular AI video analysis APIs with sub-350ms latency for 100+ enterprise clients.",
  "image": "https://images.pexels.com/photos/8552306/pexels-photo-8552306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "year": "2023",
  "team": "4 people",
  "duration": "12 weeks",
  "deployment": "100+ Enterprise Clients",
  "status": "Live",
  "category": "API Architecture, Video Intelligence, AI Integration",
  "tech": [
    "Python", "FastAPI", "YOLOv8", "FaceNet", "SAM (Segment Anything)", "LaMa (Inpainting)",
    "Redis", "PostgreSQL", "Docker", "Kubernetes", "RabbitMQ", "gRPC", "Prometheus + Grafana", "Swagger UI"
  ],
  "overview": "Designed and launched a modular ML API platform (YOLOv8, SAM, FaceNet, LaMa) as Dockerized microservices on AWS EKS and edge devices, achieving sub-350ms latency for 100+ concurrent users. Delivered REST APIs with JWT auth, observability, and RabbitMQ-based async processing for scalability. Currently powering Evercam's ML API.",
  "problem": "Video AI capabilities are often fragmented, require deep ML expertise, and are difficult to deploy or scale in production environments, particularly when integrating multiple model types.",
  "solution": "Developed a unified, API-first platform where each ML task is encapsulated as a standalone microservice with standardized contracts. Optimized inference pipelines through batching, Redis caching, and model-specific tuning. Integrated security (JWT, RBAC), observability (Prometheus, Grafana), and flexible deployment modes for cloud and edge environments.",
  "features": [
    { "name": "Object Detection", "description": "YOLOv8-powered detection API with sub-350ms average latency." },
    { "name": "Face Embeddings", "description": "FaceNet-based embeddings and similarity search." },
    { "name": "Object Segmentation", "description": "Meta’s SAM model for high-precision segmentation tasks." },
    { "name": "Inpainting", "description": "LaMa model to remove or replace objects in video frames." },
    { "name": "Motion Tracking", "description": "Camera pan, tilt, and zoom detection for surveillance and analytics." },
    { "name": "Secure Access", "description": "JWT-based authentication with role-based permissions." },
    { "name": "Integration Hooks", "description": "Webhook endpoints for third-party workflow automation." }
  ],
  "results": [
    { "metric": "Latency", "improvement": "~300ms avg", "description": "Optimized inference pipelines to achieve real-time responsiveness." },
    { "metric": "Scalability", "improvement": "100+ concurrent users", "description": "Load-tested API under concurrent request spikes with zero downtime." },
    { "metric": "Deployment Flexibility", "improvement": "Cloud + Edge", "description": "Successfully deployed to AWS EKS and on-prem edge devices." }
  ],
  "architecture": [
    "FastAPI backend exposing REST endpoints",
    "Dockerized ML microservices for YOLOv8, SAM, FaceNet, LaMa",
    "RabbitMQ for asynchronous job handling",
    "PostgreSQL for metadata and authentication",
    "Redis for low-latency caching and session management",
    "Kubernetes for orchestration and auto-scaling",
    "Prometheus + Grafana for metrics, alerts, and performance dashboards",
    "Swagger UI for interactive API documentation and testing"
  ],
  "challenges": [
    { "challenge": "Fragmented AI Pipelines", "solution": "Standardized into modular microservices with consistent API contracts." },
    { "challenge": "Inference Speed vs. Accuracy", "solution": "Tuned batch sizes, caching layers, and model precision for optimal trade-offs." },
    { "challenge": "Deployment at Scale", "solution": "Implemented Kubernetes auto-scaling with built-in observability and retry logic." }
  ],
  "keyTakeaways": [
    "Standardization and modularity enable faster iteration and easier integration of new models.",
    "Early investment in observability accelerates debugging and performance tuning.",
    "Balancing accuracy and performance requires careful benchmarking and architectural choices.",
    "Security and developer experience are equally important for enterprise adoption."
  ],
  "links": {
    "github": "https://github.com/dhairya/video-intelligence-api",
    "demo": "https://video-api-demo.com",
    "documentation": "https://docs.video-intelligence-api.com"
  }
},
'genai-chatbot': {
  id: 104,
  title: 'Domain-Specific GenAI Chatbot with RAG',
  description:
    'Conversational AI assistant powered by a fine-tuned LLM, enabling domain-specific question answering, task automation, and natural language interaction.',
  image:
    'https://images.pexels.com/photos/8386446/pexels-photo-8386446.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '3 people',
  status: 'Live',
  duration: '6 weeks',
  deployment: 'Personal Project',
  category: 'Generative AI & NLP',
  tech: [
    'LLM (OpenAI/GPT-Neo)',
    'LangChain',
    'Python',
    'FastAPI',
    'VectorDB (FAISS)',
    'Streamlit',
    'HuggingFace Transformers',
    'Docker',
  ],
  overview:
    'Built a conversational chatbot using generative AI to provide intelligent, context-aware answers and automate knowledge tasks in a specific business domain. The bot supports both voice and text interactions and integrates with external APIs.',
  problem:
    'Traditional chatbots rely on rule-based flows, limiting their adaptability, scalability, and contextual understanding, especially for complex domains and user questions.',
  solution:
    'Led the product strategy and implementation of an LLM-based chatbot using LangChain and custom retrieval-augmented generation (RAG). The system was fine-tuned on domain data, integrated with a Vector DB for semantic search, and exposed via a Streamlit and API interface for both internal and customer-facing use.',
  features: [
    {
      name: 'RAG Pipeline',
      description: 'Combines LLM with document retrieval from a vector database for grounded responses.',
    },
    {
      name: 'Natural Language Interface',
      description: 'Supports complex question answering and task execution via chat UI.',
    },
    {
      name: 'Multimodal Support',
      description: 'Handles both text and voice input for accessibility and ease of use.',
    },
    {
      name: 'API Integration',
      description: 'Hooks into external systems (e.g. CRM, DBs) to fetch real-time info via LangChain tools.',
    },
    {
      name: 'Interactive UI',
      description: 'Frontend built with Streamlit for rapid prototyping and internal testing.',
    },
  ],
  results: [
    {
      metric: 'Resolution Time',
      improvement: '-65%',
      description: 'Faster customer query resolution via AI-driven responses.',
    },
    {
      metric: 'Automation Coverage',
      improvement: '+80%',
      description: 'Handled a wide range of FAQs and documentation queries without human support.',
    },
    {
      metric: 'User Engagement',
      improvement: '+50%',
      description: 'More interactive and accurate compared to older rule-based chat flows.',
    },
  ],
  architecture: [
    'Frontend: Streamlit UI and REST API endpoint',
    'LLM: GPT via OpenAI or open-source HuggingFace models',
    'LangChain for orchestration and agent workflows',
    'FAISS/Chroma for vector similarity search',
    'FastAPI backend with Dockerized deployment',
  ],
  challenges: [
    {
      challenge: 'Hallucinations and Incorrect Answers',
      solution: 'Implemented RAG pipeline and prompt templating to ground responses in real documents.',
    },
    {
      challenge: 'Latency for Larger Models',
      solution: 'Used quantized models and streaming inference for faster interaction.',
    },
  ],
  keyTakeaways: [
    'Prioritizing developer experience (DX), e.g. Streamlit UI, clean APIs, accelerated internal adoption and testing.',
    'RAG + prompt engineering was key to minimizing hallucinations and grounding responses in trusted data.',
    'Early investment in modular architecture enabled seamless swaps between OpenAI and open-source LLMs.',
    'Optimizing for latency (quantization, async I/O) made real-time voice + text interaction practical.',
    'Building with integration in mind (LangChain tools, API hooks) ensured fast onboarding across business systems.',
  ],
  
  links: {
    github: 'https://github.com/dhairya/genai-chatbot',
    demo: 'https://genai-chatbot-demo.com',
    documentation: 'https://docs.genai-chatbot.com',
  },
},
'fisheye-correction-opencv': {
  id: 105,
  title: 'Fisheye Distortion Correction on Wide Angle Cameras',
  description:
  'Designed and implemented an image undistortion pipeline using OpenCV to correct fisheye distortion on wide-angle camera images. The correction improved spatial accuracy and was integrated into Evercam’s BIM alignment and 2D measuring pipelines.',
  image:
    'https://images.pexels.com/photos/5968376/pexels-photo-5968376.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2021',
  team: '2 people',
  duration: '4 weeks',
  deployment: 'internal tool',
  status: 'Live',
  category: 'Computer Vision & Image Processing',
  tech: ['OpenCV', 'Python', 'Camera Calibration', 'NumPy', 'Docker'],
  overview:
    'Computer vision module using OpenCV to correct fisheye distortion on wide-angle images, improving spatial accuracy for downstream AI tasks in construction and measurement workflows. Adopted by Evercam and deployed across enterprise client servers globally, ensuring reliable performance in diverse industrial environments.',
    
  problem:
    'Wide-angle camera lenses introduce fisheye distortion that warps image geometry, reducing the accuracy of object detection, measurement, and alignment in construction workflows.',
  solution:
    'Led the development of a fisheye correction module applying camera matrix calibration and distortion coefficients to undistort images before downstream processing. This improved the precision and efficiency of BIM alignment and measurement tasks.',
  features: [
    {
      name: 'Camera Calibration',
      description: 'Used chessboard calibration to generate lens-specific distortion maps for precise correction.',
    },
    {
      name: 'Image Undistortion',
      description: 'Processed individual wide-angle images to remove fisheye distortion and normalize spatial geometry.',
    },
    {
      name: 'BIM and Measurement Pipeline Integration',
      description: 'Seamlessly integrated the undistortion module into Evercam’s BIM alignment and 2D measuring workflows.',
    },
    {
      name: 'Modular Python Interface',
      description: 'Provided a flexible module compatible with OpenCV-based pipelines and AI pre-processing layers.',
    },
  ],
  results: [
    {
      metric: 'Measurement Accuracy',
      improvement: '+32%',
      description: 'Significant improvement in 2D measurement precision after fisheye correction.',
    },
    {
      metric: 'BIM Alignment Speed',
      improvement: '-60%',
      description: 'Reduced alignment time by normalizing distorted images prior to processing.',
    },
    {
      metric: 'Spatial Consistency',
      improvement: '+100%',
      description: 'Restored geometric linearity across image edges and corners, improving downstream AI model reliability.',
    },
  ],
  architecture: [
    'OpenCV-based camera calibration and undistortion pipeline',
    'Calibration via pre-captured chessboard images to compute distortion coefficients',
    'Image-level processing for fisheye correction before AI workflows',
    'Packaged as a Docker container for easy integration and deployment',
  ],
  challenges: [
    {
      challenge: 'Lens Variability',
      solution: 'Developed dynamic calibration tools to handle multiple fisheye lens profiles encountered in the field.',
    },
    {
      challenge: 'Balancing Accuracy and Performance',
      solution: 'Optimized undistortion routines for fast image processing with minimal latency.',
    },
  ],
  links: {
    github: 'https://github.com/dhairya/fisheye-correction-opencv',
    demo: 'https://fisheye-demo.com',
    documentation: 'https://docs.fisheye-correction.com',
  },
  keyTakeaways: [
    'Focused on undistorting images (not video) to enhance spatial accuracy in BIM alignment and 2D measuring workflows.',
    'Adopted by Evercam, the solution reduced BIM alignment time significantly and improved measurement precision.',
    'Camera calibration was made dynamic and adaptable to various fisheye lenses, ensuring field-ready robustness.',
    'Maintained low-latency processing with efficient OpenCV techniques, suitable for real-time industrial use cases.',
  ],
}
};
