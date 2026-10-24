// Site copy. Experience, metrics and dates mirror the CV and LinkedIn profile;
// update them here together so the three stay in sync.

export const profile = {
  name: 'Nayoko Wicaksono',
  headline: 'Strategy & Operations Leader',
  base: 'Bangkok • Jakarta',
  tenure: '15 years building in Southeast Asia',
  email: 'nayokow@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nayoko/',
  medium: 'https://medium.com/@nayokow',
  calendly: 'https://calendly.com/nayokow/30min',
};

export const stats = [
  { value: '$50M+', label: 'Deals Facilitated' },
  { value: '5,000+', label: 'Algoritma Alumni Trained' },
  { value: '50+', label: 'Team Scaled Through Exit' },
  { value: '2', label: 'Unicorns Backed Early' },
];

export const operated = ['ArcFusion.ai', 'Algoritma', 'Plug and Play Indonesia', 'Seekmi', 'Mindtific'];
export const backed = ['Ajaib', 'Bukalapak', 'Kitalulus', 'Snapcart'];

export const experience = [
  {
    period: 'Aug 2026 – Present',
    role: 'Chief Commercial Officer',
    org: 'ArcFusion.ai',
    context: 'Enterprise GenAI studio (Bangkok · Singapore · Jakarta) building production AI systems for enterprise and private-equity clients across Southeast Asia.',
    detail: 'Own the commercial function end to end: go-to-market, pricing, pipeline, partnerships and contracts across six markets. Built the commercial operating system from zero and opened channel partnerships with Google Cloud Thailand and AGI House (US).',
  },
  {
    period: '2025 – 2026',
    role: 'Founder',
    org: 'Mindtific',
    context: 'Early childhood learning platform: physical storybook IP paired with an LLM-powered iOS companion app.',
    detail: 'Took the product from thesis to TestFlight external beta as solo founder, built with AI-native workflows. Designed an evidence-first measurement model with explicit constraints against engagement-maximising defaults.',
  },
  {
    period: '2024 – 2026',
    role: 'Principal',
    org: 'TIPA Advisory',
    context: 'Cross-border market-entry advisory for companies expanding between Thailand and Indonesia.',
    detail: 'Matched a hospital group with a local conglomerate partner and supported the joint venture through formation; guided an Indonesian retail brand into Thailand.',
  },
  {
    period: '2017 – 2024',
    role: 'Co-Founder & CEO',
    org: 'Algoritma — Data Science Education',
    context: "Southeast Asia's leading data science education company, for individuals and enterprise teams.",
    detail: "Scaled to 5,000+ alumni, USD 1.6M ARR and 30% YoY growth through to exit, profitable through Indonesia's full tech cycle. Built the operating system from zero and grew the team to 50+.",
  },
  {
    period: '2016 – 2018',
    role: 'Managing Director & Venture Partner',
    org: 'Plug and Play Indonesia',
    context: 'Indonesia launch of the Silicon Valley–headquartered global innovation platform.',
    detail: 'Launched the operation from zero and scaled it to USD 1.5M ARR. Built enterprise partnerships with Astra and state-owned BNI.',
  },
  {
    period: '2015 – 2016',
    role: 'Co-Founder & CEO',
    org: 'Seekmi',
    context: 'Home services marketplace, Jakarta.',
    detail: 'Raised USD 150K seed in 2 months and a USD 2M Series A in 3 months. Google Launchpad inaugural cohort (Mountain View).',
  },
  {
    period: '2011 – 2015',
    role: 'Earlier roles',
    org: 'Rocket Internet · EMTEK · Home Tester Club',
    context: "Venture-building, partnerships and joint-venture leadership across Indonesia's media and tech sectors.",
    detail: '',
  },
];

export const advisory =
  'Venture Partner, Artesian VC. Early investor and advisor to Ajaib and Bukalapak; also Zipmex, Kitalulus, KitaHQ, Snapcart, Karta and Scotty.';

export const education = 'B.A. Economics & Commerce, University of British Columbia — Trek Excellence Scholarship';

export const lenses = [
  {
    index: '01',
    name: 'Systems',
    question: 'Where should judgment sit?',
    desc: 'Map the decisions, workflows and feedback loops that actually run the business. Redesign decision rights for abundant intelligence, and build the KPI system that tells you whether it is working.',
  },
  {
    index: '02',
    name: 'People',
    question: 'Who becomes what?',
    desc: 'Role-by-role capability maps and learning built on your own data and workflows: the learn-by-building method behind Algoritma’s 5,000+ alumni and enterprise programmes. Skills need new roles to land in, or they evaporate.',
  },
  {
    index: '03',
    name: 'Agents',
    question: 'What should software do on its own?',
    desc: 'Agents with clear scope, human approval gates and audit trails, so autonomy grows only as trust is earned. I run my own commercial work this way: research, CRM knowledge graphs and meeting intelligence.',
  },
];

