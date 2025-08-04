export interface Feature {
    name: string;
    description: string;
  }
  
  export interface Result {
    metric: string;
    improvement: string;
    description: string;
  }
  
  export interface Challenge {
    challenge: string;
    solution: string;
  }
  
  export interface ProjectLinks {
    github?: string;
    demo?: string;
    documentation?: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    year: string;
    team: string;
    status: string;
    category: string;
    tech: string[];
    overview: string;
    problem: string;
    solution: string;
    features: Feature[];
    results: Result[];
    architecture: string[];
    challenges: Challenge[];
    links: ProjectLinks;
  }
  