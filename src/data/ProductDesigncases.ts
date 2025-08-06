import { ProductDesignCase } from "../types/productDesign";

export const productDesignCases: ProductDesignCase[] = [
{
  id: '4',
  category: 'product-design',
  title: 'Driving Product-Led Growth through Self-Serve Onboarding',
  subtitle: 'Reducing Drop-Offs and Activating Users without Sales Involvement',
  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  duration: '6 weeks',
  team: '2 PMs, 1 designer, 3 engineers, 1 data analyst',
  impact: '40% increase in Day-1 activation rate, 18% uplift in free-to-paid conversion',
  tags: ['PLG', 'User Onboarding', 'Self-Serve', 'Activation', 'Funnel Optimization'],

  overview: 'This initiative focused on designing a frictionless self-serve onboarding flow that allowed users to experience product value without requiring sales or support. We introduced contextual guidance, setup automation, and usage nudges to drive early value realization and boost activation.',
  
  challenge: 'Free trial users were struggling to get value without assistance. Only 22% completed the initial setup, and less than 10% engaged with core features in the first 3 days. The existing onboarding flow was generic, linear, and lacked personalization or in-app guidance. This stalled growth in self-serve signups and increased burden on the sales team.',

  designGoals: [
    'Reduce friction in initial user journey',
    'Guide users to first “aha” moment within 5 minutes',
    'Enable full account setup without human involvement',
    'Personalize onboarding based on user type or goal',
    'Improve Day-1 and Day-7 retention for free users'
  ],

  solution: 'We redesigned onboarding as a dynamic, goal-based checklist with contextual tooltips, pre-filled templates, and real-time progress tracking. Users chose their goal (e.g., "Start monitoring", "Add a team") and were guided through minimal-step flows to achieve it. We added interactive modals, quick-start templates, and triggered nudges based on usage gaps.',

  architecture: {
    description: 'The onboarding flow is powered by a rule engine that tracks user actions, goal selection, and session events. Based on user profile and behavior, different UI states, tooltips, or actions are triggered using frontend SDK hooks and a backend decision API. The system is integrated with analytics for funnel tracking and cohort analysis.',
    diagram: 'https://example.com/self-serve-onboarding-architecture.png'
  },

  mvpApproach: 'We launched an MVP for the top 2 user goals, added a progress tracker, and included just 3 nudges. We A/B tested this with a 50% control group to validate impact on activation and engagement.',

  techDecisions: [
    { choice: 'Userpilot (or Appcues)', reason: 'Fast deployment of in-app guidance without code' },
    { choice: 'Segment + Mixpanel', reason: 'Precise tracking of onboarding funnel and drop-off points' },
    { choice: 'Custom Goal Engine API', reason: 'Dynamic flow generation based on goal and user segment' },
    { choice: 'JSON-based step definitions', reason: 'Modular onboarding flows that can be easily edited without redeploy' }
  ],

  implementation: [
    {
      phase: 'User Research & Mapping',
      duration: '1 week',
      description: 'Ran 15 user interviews, mapped top tasks, and created personas with activation metrics. Identified 3 core user goals to prioritize.'
    },
    {
      phase: 'MVP Rollout & A/B Test',
      duration: '2.5 weeks',
      description: 'Implemented goal-based onboarding flow, added usage nudges and analytics tracking. Launched A/B test with 5,000 users.'
    },
    {
      phase: 'Iteration & Expansion',
      duration: '2.5 weeks',
      description: 'Added more user goals, deep-linked onboarding into marketing emails, and launched cohort-specific nudges.'
    }
  ],

  results: [
    { metric: 'Activation Rate (Day-1)', improvement: '40% increase', description: 'More users completed onboarding and reached first aha moment' },
    { metric: 'Free-to-Paid Conversion', improvement: '18% uplift', description: 'Higher engagement drove upsell to premium plans' },
    { metric: 'Time to Value', improvement: '60% faster', description: 'Reduced time from signup to core feature usage from 22 mins to 9 mins' },
    { metric: 'Support Load', improvement: '28% reduction', description: 'Fewer tickets for setup and first-use questions' }
  ],

  technologies: ['Userpilot', 'Mixpanel', 'Segment', 'React', 'Node.js', 'MongoDB'],

  lessons: [
    'Goal-based onboarding is significantly more effective than linear flows',
    'Early value realization drives retention more than feature education',
    'Nudges work best when tied to real-time user gaps, not static timers',
    'Funnel instrumentation is crucial — you can’t improve what you don’t track'
  ],

  tradeOffs: [
    {
      decision: 'Used a no-code tool (Userpilot) vs. custom in-app onboarding',
      pros: 'Faster experimentation and iteration, no developer bottleneck',
      cons: 'Less control over UX and scalability for complex use-cases'
    },
    {
      decision: 'Goal-based onboarding vs. one-size-fits-all',
      pros: 'More personalized and relevant user journey',
      cons: 'Increased complexity in designing and testing multiple flows'
    },
    {
      decision: 'Added nudges vs. waiting for user-triggered help',
      pros: 'Higher engagement and guidance at the right moments',
      cons: 'Risk of annoyance if not well-timed or contextual'
    }
  ],

  futureWork: [
    'Introduce AI-based onboarding path suggestions based on usage patterns',
    'Localize onboarding flows for non-English speaking users',
    'Add video walkthroughs and micro-interactions',
    'Trigger nudges based on user intent signals, not just events'
  ]
},

{
  id: '5',
  category: 'product-design',
  title: 'Redesigning Feature Rollouts',
  subtitle: 'Minimizing Churn and Enabling A/B Testing at Scale',
  image: 'https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg',
  duration: '3 months',
  team: '4 engineers, 1 designer, 1 data analyst',
  impact: '30% reduction in churn from premature rollouts, 5x faster experiment cycles',
  tags: ['Feature Rollouts', 'A/B Testing', 'Growth', 'Experimentation', 'Churn Reduction'],

  overview: 'This initiative aimed to revamp our feature rollout process to reduce churn from half-baked releases and improve our experimentation velocity. The new system introduced fine-grained user targeting, controlled rollouts, and integrated A/B testing support, enabling data-driven feature decisions.',

  challenge: 'Frequent complaints arose from users experiencing broken or unfinished features due to blanket releases. Lack of user targeting and rollback support led to increased churn, support load, and hesitation in experimenting. Product, engineering, and growth teams lacked a common experimentation platform.',

  designGoals: [
    'Enable controlled, progressive rollouts to specific user cohorts',
    'Support built-in A/B testing with metrics tracking',
    'Allow instant rollbacks of faulty features',
    'Decouple deployment from release for engineering velocity',
    'Minimize churn from bad feature exposure'
  ],

  solution: 'We implemented a feature flag system powered by LaunchDarkly, integrated it with our internal analytics, and created a rollout manager dashboard for PMs. It allowed targeting users based on segments (geo, plan, usage), running A/B tests with experiment IDs, and reverting changes in under 30 seconds.',

  architecture: {
    description: 'Each feature flag is stored in a centralized config backend. Clients fetch flag states via SDKs and act accordingly. A data pipeline logs exposures and events to the analytics store for experiment tracking. PMs control rollout % via UI or API with real-time override support.',
    diagram: 'https://example.com/feature-rollout-architecture.png'
  },

  mvpApproach: 'We scoped MVP to three use-cases: onboarding experiment, premium feature gating, and UI redesign. MVP supported gradual % rollouts, geo-targeting, and A/B test buckets with basic analytics dashboard integration.',

  techDecisions: [
    { choice: 'LaunchDarkly', reason: 'Proven feature flag infrastructure with SDKs for multiple platforms' },
    { choice: 'Segment + Snowflake', reason: 'Unified event tracking and querying for experiments' },
    { choice: 'React SDKs', reason: 'Quick integration with frontend feature toggles' },
    { choice: 'Custom rollout dashboard', reason: 'Gave product teams self-service control over rollouts' }
  ],

  implementation: [
    {
      phase: 'Discovery & Audit',
      duration: '1.5 weeks',
      description: 'Interviewed teams, identified 6 rollout failure examples, mapped existing release flow and gaps in experimentation.'
    },
    {
      phase: 'MVP & Pilot',
      duration: '3.5 weeks',
      description: 'Implemented core flag infra, tested with onboarding A/B test, validated flag behavior, data capture, and UI.'
    },
    {
      phase: 'Expansion & Training',
      duration: '4 weeks',
      description: 'Rolled out to 10+ live experiments, trained PMs and engineers, documented process and defined rollout SOPs.'
    }
  ],

  results: [
    { metric: 'Churn', improvement: '30% reduction', description: 'Fewer bad rollouts led to higher retention, esp. in new users' },
    { metric: 'Experiment Velocity', improvement: '5x increase', description: 'Teams could now run 10+ experiments/month safely' },
    { metric: 'Rollback Time', improvement: '30s rollback window', description: 'Bad features no longer linger in production' },
    { metric: 'PM Independence', improvement: '90% rollout changes made without engineers', description: 'Product could now self-serve changes' }
  ],

  technologies: ['LaunchDarkly', 'Segment', 'Snowflake', 'React', 'Redux', 'Amplitude'],

  lessons: [
    'Rollout != deployment — separating them improves agility and safety',
    'Bad experiments hurt more than no experiments — safety nets are key',
    'PMs need tooling, not just process, to safely own feature launches',
    'User-level targeting dramatically reduces blast radius of failures'
  ],

  tradeOffs: [
    {
      decision: 'Used LaunchDarkly instead of in-house flags',
      pros: 'Faster time-to-market, robust SDKs, analytics integration',
      cons: 'Recurring cost, some vendor lock-in concerns'
    },
    {
      decision: 'Enabled PMs to control rollouts',
      pros: 'Faster iteration, less engineering bottleneck',
      cons: 'Required training and strict access controls to prevent misuse'
    },
    {
      decision: 'Integrated A/B testing into same system',
      pros: 'Unified metrics and workflows',
      cons: 'Slight complexity in decoupling flags from experiments where needed'
    }
  ],

  futureWork: [
    'Add multi-variate testing support',
    'Auto-trigger rollback on anomaly detection',
    'Deeper integrations with product analytics for cohort analysis',
    'Feature lifecycle tagging to improve hygiene and cleanup'
  ]
},
{
id: '6',
category: 'product-design',
title: 'Driving Product-Led Growth through Self-Serve Onboarding',
subtitle: 'Reducing Drop-Offs and Activating Users without Sales Involvement',
image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
duration: '6 weeks',
team: '2 PMs, 1 designer, 3 engineers, 1 data analyst',
impact: '40% increase in Day-1 activation rate, 18% uplift in free-to-paid conversion',
tags: ['PLG', 'User Onboarding', 'Self-Serve', 'Activation', 'Funnel Optimization'],

overview: 'This initiative focused on designing a frictionless self-serve onboarding flow that allowed users to experience product value without requiring sales or support. We introduced contextual guidance, setup automation, and usage nudges to drive early value realization and boost activation.',

challenge: 'Free trial users were struggling to get value without assistance. Only 22% completed the initial setup, and less than 10% engaged with core features in the first 3 days. The existing onboarding flow was generic, linear, and lacked personalization or in-app guidance. This stalled growth in self-serve signups and increased burden on the sales team.',

designGoals: [
  'Reduce friction in initial user journey',
  'Guide users to first “aha” moment within 5 minutes',
  'Enable full account setup without human involvement',
  'Personalize onboarding based on user type or goal',
  'Improve Day-1 and Day-7 retention for free users'
],

solution: 'We redesigned onboarding as a dynamic, goal-based checklist with contextual tooltips, pre-filled templates, and real-time progress tracking. Users chose their goal (e.g., "Start monitoring", "Add a team") and were guided through minimal-step flows to achieve it. We added interactive modals, quick-start templates, and triggered nudges based on usage gaps.',

architecture: {
  description: 'The onboarding flow is powered by a rule engine that tracks user actions, goal selection, and session events. Based on user profile and behavior, different UI states, tooltips, or actions are triggered using frontend SDK hooks and a backend decision API. The system is integrated with analytics for funnel tracking and cohort analysis.',
  diagram: 'https://example.com/self-serve-onboarding-architecture.png'
},

mvpApproach: 'We launched an MVP for the top 2 user goals, added a progress tracker, and included just 3 nudges. We A/B tested this with a 50% control group to validate impact on activation and engagement.',

techDecisions: [
  { choice: 'Userpilot (or Appcues)', reason: 'Fast deployment of in-app guidance without code' },
  { choice: 'Segment + Mixpanel', reason: 'Precise tracking of onboarding funnel and drop-off points' },
  { choice: 'Custom Goal Engine API', reason: 'Dynamic flow generation based on goal and user segment' },
  { choice: 'JSON-based step definitions', reason: 'Modular onboarding flows that can be easily edited without redeploy' }
],

implementation: [
  {
    phase: 'User Research & Mapping',
    duration: '1 week',
    description: 'Ran 15 user interviews, mapped top tasks, and created personas with activation metrics. Identified 3 core user goals to prioritize.'
  },
  {
    phase: 'MVP Rollout & A/B Test',
    duration: '2.5 weeks',
    description: 'Implemented goal-based onboarding flow, added usage nudges and analytics tracking. Launched A/B test with 5,000 users.'
  },
  {
    phase: 'Iteration & Expansion',
    duration: '2.5 weeks',
    description: 'Added more user goals, deep-linked onboarding into marketing emails, and launched cohort-specific nudges.'
  }
],

results: [
  { metric: 'Activation Rate (Day-1)', improvement: '40% increase', description: 'More users completed onboarding and reached first aha moment' },
  { metric: 'Free-to-Paid Conversion', improvement: '18% uplift', description: 'Higher engagement drove upsell to premium plans' },
  { metric: 'Time to Value', improvement: '60% faster', description: 'Reduced time from signup to core feature usage from 22 mins to 9 mins' },
  { metric: 'Support Load', improvement: '28% reduction', description: 'Fewer tickets for setup and first-use questions' }
],

technologies: ['Userpilot', 'Mixpanel', 'Segment', 'React', 'Node.js', 'MongoDB'],

lessons: [
  'Goal-based onboarding is significantly more effective than linear flows',
  'Early value realization drives retention more than feature education',
  'Nudges work best when tied to real-time user gaps, not static timers',
  'Funnel instrumentation is crucial — you can’t improve what you don’t track'
],

tradeOffs: [
  {
    decision: 'Used a no-code tool (Userpilot) vs. custom in-app onboarding',
    pros: 'Faster experimentation and iteration, no developer bottleneck',
    cons: 'Less control over UX and scalability for complex use-cases'
  },
  {
    decision: 'Goal-based onboarding vs. one-size-fits-all',
    pros: 'More personalized and relevant user journey',
    cons: 'Increased complexity in designing and testing multiple flows'
  },
  {
    decision: 'Added nudges vs. waiting for user-triggered help',
    pros: 'Higher engagement and guidance at the right moments',
    cons: 'Risk of annoyance if not well-timed or contextual'
  }
],

futureWork: [
  'Introduce AI-based onboarding path suggestions based on usage patterns',
  'Localize onboarding flows for non-English speaking users',
  'Add video walkthroughs and micro-interactions',
  'Trigger nudges based on user intent signals, not just events'
]
}

];