export const autonomyLadder = [
  { level: 'L1', name: 'Suggest', desc: 'Agent recommends. A person decides and acts.' },
  { level: 'L2', name: 'Draft', desc: 'Agent prepares the work. A person approves every action.' },
  { level: 'L3', name: 'Act with review', desc: 'Agent acts. People review a sample and every exception.' },
  { level: 'L4', name: 'Act within bounds', desc: 'Agent acts alone inside defined limits, with an audit log and a kill switch.' },
];

export const offerings = [
  {
    title: 'The Judgment Economy',
    kind: 'Leadership intensive',
    audience: 'Boards & C-suite',
    format: 'Half-day or two-day',
    desc: 'What changes in your value chain when intelligence is cheap, where judgment and accountability must stay human, and how to choose the first three workflows worth redesigning.',
    outcome: 'A shared AI thesis and a sequenced 90-day portfolio.',
  },
  {
    title: 'AI Transformation Diagnostic',
    kind: 'Systems advisory',
    audience: 'CEO & COO',
    format: '3–4 weeks',
    desc: 'A systems map of decisions, workflows and data; operating-model, governance and KPI design; clear build, buy or partner calls.',
    outcome: 'A transformation roadmap your leadership team can own.',
  },
  {
    title: 'Workforce AI Fluency',
    kind: 'Human capital programme',
    audience: 'CHRO & L&D',
    format: '6–12 weeks',
    desc: 'Capability mapping by role, an AI fluency ladder (Aware → Fluent → Builder → Architect), cohort learning on real company workflows, and role redesign so new skills have somewhere to go.',
    outcome: 'Measured behaviour change, not completion rates.',
  },
  {
    title: 'Executive Agent Lab',
    kind: 'Build to understand',
    audience: 'Senior leaders',
    format: '4-week cohort',
    desc: 'Each leader builds a working agent on their own workflow (research, reporting, meeting intelligence, pipeline hygiene) with approval gates and audit logs, then places it on the autonomy ladder.',
    outcome: 'Leaders who can judge agent proposals because they have shipped one.',
  },
  {
    title: 'Agent Design Sprint',
    kind: 'Team workshop',
    audience: 'Operating teams',
    format: '2 weeks',
    desc: 'Pick one workflow, map it, prototype one to three agents with human-in-the-loop controls, and define the governance and metrics needed before production.',
    outcome: 'A working prototype, a risk register and a build plan.',
  },
];

export const talks = [
  { title: 'Intelligence Is Abundant. Judgment Is Not.', audience: 'Boards and leadership offsites' },
  { title: 'Upskilling Is Not Training', audience: 'CHROs, L&D and HR leaders' },
  { title: 'Autonomy Is Earned', audience: 'Operators, risk and compliance teams' },
  { title: 'Raising Humans in the Age of Infinite Intelligence', audience: 'Schools, parent communities and family offices' },
];

export const essays = [
  {
    title: 'When Intelligence Becomes Infinite, Wisdom Becomes Priceless',
    tag: 'AI · Judgment',
    url: 'https://medium.com/@nayokow/when-intelligence-becomes-infinite-wisdom-becomes-priceless-6d1a96a27efd',
  },
  {
    title: 'Systems Thinking for Parents: Why Good Intentions Fail',
    tag: 'Family Systems',
    url: 'https://medium.com/@nayokow/systems-thinking-for-parents-bd5e1b3e2639',
  },
  {
    title: 'The Anti-Fragile Child: How to Build Resilience in a Low-Stakes World',
    tag: 'Family Excellence Series',
    url: 'https://medium.com/@nayokow/the-anti-fragile-child-how-to-build-resilience-in-a-low-stakes-world-495222591dba',
  },
  {
    title: 'The 2026 Parent’s Dilemma: Which Bangkok School Prepares Your Child for an AI-Dominated Future?',
    tag: 'Education · AI',
    url: 'https://medium.com/@nayokow/the-2026-parents-dilemma-which-bangkok-school-actually-prepares-your-child-for-an-ai-dominated-1f002e850dd8',
  },
];
