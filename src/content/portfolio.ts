export type Role = {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  details: string[];
};

export type Project = {
  title: string;
  stack: string;
  problem: string;
  approach: string;
  result: string;
  href: string;
};

export type Service = {
  name: string;
  scope: string;
  price: string;
  timeline: string;
  bestFor: string;
  deliverables: string[];
};

export type Article = {
  title: string;
  summary: string;
  href: string;
  topic: string;
  date: string;
  readTime: string;
  takeaways: string[];
};

export const profile = {
  name: "Ayush Trivedi",
  role: "DevOps Engineer",
  location: "Indore, India",
  email: "ayushtrivedi11jan@gmail.com",
  phones: ["+91-7987788900", "+91-7240890038"],
  links: {
    linkedin: "https://www.linkedin.com/in/ayushtrivedi11",
    github: "https://github.com/ayushtrivedi11",
    medium: "https://medium.com/@ayushtrivedi11jan",
  },
  headline: "Reliable cloud infrastructure, built to run in production.",
  abstract:
    "I build and run cloud infrastructure teams can depend on \u2014 automated pipelines, Kubernetes workloads, and infrastructure as code.",
  facts: [
    { label: "Current", value: "DevOps Engineer, System Level Solutions" },
    { label: "Focus", value: "Azure & AWS, Kubernetes, CI/CD, IaC" },
    { label: "Based in", value: "Indore, India" },
    { label: "Freelance", value: "Selective engagements" },
  ],
};

