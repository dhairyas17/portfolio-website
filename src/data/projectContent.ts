import { Project } from '../types/project';

export const projectData: Record<string, Project> = {

///////////////////////////////////////////////////////////////////////////////////////////////
'ota-firmware-updates': {
  id: 101,
  title: 'OTA Firmware Updates with AWX & Ansible',
  description:
    'Robust firmware update mechanism for edge devices using Ansible playbooks and AWX for orchestration.',
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
    'Built a secure and scalable Over-the-Air firmware update system using Ansible and AWX to automate software deployment across 1300+ edge devices include NVIDIA Jetsons and raspberry pi',
  problem:
    'Manual firmware updates on distributed edge devices led to inconsistency, increased downtime, and operational delays.',
  solution:
    'As the TPM, I led the implementation of a fully automated OTA update pipeline using AWX and Ansible. It ensured version control, retry mechanisms, and live monitoring for successful rollouts across geographically distributed devices.',
    features: [
      {
        name: 'Centralized OTA Deployment via AWX',
        description: 'Orchestrate firmware rollouts from a unified AWX dashboard with real-time execution logs and controls.',
      },
      {
        name: 'Mass Parallel Updates',
        description: 'Update hundreds of geographically distributed devices simultaneously without overloading the network.',
      },
      {
        name: 'Differential Update Support',
        description: 'Deploy only changed components instead of full firmware to reduce update time and bandwidth usage.',
      },
      {
        name: 'Secure Package Delivery',
        description: 'Firmware packages are cryptographically signed and verified before installation to prevent unauthorized changes.',
      },
    ],
    
  results: [
    {
      metric: 'Deployment Success Rate',
      improvement: '99.8%',
      description: 'Highly reliable rollouts with automated retries on failure',
    },
    {
      metric: 'Downtime',
      improvement: '-85%',
      description: 'Significant reduction in downtime during update cycles',
    },
  ],
  architecture: [
    'AWX Dashboard for centralized job scheduling, execution, and logging',
    'Ansible playbooks for orchestrating firmware deployment workflows',
    'Secure file repository for hosting and versioning firmware packages',
    'SSH-based secure connections to edge devices for remote execution',
    'Rollback mechanism integrated into playbooks for failed updates',
    'Real-time job status tracking and alerts through AWX event streams',
  ],
  
  challenges: [
    {
      challenge: 'Network Interruption During Update',
      solution: 'Built a retry/resume mechanism with rollback checkpoints',
    },
    {
      challenge: 'Version Drift',
      solution: 'Implemented strict version checks before update and post-validation',
    },
    {
      challenge: 'Monitoring Failures in Large-Scale Deployments',
      solution: 'Set up centralized logging with AWX job events and alerting for failed or delayed updates',
    },
    {
      challenge: 'Security Risks in OTA Delivery',
      solution: 'Enabled signed firmware packages and verified signatures before installation',
    },
  ],
  
  keyTakeaways: [
    'Centralized AWX orchestration simplifies managing updates across 100+ distributed devices.',
    'Automated rollback and retry mechanisms ensure update reliability despite network interruptions.',
    'Scheduled update windows minimize downtime and avoid impacting business operations.',
    'Strict version control prevents version drift and maintains consistency across deployments.',
    'Real-time monitoring and logging improve visibility and troubleshooting during rollouts.',
  ],
  
  links: {
    github: 'https://github.com/dhairya/ota-ansible-awx',
    demo: 'https://ota-demo.com',
    documentation: 'https://docs.ota-demo.com',
  },
},
'edge-monitoring-platform': {
  id: 102,
  title: 'Edge Device Monitoring with Prometheus & Grafana',
  description:
    'Monitoring and alerting system for edge deployments using Prometheus and Grafana to ensure uptime and performance visibility.',
  image:
    'https://images.pexels.com/photos/7793628/pexels-photo-7793628.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '4 people',
  duration: '12 weeks',
  deployment: '1300+ Edge Devices',
  status: 'Live',
  category: 'DevOps & Observability',
  tech: ['Prometheus', 'Grafana', 'Node Exporter', 'Python', 'Shell Scripting'],
  overview:
    'Developed a robust observability platform tailored for edge devices deployed in remote industrial environments. Integrated Prometheus and Grafana to track system health, GPU usage, temperature, and disk I/O in real time.',
  problem:
    'Remote edge devices faced silent failures due to lack of monitoring, leading to missed alerts and loss of video analytics data.',
  solution:
    'I led the implementation of a lightweight monitoring setup using Prometheus and Node Exporter to collect system metrics from edge devices. Dashboards in Grafana were customized for temperature, CPU/GPU load, and storage usage with real-time alerts configured via webhooks and email. Services were installed natively on the device using systemd for persistent background execution.',
  features: [
    {
      name: 'Custom Grafana Dashboards',
      description: 'Visualize edge metrics including GPU usage, temperature, and uptime.',
    },
    {
      name: 'Alerting Rules',
      description: 'Real-time alert triggers for system anomalies like overheating or memory leaks.',
    },
    {
      name: 'Low Resource Footprint',
      description: 'Optimized exporters and polling interval for constrained edge environments.',
    },
    {
      name: 'Service-based Deployment',
      description: 'Prometheus and exporters installed as system services for lightweight, persistent operation.',
    },
  ],
  results: [
    {
      metric: 'Deployment',
      improvement: '1300+',
      description: 'Edge devices across US, EU and APAC',
    },
    {
      metric: 'Downtime',
      improvement: '-90%',
      description: 'Critical device failures prevented through early alerting and intervention.',
    },
    {
      metric: 'Response Time',
      improvement: 'Instant',
      description: 'Alerts sent immediately upon threshold breaches.',
    },
    {
      metric: 'Maintenance Efficiency',
      improvement: '+60%',
      description: 'Engineers resolved hardware issues faster through detailed visual diagnostics.',
    },
  ],
  architecture: [
    'Node Exporter installed as a service on each edge device',
    'Prometheus server polling metrics from all devices',
    'Grafana dashboards hosted centrally with organization-wide access',
    'Alertmanager configured for webhook and email notifications',
  ],
  challenges: [
    {
      challenge: 'Limited resources on edge devices',
      solution: 'Tuned exporter polling frequency and reduced data retention to fit memory budget',
    },
    {
      challenge: 'Firewall and port access',
      solution: 'Used reverse SSH tunnels and static IP NAT routing for Prometheus access',
    },
  ],
  keyTakeaways: [
    'Lightweight monitoring tailored for resource-constrained edge devices ensures minimal performance impact.',
    'Custom Grafana dashboards provide clear, real-time visibility into critical hardware metrics.',
    'Early alerting via Prometheus and webhook/email notifications prevents costly device downtime.',
    'Overcame network challenges with reverse SSH tunnels and static NAT routing for reliable metric collection.',
    'Native system service installation ensures reliable operation without the overhead of containers.',
  ],
  links: {
    github: 'https://github.com/dhairya/edge-monitoring-prometheus',
    demo: 'https://monitoring-demo.com',
    documentation: 'https://docs.edge-monitoring.com',
  },
},
'portfolio-website': {
  id: 107,
  title: 'Interactive & Responsive Portfolio Website',
  description:
    'A visually engaging personal portfolio built with React and Tailwind CSS, featuring projects, blogs, and case studies with smooth animations, responsive design, and accessibility.',
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
    'Responsive Design Principles',
  ],
  overview:
    'Designed and developed a fully responsive personal portfolio website to showcase professional experience, projects, blogs, and contact details. The site is optimized for both performance and visual appeal, featuring smooth animations, intuitive navigation, and SEO-friendly structure.',
  problem:
    'Many online portfolios fail to balance aesthetics with functionality, often lacking consistent branding, mobile optimization, or effective content organization. This can hinder first impressions for recruiters and collaborators.',
  solution:
    'Built a minimal yet dynamic front-end using React and Tailwind CSS, enhanced with Framer Motion animations for smooth interactions. Integrated EmailJS for secure and spam-protected contact form submissions without backend dependencies.',
  features: [
    {
      name: 'Responsive UI',
      description: 'Mobile-first design that adapts seamlessly to desktops, tablets, and smartphones.',
    },
    {
      name: 'Animated Components',
      description: 'Framer Motion-powered page transitions, hover effects, and interactive elements.',
    },
    {
      name: 'Projects & Case Studies',
      description: 'Organized project showcase with filterable categories and detailed write-ups.',
    },
    {
      name: 'Blog Section',
      description: 'SEO-optimized blog layout for technical articles and thought leadership posts.',
    },
    {
      name: 'Contact Form',
      description: 'EmailJS-powered form with client-side validation and instant email delivery.',
    },
    {
      name: 'Dark Mode Support',
      description: 'Theme toggle with persisted user preference via local storage.',
    },
  ],
  results: [
    {
      metric: 'Performance',
      improvement: '90+ Lighthouse Score',
      description: 'Achieved high scores in Performance, Accessibility, and SEO audits.',
    },
    {
      metric: 'Responsiveness',
      improvement: '100%',
      description: 'Consistent UX across devices from 320px to 4K displays.',
    },
    {
      metric: 'Engagement',
      improvement: '+65% session duration',
      description: 'Smooth animations and clear navigation increased average visitor time on site.',
    },
  ],
  architecture: [
    'Frontend: React.js with functional components',
    'Styling: Tailwind CSS for utility-first styling + custom CSS modules',
    'Animations: Framer Motion for smooth transitions and micro-interactions',
    'Forms: EmailJS integration for backend-free email handling',
    'SEO: Meta tags, semantic HTML, and sitemap for discoverability',
  ],
  challenges: [
    {
      challenge: 'Balancing Animations with Performance',
      solution: 'Optimized Framer Motion usage and reduced DOM re-renders using React.memo.',
    },
    {
      challenge: 'Responsive Layout Across Devices',
      solution: 'Applied Tailwind’s responsive breakpoints and tested across multiple device sizes.',
    },
    {
      challenge: 'Spam Protection in Contact Form',
      solution: 'Added client-side validation and EmailJS templates with honeypot fields.',
    },
  ],
  keyTakeaways: [
    'Well-structured design systems (Tailwind utility classes) accelerate development and ensure visual consistency.',
    'Animations enhance engagement but require performance tuning to avoid sluggishness.',
    'A backend-free contact form (EmailJS) simplifies deployment while maintaining professionalism.',
    'Mobile-first development ensures accessibility and usability for the widest audience.',
    'Showcasing projects in a clean, filterable format improves recruiter and client navigation.',
  ],
  links: {
    github: 'https://github.com/dhairya/portfolio-website',
    demo: 'https://dhairyasharma.dev',
  },
},
'yolov4-onnx-tensorrt': {
  id: 106,
  title: 'Optimized YOLOv4 Inference on Jetson using ONNX & TensorRT',
  description:
    'End-to-end pipeline to train YOLOv4, convert to ONNX, and deploy with TensorRT on Jetson for real-time object detection.',
  image:
    'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2023',
  team: '3 people',
  duration: '2 weeks',
  deployment: 'Internal Tool',
  status: 'Live',
  category: 'Edge AI & Deep Learning',
  tech: ['YOLOv4', 'ONNX', 'TensorRT', 'Darknet', 'Jetson Orin Nano', 'OpenCV', 'Python', 'Docker'],
  overview:
    'Built a high-performance object detection system by training YOLOv4 on a custom dataset, converting it to ONNX, and optimizing with TensorRT for edge inference on Jetson Orin Nano.',
  problem:
    'Standard YOLOv4 inference using Darknet was too slow for real-time applications on Jetson devices, limiting use in low-latency safety-critical deployments.',
  solution:
    'As the TPM, I led the full optimization pipeline: trained YOLOv4 on custom data, converted models to ONNX, and deployed highly efficient TensorRT engines on Jetson devices using hardware acceleration, achieving real-time inference below 50ms/frame.',
  features: [
    {
      name: 'YOLOv4 Custom Training',
      description: 'Trained on a domain-specific dataset with augmentation and transfer learning.',
    },
    {
      name: 'ONNX Export',
      description: 'Converted trained weights from Darknet to ONNX format for hardware optimization.',
    },
    {
      name: 'TensorRT Acceleration',
      description: 'Quantized and optimized the model with TensorRT for max speed on Jetson hardware.',
    },
    {
      name: 'Real-time Inference',
      description: 'Achieved sub-50ms inference time on Jetson orin nano with minimal memory footprint.',
    },
    {
      name: 'Edge Deployment',
      description: 'Packaged the solution in Docker containers for easy deployment and OTA updates.',
    },
  ],
  results: [
    {
      metric: 'Inference Latency',
      improvement: '<50ms',
      description: 'Consistent detection at >20 FPS on Jetson orin nano.',
    },
    {
      metric: 'Model Size',
      improvement: '-60%',
      description: 'TensorRT reduced model size and boosted execution efficiency.',
    },
    {
      metric: 'Deployment Time',
      improvement: '-70%',
      description: 'Automated pipeline enabled rapid testing and rollout of updated models.',
    },
  ],
  architecture: [
    'YOLOv4 training using Darknet on annotated data',
    'Conversion pipeline: Darknet → ONNX → TensorRT engine',
    'Inference engine integrated with OpenCV + GStreamer on Jetson',
    'Deployed via Docker with NVIDIA runtime on edge devices',
  ],
  challenges: [
    {
      challenge: 'Model Compatibility',
      solution: 'Handled unsupported layers by custom plugins and verified ONNX graph integrity.',
    },
    {
      challenge: 'Memory Constraints',
      solution: 'Applied INT8/FP16 quantization and layer fusion for speed-memory trade-off.',
    },
  ],
  keyTakeaways: [
    'Optimizing the model pipeline (Darknet → ONNX → TensorRT) was essential for real-time edge deployment.',
    'Quantization (INT8/FP16) and custom TensorRT plugins balanced accuracy with ultra-low latency.',
    'Containerized deployment with Docker streamlined testing and OTA updates on Jetson devices.',
    'Addressing hardware constraints early avoided bottlenecks in memory and compute resources.',
    'Automated training-to-deployment pipeline cut rollout time by 70%, accelerating iterations.',
  ],  
  links: {
    github: 'https://github.com/dhairya/yolov4-jetson-tensorrt',
    demo: 'https://yolov4-jetson-demo.com',
    documentation: 'https://docs.yolov4-jetson.com',
  },
},
'video-intelligence-api': {
  id: 103,
  title: 'Scalable AI-Driven Video Intelligence API Platform',
  description:
    'A platform offering a suite of AI-powered video processing capabilities through unified REST APIs, including object detection, face embedding, segmentation, inpainting, and motion tracking.',
  image:
    'https://images.pexels.com/photos/8552306/pexels-photo-8552306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2023',
  team: '4 person',
  duration: '12 weeks',
  deployment: '100+ Enterprise Clients',
  status: 'Live',
  category: 'API Architecture, Video Intelligence, AI Integration',
  tech: [
    'Python',
    'FastAPI',
    'YOLOv8',
    'FaceNet',
    'SAM (Segment Anything)',
    'LaMa (Inpainting)',
    'Redis',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'RabbitMQ',
    'gRPC',
    'Prometheus + Grafana',
    'Swagger UI',
  ],
  overview:
    'Built a fully modular, scalable, and real-time platform for AI-powered video analysis tasks including object detection, segmentation, face embedding, inpainting, and motion detection, all accessible via developer-friendly REST APIs with cloud and edge deployment support.',
  problem:
    'Existing AI pipelines for video processing are often fragmented, non-scalable, and lack intuitive developer APIs. These solutions typically require deep ML knowledge and are difficult to deploy in production, especially at scale or in edge environments.',
  solution:
    'Designed and implemented a robust API-first platform that modularizes each video intelligence task as a separate microservice. The system supports real-time inference, asynchronous jobs, and JWT-secured endpoints with observability baked in. Optimized for both developer experience and production readiness.',
  features: [
    {
      name: '/detect',
      description: 'Performs object detection on video frames using YOLOv8.',
    },
    {
      name: '/facenet',
      description: 'Generates face embeddings and supports similarity matching with FaceNet.',
    },
    {
      name: '/segment',
      description: 'Segments objects using Meta’s Segment Anything Model (SAM).',
    },
    {
      name: '/inpaint',
      description: 'Removes unwanted objects or fills occlusions using LaMa inpainting model.',
    },
    {
      name: '/motion',
      description: 'Detects camera movement such as pan, tilt, and zoom.',
    },
    {
      name: '/auth',
      description: 'JWT-based authentication and role-based access control.',
    },
    {
      name: '/integrations',
      description: 'Webhooks for third-party integrations.',
    },
  ],
  results: [
    {
      metric: 'Latency',
      improvement: '300ms avg',
      description: 'Achieved sub-350ms latency on /detect and /motion endpoints.',
    },
    {
      metric: 'Scalability',
      improvement: '100+ concurrent users',
      description: 'Tested API scaling with concurrent requests using Uvicorn + Gunicorn.',
    },
    {
      metric: 'Deployment Flexibility',
      improvement: 'Cloud + Edge',
      description: 'Successfully deployed both on AWS EKS and local edge machines via Docker Compose.',
    },
  ],
  architecture: [
    'Frontend: Swagger UI for interactive API documentation and testing',
    'Backend: FastAPI with RESTful endpoints',
    'Model Services: Dockerized ML microservices (YOLOv8, SAM, FaceNet, LaMa)',
    'Message Queue: RabbitMQ for async video processing jobs',
    'Database: PostgreSQL (auth, metadata), Redis (caching, sessions)',
    'Containerization: Docker for local + cloud portability',
    'Orchestration: Kubernetes for production deployments',
    'Monitoring: Prometheus + Grafana dashboard for latency, throughput, and job health',
  ],
  challenges: [
    {
      challenge: 'Fragmented AI Pipelines',
      solution: 'Standardized ML tasks into unified, modular microservices with shared API contracts.',
    },
    {
      challenge: 'Inference Speed vs. Accuracy',
      solution: 'Optimized model selection and batching strategies, added Redis caching layer.',
    },
    {
      challenge: 'Scalable Deployment & Observability',
      solution: 'Used Docker + K8s with Prometheus, Grafana, and retry/resilience logic at the gateway level.',
    },
  ],
  keyTakeaways: [
    'Prioritizing developer experience (DX), e.g. Swagger UI, unified API contracts, greatly accelerates adoption.',
    'Investing early in observability pays off, it helped identify latency spikes and optimize throughput under load.',
    'Designing for extensibility from day one made it easy to add new AI models and support edge deployments.',
    'Balancing model accuracy with performance is critical, tuning batch sizes and Redis caching improved real-time use cases.',
    'Security and integration support (JWT, webhooks) are not afterthoughts, they are core to enterprise-readiness.',
  ],
  links: {
    github: 'https://github.com/dhairya/video-intelligence-api',
    demo: 'https://video-api-demo.com',
    documentation: 'https://docs.video-intelligence-api.com',
  },
},
'genai-chatbot': {
  id: 104,
  title: 'AI Chatbot using GenAI & LLMs',
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
