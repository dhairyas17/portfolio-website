export type ProductDesignCase = {
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
  designGoals: string[];
  solution: string;

  architecture: {
    description: string;
    diagram: string;
  };

  mvpApproach: string;

  techDecisions: {
    choice: string;
    reason: string;
  }[];

  implementation: {
    phase: string;
    duration: string;
    description: string;
  }[];

  results: {
    metric: string;
    improvement: string;
    description: string;
  }[];

  technologies: string[];

  lessons: string[];

  tradeOffs: {
    decision: string;
    pros: string;
    cons: string;
  }[];

  futureWork: string[];
};
