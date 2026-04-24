// ============================================================
//  Toutes les données statiques du CV — à modifier ici uniquement
// ============================================================

export const profile = {
  name: "Thomas VIGIER",
  title: "Formateur Logiciel & Développeur Indépendant",
  tagline: "Transformer les besoins métier en solutions digitales concrètes.",
  summary:
    "Formateur, développeur et consultant indépendant, j'accompagne les organisations dans la montée en compétences, l'automatisation des processus et le développement d'outils sur mesure.",
  bio: "J'aide les organisations à faire le lien entre besoins terrain, pédagogie et solutions digitales. Mon profil hybride me permet de concevoir des formations, structurer des process et développer des outils utiles, concrets et évolutifs.",
  email: "thomas.vigier51@gmail.com",
  phone: "06 62 56 23 28",
  location: "Reims (51)",
  linkedinLabel: "linkedin.com/in/thomasvigier",
  linkedin: "https://www.linkedin.com/in/thomasvigier",
  availability: "Disponible pour missions, formations et projets digitaux",
  availabilityDetail: "Ouvert aux opportunités en France et à distance",
  stats: [
    { value: "15+", label: "ans d'expérience dans la formation" },
    { value: "30+", label: "audits Qualiopi et accompagnements" },
    { value: "600+", label: "jours de formation réalisés en présentiel" },
    {
      value: "100+",
      label: "heures en distanciel (audits, formations, accompagnements)",
    },
  ],
};

export const experiences = [
  {
    category: "Tech",
    role: "Développeur indépendant",
    company: "Freelance",
    period: "09/2025 – aujourd'hui",
    accent: "Backend · Automatisation · IA",
    highlights: [
      "Développement backend Django pour applications métier et outils web sur mesure.",
      "Automatisation de workflows et intégration d'API IA.",
      "Structuration de solutions digitales orientées productivité et usage terrain.",
      "Veille continue en IA avancée, cybersécurité et architecture web.",
    ],
  },
  {
    category: "Formation",
    role: "Consultant formateur",
    company: "M3 Finances",
    period: "03/2025 – 09/2025",
    accent: "Formation financière",
    highlights: [
      "Formation des utilisateurs aux modules M3F de gestion financière.",
      "Création de supports pédagogiques et participation à des démonstrations commerciales.",
    ],
  },
  {
    category: "Formation",
    role: "Consultant formateur",
    company: "Evolucare Technologies",
    period: "01/2024 – 03/2025",
    accent: "Paye · Comptabilité · Budgets",
    highlights: [
      "Animation de formations sur la paye, la comptabilité et les budgets prévisionnels (BP, CA, EPRD, ERRD).",
      "Accompagnement des apprenants en présentiel et distanciel, avec adaptation des méthodes pédagogiques.",
      "Interventions terrain pour régularisations de paye : congés payés, URSSAF, prévoyance, mutuelle.",
      "Environ 30 jours de déplacement chez les clients.",
    ],
  },
  {
    category: "Formation",
    role: "Consultant formateur",
    company: "LD Systèmes",
    period: "03/2023 – 01/2024",
    accent: "Support · Formation logicielle",
    highlights: [
      "Support clients sur logiciels de comptabilité et de paye.",
      "Formations individuelles et collectives, sur site et à distance.",
      "Plus de 1 000 heures de maintenance et formation en distanciel.",
    ],
  },
  {
    category: "Audit",
    role: "Auditeur consultant",
    company: "Indépendant – France entière",
    period: "09/2020 – 01/2024",
    accent: "Qualiopi · Référentiel qualité",
    highlights: [
      "Accompagnement à l'ingénierie du référentiel qualité pour les organismes de formation.",
      "Réalisation de plus de 30 audits Qualiopi.",
      "Réalisation d'une vingtaine d'audits mandatés avec un taux de réussite de 100%.",
      "Cadrage des missions, analyse des besoins et accompagnements opérationnels vers la certification.",
    ],
  },
  {
    category: "Formation",
    role: "Consultant formateur",
    company: "RCA",
    period: "10/2015 – 09/2020",
    accent: "Cabinets comptables · Gestion",
    highlights: [
      "Formation de cabinets d'expertise comptable sur des outils de suivi de gestion, prévisionnel, bilan et tableaux de bord.",
      "Conception de modules et supports pédagogiques.",
      "Mise en œuvre d'une pédagogie différenciée selon les profils d'apprentissage.",
      "Plus de 600 jours de formation réalisés en présentiel.",
    ],
  },
];

export const CATEGORIES = ["Toutes", "Formation", "Audit", "Tech"];

export const studies = [
  {
    title: "Programme de démarrage IA et NoCode",
    school: "Académie Alegria",
    period: "09/2025 – 01/2026",
  },
  {
    title: "Formation auditeur Qualiopi",
    school: "CREALEAD, Reims",
    period: "2021",
  },
  {
    title: "Formation AFPA – Formateur professionnel d'adultes",
    school: "AFPA, Reims",
    period: "2013 – 2014",
  },
  {
    title: "Licence professionnelle – Gestion de projet",
    school: "Université de Reims Champagne-Ardenne",
    period: "2004 – 2005",
  },
  {
    title: "Diplôme post-bac – Bachelor RMS (anciennement Sup'TG)",
    school: "NEOMA Business School Reims (anciennement Reims Management School)",
    period: "1998 – 2001",
  },
];

export const technicalSkills = [
  "Python",
  "Django",
  "JavaScript",
  "HTML / CSS",
  "PostgreSQL",
  "Git / GitHub",
  "API REST",
  "Automatisation",
  "Développement web",
];

export const tools = [
  "Windsurf (IDE IA)",
  "VS Code",
  "DBeaver",
  "PostgreSQL",
  "Linux",
  "Vercel",
  "Nginx",
];
