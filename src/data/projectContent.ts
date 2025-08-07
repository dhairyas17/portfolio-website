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
  year: '2025',
  team: '3 people',
  status: 'Live',
  category: 'Edge Infrastructure & DevOps',
  tech: ['Ansible', 'AWX', 'Python', 'Shell Scripting', 'Jetson'],
  overview:
    'Built a secure and scalable Over-the-Air firmware update system using Ansible and AWX to automate software deployment across 100+ Jetson-based edge devices.',
  problem:
    'Manual firmware updates on distributed edge devices led to inconsistency, increased downtime, and operational delays.',
  solution:
    'As the TPM, I led the implementation of a fully automated OTA update pipeline using AWX and Ansible. It ensured version control, retry mechanisms, and live monitoring for successful rollouts across geographically distributed devices.',
  features: [
    {
      name: 'OTA Deployment via AWX',
      description: 'Trigger and manage Ansible playbooks from a central AWX interface.',
    },
    {
      name: 'Rollback Mechanism',
      description: 'Version-controlled deployments with rollback support on failure.',
    },
    {
      name: 'Scheduled Updates',
      description: 'Supports window-based scheduling to avoid downtime during work hours.',
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
    'AWX Dashboard for job control and logs',
    'Ansible playbooks for update orchestration',
    'Jetson edge devices with version-agent installed',
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
    'Monitoring and alerting system for Jetson-based edge deployments using Prometheus and Grafana to ensure uptime and performance visibility.',
  image:
    'https://images.pexels.com/photos/7793628/pexels-photo-7793628.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '2 people',
  status: 'Live',
  category: 'DevOps & Observability',
  tech: ['Prometheus', 'Grafana', 'Node Exporter', 'Jetson', 'Python', 'Docker'],
  overview:
    'Developed a robust observability platform tailored for edge devices deployed in remote industrial environments. Integrated Prometheus and Grafana to track system health, GPU usage, temperature, and disk I/O in real time.',
  problem:
    'Remote edge devices faced silent failures due to lack of monitoring, leading to missed alerts and loss of video analytics data.',
  solution:
    'I implemented a lightweight monitoring setup using Prometheus and Node Exporter to collect system metrics from Jetson devices. Dashboards in Grafana were customized for temperature, CPU/GPU load, and storage usage with real-time alerts configured via webhooks and email.',
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
      name: 'Deployment via Docker',
      description: 'Prometheus and exporters containerized for easy rollouts and updates.',
    },
  ],
  results: [
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
    'Node Exporter installed on each Jetson device',
    'Prometheus server polling metrics from all devices',
    'Grafana dashboards hosted centrally with organization-wide access',
    'Alertmanager configured for webhook and email notifications',
  ],
  challenges: [
    {
      challenge: 'Limited resources on Jetson devices',
      solution: 'Tuned exporter polling frequency and reduced data retention to fit memory budget',
    },
    {
      challenge: 'Firewall and port access',
      solution: 'Used reverse SSH tunnels and static IP NAT routing for Prometheus access',
    },
  ],
  links: {
    github: 'https://github.com/dhairya/edge-monitoring-prometheus',
    demo: 'https://monitoring-demo.com',
    documentation: 'https://docs.edge-monitoring.com',
  },
},
'fisheye-correction-opencv': {
  id: 103,
  title: 'Fisheye Distortion Correction on Wide Angle Cameras',
  description:
    'Computer vision module using OpenCV to correct fisheye distortion on wide-angle camera feeds, improving spatial accuracy for downstream AI tasks.',
  image:
    'https://images.pexels.com/photos/5968376/pexels-photo-5968376.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '2 people',
  status: 'Live',
  category: 'Computer Vision & Image Processing',
  tech: ['OpenCV', 'Python', 'Camera Calibration', 'NumPy', 'Docker'],
  overview:
    'Designed and implemented a vision pipeline using OpenCV to undistort fisheye camera feeds in real-time. This correction enables more accurate object detection and tracking on surveillance and robotics platforms.',
  problem:
    'Wide-angle cameras introduce fisheye distortion that warps perception, making it hard to accurately detect object size, shape, and distance—affecting AI model performance.',
  solution:
    'Led the development of a fisheye correction module that applies camera matrix calibration and distortion coefficients to normalize incoming frames before passing them to detection models. Integrated with edge AI pipelines for real-time performance.',
  features: [
    {
      name: 'Camera Calibration',
      description: 'Uses chessboard-based calibration to generate distortion maps for specific lenses.',
    },
    {
      name: 'Real-time Undistortion',
      description: 'Processes live RTSP video feeds or device input and corrects fisheye distortion in real time.',
    },
    {
      name: 'Edge Compatibility',
      description: 'Optimized for Jetson devices and Raspberry Pi with hardware-accelerated decoding.',
    },
    {
      name: 'Flexible Integration',
      description: 'Modular Python interface compatible with OpenCV pipelines or ML pre-processing layers.',
    },
  ],
  results: [
    {
      metric: 'Object Detection Accuracy',
      improvement: '+22%',
      description: 'Significant boost in precision after correcting warped image inputs.',
    },
    {
      metric: 'Spatial Consistency',
      improvement: '+100%',
      description: 'Linearity restored in frame edges and corners, improving reliability of spatial models.',
    },
    {
      metric: 'Processing Latency',
      improvement: '<50ms',
      description: 'Real-time frame correction with negligible added delay.',
    },
  ],
  architecture: [
    'OpenCV-based calibration and undistortion pipeline',
    'Calibration stage using pre-captured chessboard images',
    'Live video capture and processing using RTSP or CSI camera interfaces',
    'Optimized pipeline containerized with Docker for deployment on edge devices',
  ],
  challenges: [
    {
      challenge: 'Non-standard Camera Lenses',
      solution: 'Built dynamic calibration tool to adapt to various lens profiles in the field.',
    },
    {
      challenge: 'Performance on Low-power Devices',
      solution: 'Used region of interest (ROI) optimization and multi-threaded capture buffers.',
    },
  ],
  links: {
    github: 'https://github.com/dhairya/fisheye-correction-opencv',
    demo: 'https://fisheye-demo.com',
    documentation: 'https://docs.fisheye-correction.com',
  },
},
'yolov4-onnx-tensorrt': {
  id: 104,
  title: 'Optimized YOLOv4 Inference on Jetson using ONNX & TensorRT',
  description:
    'End-to-end pipeline to train YOLOv4, convert to ONNX, and deploy with TensorRT on Jetson for real-time object detection.',
  image:
    'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '3 people',
  status: 'Live',
  category: 'Edge AI & Deep Learning',
  tech: ['YOLOv4', 'ONNX', 'TensorRT', 'Darknet', 'Jetson Xavier', 'OpenCV', 'Python', 'Docker'],
  overview:
    'Built a high-performance object detection system by training YOLOv4 on a custom dataset, converting it to ONNX, and optimizing with TensorRT for edge inference on Jetson Xavier and Nano.',
  problem:
    'Standard YOLOv4 inference using Darknet was too slow for real-time applications on Jetson edge devices, limiting use in low-latency safety-critical deployments.',
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
      description: 'Achieved sub-50ms inference time on Jetson Xavier with minimal memory footprint.',
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
      description: 'Consistent detection at >20 FPS on Jetson Xavier NX.',
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
  links: {
    github: 'https://github.com/dhairya/yolov4-jetson-tensorrt',
    demo: 'https://yolov4-jetson-demo.com',
    documentation: 'https://docs.yolov4-jetson.com',
  },
},
'genai-chatbot': {
  id: 105,
  title: 'AI Chatbot using GenAI & LLMs',
  description:
    'Conversational AI assistant powered by a fine-tuned LLM, enabling domain-specific question answering, task automation, and natural language interaction.',
  image:
    'https://images.pexels.com/photos/8386446/pexels-photo-8386446.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '2 people',
  status: 'Live',
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
    'Traditional chatbots rely on rule-based flows, limiting their adaptability, scalability, and contextual understanding—especially for complex domains and user questions.',
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
  links: {
    github: 'https://github.com/dhairya/genai-chatbot',
    demo: 'https://genai-chatbot-demo.com',
    documentation: 'https://docs.genai-chatbot.com',
  },
},
'video-intelligence-api': {
  id: 106,
  title: 'Scalable AI-Driven Video Intelligence API Platform',
  description:
    'A self-initiated platform offering a suite of AI-powered video processing capabilities through unified REST APIs — including object detection, face embedding, segmentation, inpainting, and motion tracking.',
  image:
    'https://images.pexels.com/photos/8552306/pexels-photo-8552306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  year: '2025',
  team: '1 person',
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
    'Built a fully modular, scalable, and real-time platform for AI-powered video analysis tasks including object detection, segmentation, face embedding, inpainting, and motion detection — all accessible via developer-friendly REST APIs with cloud and edge deployment support.',
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
      description: 'Webhooks for third-party integrations (e.g., Slack, Telegram).',
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
  links: {
    github: 'https://github.com/dhairya/video-intelligence-api',
    demo: 'https://video-api-demo.com',
    documentation: 'https://docs.video-intelligence-api.com',
  },
},

};
