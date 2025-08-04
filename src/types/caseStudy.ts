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

  // Newly added sections
  businessGoal: string;
  role: string;

  overview: string;
  challenge: string;
  solution: string;
  implementation: ImplementationPhase[];
  results: Result[];
  technologies: string[];

  // Newly added sections
  collaboration: string[];
  keyDecisions: string[];
  lessons: string[];
  quote: string;
  takeaways: string[];
}
