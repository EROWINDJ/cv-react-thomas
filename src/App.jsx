import React, { useMemo, useState } from "react";

export default function CvThomasVigierPremium() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [activeIndex, setActiveIndex] = useState(0);

  const profile = {
    name: "Thomas VIGIER",
    title: "Formateur Logiciel & Développeur Indépendant",
    tagline:
      "Expert métier en paye, comptabilité et outils de gestion, aujourd’hui orienté développement Django, automatisation NoCode et intégration IA.",
    summary:
      "J’aide les organisations à faire le lien entre besoins terrain, pédagogie et solutions digitales. Mon profil hybride me permet de concevoir des formations, structurer des process et développer des outils utiles, concrets et évolutifs.",
    email: "thomas.vigier51@gmail.com",
    phone: "06 62 56 23 28",
    location: "Reims (51)",
    linkedin: "https://linkedin.com/in/thomas-vigier0a9bb6231",
    stats: [
      { label: "ans d’expérience", value: "10+" },
      { label: "jours de formation", value: "500+" },
      { label: "audits Qualiopi", value: "50+" },
      { label: "heures en distanciel", value: "1000+" },
    ],
  };

  const experiences = [
    {
      category: "Tech",
      role: "Développeur Indépendant",
      company: "Freelance – Django · NoCode · IA",
      period: "09/2025 – aujourd’hui",
      accent: "Backend · Automatisation · IA",
      highlights: [
        "Développement backend Django pour applications métier et outils web sur mesure.",
        "Automatisation NoCode avec n8n et Make.",
        "Intégration d’API d’IA, pipelines de traitement de données et logique orientée productivité.",
        "Veille continue en IA avancée, cybersécurité et architecture web.",
      ],
    },
    {
      category: "Formation",
      role: "Consultant Formateur",
      company: "M3 Finances",
      period: "03/2025 – 09/2025",
      accent: "Formation financière",
      highlights: [
        "Formation des utilisateurs aux modules M3F de gestion financière.",
        "Création de supports pédagogiques et démonstrations commerciales.",
      ],
    },
    {
      category: "Formation",
      role: "Consultant Formateur",
      company: "EVOLUCARE TECHNOLOGIES",
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
      role: "Consultant Formateur",
      company: "LD SYSTÈMES",
      period: "03/2023 – 01/2024",
      accent: "Support · Formation logicielle",
      highlights: [
        "Support clients sur logiciels de comptabilité et de paye.",
        "Formations individuelles et collectives, sur site et à distance.",
        "Environ 1 000 heures de maintenance et formation en distanciel.",
      ],
    },
    {
      category: "Audit",
      role: "Consultant Auditeur",
      company: "Indépendant – France entière",
      period: "09/2020 – 01/2024",
      accent: "Qualiopi · Référentiel qualité",
      highlights: [
        "Accompagnement à l’ingénierie du référentiel qualité.",
        "Audits Qualiopi et préparation à la certification.",
        "Analyse des besoins, cadrage des missions et amélioration continue.",
        "Environ 50 audits réalisés et autant d’accompagnements vers la certification.",
      ],
    },
    {
      category: "Formation",
      role: "Consultant Formateur",
      company: "RCA – Nantes",
      period: "10/2015 – 09/2020",
      accent: "Cabinets comptables · Gestion",
      highlights: [
        "Formation de cabinets d’expertise comptable sur des outils de suivi de gestion, prévisionnel, bilan et tableaux de bord.",
        "Conception de modules et supports pédagogiques.",
        "Mise en œuvre d’une pédagogie différenciée selon les profils d’apprentissage.",
        "Environ 500 journées de formation réalisées en cabinet.",
      ],
    },
  ];

  const categories = ["Toutes", "Formation", "Audit", "Tech"];

  const filteredExperiences = useMemo(() => {
    if (selectedCategory === "Toutes") return experiences;
    return experiences.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const safeActiveIndex = Math.min(activeIndex, Math.max(filteredExperiences.length - 1, 0));
  const activeExperience = filteredExperiences[safeActiveIndex] || experiences[0];

  const expertises = [
    {
      title: "Formation métier",
      description:
        "Paye, comptabilité, budgets, gestion et accompagnement à la prise en main de logiciels métiers.",
    },
    {
      title: "Ingénierie pédagogique",
      description:
        "Conception de parcours, adaptation au niveau des apprenants, animation en présentiel et distanciel.",
    },
    {
      title: "Audit & qualité",
      description:
        "Qualiopi, cadrage, analyse, structuration documentaire et amélioration continue.",
    },
    {
      title: "Développement & automatisation",
      description:
        "Django, Python, PostgreSQL, workflows NoCode, intégration API et logique produit.",
    },
  ];

  const techSkills = [
    "Django",
    "Python",
    "PostgreSQL",
    "HTML / CSS",
    "JavaScript",
    "n8n",
    "Make",
    "Linux",
    "Nginx",
    "Debian",
    "Git",
    "API IA",
  ];

  const studies = [
    {
      title: "AI & NoCode Starter Program",
      school: "Alegria Academy",
      period: "09/2025 – 01/2026",
    },
    {
      title: "Référentiel Qualiopi – Professionnel",
      school: "CREALEAD, Reims",
      period: "2021",
    },
    {
      title: "Formation professionnel d’adultes",
      school: "AFPA, Reims",
      period: "2013 – 2014",
    },
    {
      title: "Licence Pro Gestion de projet",
      school: "Université de Reims",
      period: "2004 – 2005",
    },
    {
      title: "Bachelor Gestion",
      school: "NEOMA Reims",
      period: "1998 – 2001",
    },
  ];

  const SectionTitle = ({ eyebrow, title, description }) => (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">{eyebrow}</div>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 tracking-tight">{title}</h2>
      {description ? <p className="mt-3 text-slate-600 max-w-2xl leading-7">{description}</p> : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#ffffff,_#eef2ff_40%,_#f8fafc_75%)] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.08)] overflow-hidden">
          <section className="relative px-6 md:px-10 pt-8 md:pt-12 pb-10 border-b border-slate-200/70">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-slate-200/40 blur-3xl" />
              <div className="absolute top-10 right-10 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-[1.35fr_0.85fr] gap-8 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs text-slate-600 mb-5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Disponible pour missions, formation et projets digitaux
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="h-20 w-20 rounded-[28px] bg-slate-950 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-slate-900/10">
                    TV
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 leading-none">
                      {profile.name}
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-slate-700 leading-tight max-w-3xl">
                      {profile.title}
                    </p>
                    <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl leading-8">
                      {profile.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-slate-600 leading-8 max-w-3xl text-[15px] md:text-base">
                  {profile.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-full bg-slate-950 text-white px-5 py-3 hover:-translate-y-0.5 transition-transform"
                  >
                    Me contacter
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Voir LinkedIn
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm hover:-translate-y-1 transition-transform"
                  >
                    <div className="text-3xl md:text-4xl font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-500 leading-5">{stat.label}</div>
                  </div>
                ))}
                <div className="col-span-2 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Contact</div>
                  <div className="mt-4 space-y-2 text-sm md:text-base">
                    <div>{profile.email}</div>
                    <div>{profile.phone}</div>
                    <div>{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-10 py-10 md:py-14">
            <SectionTitle
              eyebrow="Expertises"
              title="Un profil à la croisée du métier, de la pédagogie et du produit"
              description="Cette version met davantage en avant le positionnement CV interactif : non seulement ce que tu as fait, mais surtout ce que tu sais construire et transformer."
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {expertises.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="h-10 w-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-sm font-semibold mb-4 group-hover:scale-105 transition-transform">
                    +
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 md:px-10 py-10 md:py-14 border-t border-slate-200/70 bg-slate-50/60">
            <SectionTitle
              eyebrow="Parcours"
              title="Une timeline filtrable et plus interactive"
              description="Clique sur un filtre puis sur une carte à gauche pour faire varier le détail affiché à droite."
            />

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => {
                const active = category === selectedCategory;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setActiveIndex(0);
                    }}
                    className={`rounded-full px-4 py-2 text-sm border transition-all ${
                      active
                        ? "bg-slate-950 text-white border-slate-950"
                        : "bg-white text-slate-600 border-slate-300 hover:border-slate-500"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
              <div className="space-y-4">
                {filteredExperiences.map((item, index) => {
                  const active = index === safeActiveIndex;
                  return (
                    <button
                      key={`${item.role}-${item.company}-${index}`}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left rounded-[28px] border p-5 transition-all ${
                        active
                          ? "bg-slate-950 text-white border-slate-950 shadow-xl"
                          : "bg-white text-slate-900 border-slate-200 hover:-translate-y-1 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className={`text-xs uppercase tracking-[0.25em] ${active ? "text-slate-400" : "text-slate-400"}`}>
                            {item.category}
                          </div>
                          <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                          <p className={`mt-1 text-sm ${active ? "text-slate-300" : "text-slate-600"}`}>{item.company}</p>
                        </div>
                        <span className={`text-xs whitespace-nowrap ${active ? "text-slate-400" : "text-slate-500"}`}>
                          {item.period}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm min-h-[420px]">
                <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-500">
                  {activeExperience.accent}
                </div>
                <h3 className="mt-5 text-2xl md:text-3xl font-semibold text-slate-950 tracking-tight">
                  {activeExperience.role}
                </h3>
                <p className="mt-2 text-slate-600 text-lg">{activeExperience.company}</p>
                <p className="mt-1 text-sm text-slate-400">{activeExperience.period}</p>

                <div className="mt-8 space-y-4">
                  {activeExperience.highlights.map((point) => (
                    <div key={point} className="flex gap-4 group">
                      <div className="mt-1 h-8 w-8 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-xs shrink-0 group-hover:scale-105 transition-transform">
                        •
                      </div>
                      <p className="text-slate-600 leading-7">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-10 py-10 md:py-14 border-t border-slate-200/70">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <SectionTitle
                  eyebrow="Stack"
                  title="Compétences techniques"
                  description="Une base suffisamment solide pour créer, intégrer et faire évoluer un produit métier moderne."
                />
                <div className="flex flex-wrap gap-3">
                  {techSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle
                  eyebrow="Formation"
                  title="Socle académique et montée en compétence continue"
                />
                <div className="space-y-4">
                  {studies.map((item) => (
                    <div
                      key={`${item.title}-${item.period}`}
                      className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-slate-950">{item.title}</h3>
                          <p className="text-sm text-slate-600 mt-1">{item.school}</p>
                        </div>
                        <span className="text-sm text-slate-400">{item.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-10 py-10 md:py-12 border-t border-slate-200/70 bg-slate-950 text-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-3">Recruteur</div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Un profil capable de parler aussi bien aux utilisateurs qu’au produit.
                </h2>
                <p className="mt-4 text-slate-300 leading-8 max-w-2xl">
                  Cette base peut maintenant évoluer vers un vrai CV interactif : espace recruteur, section projets, téléchargement PDF, formulaires, ou connexion future à Django et Airtable.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-slate-400">Contact direct</div>
                <div className="mt-4 space-y-3 text-sm md:text-base">
                  <a href={`mailto:${profile.email}`} className="block hover:text-slate-300 transition-colors">
                    {profile.email}
                  </a>
                  <div>{profile.phone}</div>
                  <div>{profile.location}</div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-full bg-white text-slate-950 px-4 py-2 text-sm font-medium hover:-translate-y-0.5 transition-transform"
                  >
                    Écrire
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