export const sections = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "services", label: "Services" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const roles: Role[] = [
  {
    title: "DevOps Engineer",
    company: "System Level Solutions",
    period: "Apr 2026 — Present",
    current: true,
    summary:
      "Building and maintaining cloud infrastructure with a focus on automation and reliability.",
    details: [
      "Own CI/CD pipelines from commit to production deployment.",
      "Operate Kubernetes workloads and release processes.",
      "Define and version infrastructure as code.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Aviasole Technologies",
    period: "Nov 2025 — Apr 2026",
    summary:
      "Hardened secret management and expanded observability across a growing service estate.",
    details: [
      "Implemented secure secret management with Azure Key Vault.",
      "Improved observability for 18+ services with monitoring dashboards.",
      "Reduced configuration drift across environments.",
    ],
  },
  {
    title: "DevOps Engineer — Intern",
    company: "VKAPS IT Solutions",
    period: "Jun 2025 — Nov 2025",
    summary: "Built deployment pipelines and coordinated release schedules across teams.",
    details: [
      "Built deployment pipelines, reducing release time by 70%.",
      "Coordinated deployment schedules across engineering teams.",
      "Documented runbooks for repeatable releases.",
    ],
  },
];

export const expertise: { category: string; tools: string[] }[] = [
  { category: "Cloud platforms", tools: ["Microsoft Azure", "AWS"] },
  { category: "Containerization", tools: ["Docker", "Kubernetes", "Helm"] },
  { category: "CI/CD", tools: ["Azure DevOps", "GitHub Actions", "Jenkins", "GitLab CI"] },
  { category: "Infrastructure as code", tools: ["Terraform", "Ansible", "CloudFormation"] },
  {
    category: "Monitoring & logging",
    tools: ["Azure Monitor", "Log Analytics", "Grafana", "ELK Stack", "Lens"],
  },
  { category: "Security", tools: ["SonarQube", "Trivy", "Key Vault", "External Secrets"] },
  { category: "Programming & systems", tools: ["Python", "Bash", "Git", "Linux", "Windows"] },
];

export const projects: Project[] = [
  {
    title: "Cloud-Native CI/CD Pipeline on AKS",
    stack: "Azure DevOps · ArgoCD · AKS · Helm",
    problem:
      "Microservice releases depended on manual steps, making deployments slow and inconsistent between environments.",
    approach:
      "Designed an end-to-end pipeline in Azure DevOps with automated testing and container image promotion, and handed deployment to ArgoCD using a GitOps model on AKS.",
    result:
      "Repeatable, auditable releases with environment parity and rollbacks driven from Git history rather than manual intervention.",
    href: "https://github.com/ayushtrivedi11",
  },
  {
    title: "Secure DevSecOps Pipeline",
    stack: "SonarCloud · Gitleaks · Snyk · GitHub Actions",
    problem:
      "Code quality and security issues were only found late, after code had already been merged and shipped.",
    approach:
      "Integrated SonarCloud, Gitleaks and Snyk into the CI pipeline alongside automated unit testing, with quality gates blocking merges on failure.",
    result:
      "Secrets, dependency vulnerabilities and quality regressions are caught on every pull request instead of in production.",
    href: "https://github.com/ayushtrivedi11",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
  period: "Jun 2021 — Jun 2025",
  note: "Focused on cloud technologies, automation and system reliability through applied projects.",
};

export const certifications = [
  { name: "Oracle Cloud Infrastructure DevOps Professional", issuer: "Oracle" },
  { name: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle" },
  { name: "Cloud Computing", issuer: "NPTEL" },
  { name: "Python for Data Science", issuer: "IBM" },
];

export const services: Service[] = [
  {
    name: "Cloud infrastructure setup",
    scope:
      "Greenfield Azure or AWS environments: networking, Kubernetes clusters, databases and delivery pipelines, defined as code from day one.",
    price: "From $2,000",
    timeline: "3 — 5 weeks",
    bestFor: "Teams launching a new product or leaving manual servers behind",
    deliverables: [
      "Terraform-defined landing zone with environment separation",
      "Kubernetes cluster with ingress, secrets and autoscaling configured",
      "CI/CD pipeline from commit to production",
      "Runbook and handover walkthrough",
    ],
  },
  {
    name: "Infrastructure audit & review",
    scope:
      "Structured review of an existing cloud estate against security, cost and reliability practices, delivered as a prioritised findings report.",
    price: "From $1,000",
    timeline: "1 — 2 weeks",
    bestFor: "Estates that grew fast and were never reviewed end to end",
    deliverables: [
      "Findings register scored by risk and effort",
      "Cost reduction opportunities with estimated savings",
      "Security and access control gap analysis",
      "Remediation roadmap in delivery order",
    ],
  },
  {
    name: "DevOps consulting",
    scope:
      "Ongoing advisory for teams improving delivery practices, CI/CD workflows and infrastructure automation.",
    price: "$150 / hour",
    timeline: "Retained, monthly",
    bestFor: "In-house teams who need a second pair of eyes on delivery",
    deliverables: [
      "Weekly working sessions with your engineers",
      "Pipeline and IaC review with concrete pull requests",
      "Incident and release process improvements",
      "Async support between sessions",
    ],
  },
];

export const articles: Article[] = [
  {
    title: "Getting Started with Kubernetes on Azure",
    summary: "A practical walkthrough of standing up and operating your first AKS cluster.",
    href: "https://medium.com/@ayushtrivedi11jan",
    topic: "Kubernetes",
    date: "2026",
    readTime: "8 min read",
    takeaways: [
      "Cluster sizing decisions that are painful to reverse later",
      "Ingress, DNS and TLS wired up without manual steps",
      "What to monitor before your first production workload",
    ],
  },
  {
    title: "Terraform Best Practices I Learned the Hard Way",
    summary: "State, modules and naming: the mistakes worth avoiding in real infrastructure code.",
    href: "https://medium.com/@ayushtrivedi11jan",
    topic: "Infrastructure as code",
    date: "2026",
    readTime: "6 min read",
    takeaways: [
      "Remote state layout that survives multiple environments",
      "When a module helps and when it just hides complexity",
      "Naming and tagging conventions that keep costs traceable",
    ],
  },
  {
    title: "Building CI/CD Pipelines with Azure DevOps",
    summary: "From a single build definition to multi-stage deployment strategies.",
    href: "https://medium.com/@ayushtrivedi11jan",
    topic: "CI/CD",
    date: "2025",
    readTime: "7 min read",
    takeaways: [
      "Splitting build and release so failures stay contained",
      "Approvals and gates that do not slow delivery down",
      "Promoting one artifact across every environment",
    ],
  },
];
