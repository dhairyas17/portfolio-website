import { Project } from '../types/project';

export const projectData: Record<string, Project> = {
    'ai-recommendation': {
        id: 101,
        title: 'AI Recommendation Engine',
        description:
          'Machine learning platform providing personalized recommendations for e-commerce, increasing conversion rates by 35%.',
        image:
          'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        year: '2024',
        team: '8 people',
        status: 'Live',
        category: 'AI & Machine Learning',
        tech: [
          'Python',
          'TensorFlow',
          'FastAPI',
          'PostgreSQL',
          'Docker',
          'Kubernetes',
          'Redis',
          'Apache Kafka',
        ],
        overview:
          'This AI-powered recommendation engine helps e-commerce businesses improve product discoverability, engagement, and conversion by delivering personalized recommendations in real time. The system uses hybrid algorithms deployed on a scalable, low-latency architecture designed for modern commerce needs.',
        problem:
          'Traditional e-commerce platforms suffer from generic browsing experiences, leading to poor user engagement and low conversion rates. Without personalization, customers often abandon sessions without discovering relevant products.',
        solution:
          'As the Technical Product Manager, I defined the roadmap, prioritized features aligned with business goals, and coordinated with data scientists, backend engineers, and DevOps to build a real-time recommendation engine. The system blends collaborative filtering, content-based techniques, and deep learning, while also enabling continuous optimization through A/B testing and analytics.',
        features: [
          {
            name: 'Real-time Personalization',
            description: 'Instant adaptation to user behavior with sub-100ms response times',
          },
          {
            name: 'Multi-Algorithm Approach',
            description:
              'Hybrid system combining collaborative filtering, content-based, and deep learning models',
          },
          {
            name: 'A/B Testing Framework',
            description: 'Built-in experimentation platform for testing different recommendation strategies',
          },
          {
            name: 'Scalable Architecture',
            description: 'Microservices-based design handling millions of recommendations daily',
          },
          {
            name: 'Analytics Dashboard',
            description: 'Comprehensive monitoring and performance tracking for business stakeholders',
          },
          {
            name: 'API-First Design',
            description: 'RESTful APIs enabling easy integration with existing e-commerce platforms',
          },
        ],
        results: [
          {
            metric: 'Conversion Rate',
            improvement: '+35%',
            description: 'Increased from 2.1% to 2.8% average conversion rate',
          },
          {
            metric: 'User Engagement',
            improvement: '+45%',
            description: 'Users spend 45% more time browsing recommended products',
          },
          {
            metric: 'Revenue Impact',
            improvement: '+$2.3M',
            description: 'Additional annual revenue attributed to improved recommendations',
          },
          {
            metric: 'Click-through Rate',
            improvement: '+28%',
            description: 'More users clicking on recommended products',
          },
        ],
        architecture: [
          'Data ingestion pipeline using Apache Kafka for real-time user events',
          'Feature engineering and model training pipeline using Apache Airflow',
          'Model serving infrastructure with TensorFlow Serving and FastAPI',
          'Caching layer with Redis for sub-100ms response times',
          'Monitoring and alerting with Prometheus and Grafana',
        ],
        challenges: [
          {
            challenge: 'Cold Start Problem',
            solution:
              'Implemented content-based recommendations for new users and popularity-based fallbacks',
          },
          {
            challenge: 'Real-time Processing',
            solution:
              'Built streaming architecture with Kafka and maintained pre-computed recommendations',
          },
          {
            challenge: 'Scalability',
            solution: 'Designed microservices architecture with auto-scaling capabilities on Kubernetes',
          },
        ],
        links: {
          github: 'https://github.com/dhairya/ai-recommendation',
          demo: 'https://recommendation-demo.com',
          documentation: 'https://docs-recommendation.com',
        },
      },
      
      'video-surveillance-platform': {
        id: 102,
        title: 'Edge-Based Video Surveillance Platform',
        description:
          'Real-time object detection and activity monitoring system deployed at the edge to improve public safety and reduce bandwidth costs.',
        image:
          'https://images.pexels.com/photos/9015600/pexels-photo-9015600.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        year: '2023',
        team: '6 people',
        status: 'Live',
        category: 'Computer Vision & Edge AI',
        tech: [
          'NVIDIA Jetson',
          'YOLOv5',
          'OpenCV',
          'GStreamer',
          'MQTT',
          'Python',
          'Docker',
          'Node-RED',
        ],
        overview:
          'A lightweight, AI-powered video surveillance platform designed to run on edge devices like NVIDIA Jetson. Enables real-time object detection and smart alerting in smart cities and industrial sites, reducing cloud dependency, latency, and bandwidth usage.',
        problem:
          'Traditional cloud-based CCTV systems are resource-intensive, suffer from transmission latency, and raise concerns around privacy. This makes them inefficient for critical, real-time surveillance scenarios such as fire detection, perimeter breaches, and industrial safety monitoring.',
        solution:
          'As the TPM, I led the end-to-end development of an edge-first surveillance platform using Jetson devices. I coordinated between AI engineers and infrastructure teams to deliver a low-latency video analytics solution that processes video on-device using YOLOv5 and streams only event metadata. The product focused on cost-efficiency, privacy, and field reliability in low-connectivity environments.',
        features: [
          {
            name: 'On-Device Inference',
            description: 'Runs YOLOv5 models directly on Jetson devices for low-latency detection',
          },
          {
            name: 'Bandwidth Optimization',
            description: 'Streams only relevant events, reducing bandwidth usage by over 70%',
          },
          {
            name: 'Modular Dashboard',
            description: 'Real-time visualization with filtering, tagging, and export options',
          },
          {
            name: 'Privacy Preserving',
            description: 'No raw video data is transmitted, only metadata',
          },
          {
            name: 'Offline Mode',
            description: 'Continues detection even during internet outages',
          },
          {
            name: 'Integrations',
            description: 'Supports MQTT, REST API, and cloud sync options',
          },
        ],
        results: [
          {
            metric: 'Bandwidth Savings',
            improvement: '-72%',
            description: 'Reduced cloud streaming load by using edge filtering',
          },
          {
            metric: 'Alert Accuracy',
            improvement: '+89%',
            description: 'More accurate and contextual alerts due to on-device processing',
          },
          {
            metric: 'Operational Cost',
            improvement: '-$150K',
            description: 'Annual savings by reducing cloud dependency',
          },
          {
            metric: 'Response Time',
            improvement: '<1s',
            description: 'Instant alerts for critical events like intrusions or fire',
          },
        ],
        architecture: [
          'Jetson devices with CUDA-accelerated YOLOv5 models',
          'RTSP stream decoding via GStreamer + OpenCV',
          'MQTT messaging for lightweight event transfer',
          'Node-RED based dashboard and alerting system',
          'Dockerized edge agents for easy deployment and updates',
        ],
        challenges: [
          {
            challenge: 'Resource Constraints',
            solution: 'Model quantization and TensorRT optimization to fit device memory',
          },
          {
            challenge: 'Network Reliability',
            solution: 'Local buffering and retries with failover mechanisms',
          },
          {
            challenge: 'Device Management',
            solution: 'Built remote monitoring and update module using lightweight daemon',
          },
        ],
        links: {
          github: 'https://github.com/dhairya/edge-surveillance',
          demo: 'https://edge-surveillance-demo.com',
          documentation: 'https://docs.edge-surveillance.com',
        },
      },
      
      'finance-dashboard-platform': {
        id: 103,
        title: 'AI-Powered Financial Analytics Dashboard',
        description:
          'Interactive analytics suite for investors and portfolio managers using machine learning to forecast trends and automate reports.',
        image:
          'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        year: '2022',
        team: '4 people',
        status: 'In Progress',
        category: 'Fintech & Data Visualization',
        tech: [
          'React',
          'TypeScript',
          'D3.js',
          'Python',
          'scikit-learn',
          'Flask',
          'PostgreSQL',
          'AWS Lambda',
        ],
        overview:
          'This financial dashboard is built for portfolio managers and analysts to view real-time market trends, get AI-powered forecasts, and automate reporting tasks. It blends intuitive design with predictive analytics to streamline decision-making in asset management.',
        problem:
          'Most legacy financial tools are fragmented, slow to update, and offer limited automation, leading to wasted analyst hours and missed market insights. Analysts rely on manual report generation and inconsistent forecasting techniques.',
        solution:
          'I led the development of a real-time dashboard that aggregates live financial data from broker APIs, applies ML-based forecasting models, and visualizes insights through dynamic D3.js charts. Serverless architecture enables hands-free reporting, while the platform supports role-based access and alerts for decision-critical events.',
        features: [
          {
            name: 'AI Forecast Models',
            description: 'Supports linear regression, ARIMA, and LSTM-based time series forecasting',
          },
          {
            name: 'Real-time Market Feeds',
            description: 'Live updates from multiple financial data APIs',
          },
          {
            name: 'Custom Portfolio Alerts',
            description: 'Set thresholds and get notified on significant movements',
          },
          {
            name: 'Responsive Visualizations',
            description: 'Interactive D3 charts and graphs with export options',
          },
          {
            name: 'Serverless Reports',
            description: 'Automated reports using AWS Lambda and scheduled triggers',
          },
          {
            name: 'Role-Based Access',
            description: 'Secure login with admin and analyst views',
          },
        ],
        results: [
          {
            metric: 'Time Saved',
            improvement: '-60%',
            description: 'Reduced time spent on report generation and manual analysis',
          },
          {
            metric: 'Forecast Accuracy',
            improvement: '+18%',
            description: 'Better predictions using hybrid ML models',
          },
          {
            metric: 'Client Satisfaction',
            improvement: '+40%',
            description: 'Clients praised the UI/UX and automation of insights',
          },
          {
            metric: 'Engagement Rate',
            improvement: '+30%',
            description: 'Increased analyst usage due to intuitive design and alerts',
          },
        ],
        architecture: [
          'Frontend in React + D3.js for interactive charts',
          'Python backend with Flask for API services',
          'ML models trained on historical price data using scikit-learn and LSTM',
          'Scheduled reports via AWS Lambda + S3',
          'PostgreSQL database for user and portfolio data',
        ],
        challenges: [
          {
            challenge: 'Data Volatility',
            solution: 'Smoothing techniques and anomaly detection for cleaner insights',
          },
          {
            challenge: 'Model Drift',
            solution: 'Built retraining scheduler and alerts for declining accuracy',
          },
          {
            challenge: 'User Access Control',
            solution: 'Integrated JWT-based auth with role-based UI rendering',
          },
        ],
        links: {
          github: 'https://github.com/dhairya/ai-finance-dashboard',
          demo: 'https://finance-analytics-demo.com',
          documentation: 'https://docs.finance-analytics.com',
        },
      },
      
};
