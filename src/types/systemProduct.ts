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
  
  export interface SystemProduct {
    id: string;
    category: string;
    title: string;
    subtitle: string;
    image: string;
    duration: string;
    team: string;
    impact: string;
    tags: string[];
    overview: string;
    challenge: string;
    solution: string;
    implementation: ImplementationPhase[];
    results: Result[];
    technologies: string[];
    lessons: string[];
  }
  