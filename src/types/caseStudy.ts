export interface ImplementationPhase {
  phase: string;
  duration: string;
  description: string;
}

export interface Result {
  metric: string;
  before: string;
  after: string;
  change: string;
}

export interface KeyDecision {
  decision: string;
  reason: string;
  tradeOff: string;
}

export interface Architecture {
  before: string[];
  after: string[];
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

  businessGoal: string;
  role: string;

  overview: string;
  challenge: string;
  solution: string;
  implementation: ImplementationPhase[];
  results: Result[];
  technologies: string[];

  collaboration: string[];
  keyDecisions: KeyDecision[];
  lessons: string[];
  quote: string;
  takeaways: string[];

  // Newly added fields
  architecture: Architecture;
  customerFeedback: string[];
}
