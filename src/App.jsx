import React, { useMemo, useState } from "react";
import profilePhoto from "./assets/thomas-vigier.jpg";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [activeIndex, setActiveIndex] = useState(0);

  const profile = {
    name: "Thomas VIGIER",
    title: "Formateur Logiciel & Développeur Indépendant",
    tagline: "Transformer les besoins métier en solutions digitales concrètes.",
    summary:
      "Formateur, développeur et consultant indépendant, j’accompagne les organisations dans la montée en compétences, l’automatisation des processus et le développement d’outils sur mesure.",
    bio: "J’aide les organisations à faire le lien entre besoins terrain, pédagogie et solutions digitales. Mon profil hybride me permet de concevoir des formations, structurer des process et développer des outils utiles, concrets et évolutifs.",
    email: "thomas.vigier51@gmail.com",
    phone: "06 62 56 23 28",
    location: "Reims (51)",
    linkedinLabel: "linkedin.com/in/thomasvigier",
    linkedin: "https://www.linkedin.com/in/thomasvigier",
    availability: "Disponible pour missions, formations et projets digitaux",
    availabilityDetail: "Ouvert aux opportunités en France et à distance",
    stats: [
      {
        value: "15+",
        label: "ans d’expérience dans la formation",
      },
      {
        value: "30+",
        label: "audits Qualiopi et accompagnements",
      },
      {
        value: "600+",
        label: "jours de formation réalisés en présentiel",
      },
      {
        value: "100+",
        label: "heures en distanciel (audits, formations, accompagnements)",
      },
    ],
  };

  const experiences = [
    {
      category: "Tech",
      role: "Développeur indépendant",
      company: "Freelance",
      period: "09/2025 – aujourd’hui",
      accent: "Backend · Automatisation · IA",
      highlights: [
        "Développement backend Django pour applications métier et outils web sur mesure.",
        "Automatisation de workflows et intégration d’API IA.",
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
        "Accompagnement à l’ingénierie du référentiel qualité pour les organismes de formation.",
        "Réalisation de plus de 30 audits Qualiopi.",
        "Réalisation d’une vingtaine d’audits mandatés avec un taux de réussite de 100%.",
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
        "Formation de cabinets d’expertise comptable sur des outils de suivi de gestion, prévisionnel, bilan et tableaux de bord.",
        "Conception de modules et supports pédagogiques.",
        "Mise en œuvre d’une pédagogie différenciée selon les profils d’apprentissage.",
        "Plus de 600 jours de formation réalisés en présentiel.",
      ],
    },
  ];

  const categories = ["Toutes", "Formation", "Audit", "Tech"];

  const filteredExperiences = useMemo(() => {
    if (selectedCategory === "Toutes") return experiences;
    return experiences.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const safeActiveIndex = Math.min(
    activeIndex,
    Math.max(filteredExperiences.length - 1, 0)
  );
  const activeExperience = filteredExperiences[safeActiveIndex] || experiences[0];

  const studies = [
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
      title: "Formation AFPA – Formateur professionnel d’adultes",
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
      school:
        "NEOMA Business School Reims (anciennement Reims Management School)",
      period: "1998 – 2001",
    },
  ];

  const technicalSkills = [
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

 const tools = [
  "Windsurf (IDE IA)",
  "VS Code",
  "DBeaver",
  "PostgreSQL",
  "Linux",
  "Vercel",
  "Nginx"
];

  const SectionTitle = ({ icon, title, accent = "indigo" }) => {
    const accentStyles = {
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
      amber: "bg-amber-50 text-amber-700 border-amber-100",
      rose: "bg-rose-50 text-rose-700 border-rose-100",
    };

    return (
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`h-10 w-10 rounded-2xl flex items-center justify-center text-sm font-semibold border ${accentStyles[accent]}`}
        >
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <div className="grid xl:grid-cols-[340px_1fr] gap-6">
          <aside className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] overflow-hidden h-fit">
            <div className="p-5 md:p-6">
              <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={profilePhoto}
                  alt="Portrait de Thomas Vigier"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-5">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 leading-none">
                  {profile.name}
                </h1>
                <p className="mt-3 text-xl text-slate-700 leading-snug">
                  Formateur | Développeur indépendant
                </p>
                <p className="mt-2 text-slate-500">
                  IA · Automatisation · Développement web
                </p>
                <p className="mt-5 text-slate-600 leading-8 text-[15px]">
                  {profile.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-lg">✉</span>
                  <span className="break-all">{profile.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">☎</span>
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">⌖</span>
                  <span>{profile.location}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center rounded-2xl bg-slate-950 text-white px-5 py-4 text-base font-medium hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Me contacter
                </a>

                <button
  onClick={() => window.print()}
  className="flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
>
  Télécharger mon CV (PDF)
</button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                  Réseaux
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-indigo-700 hover:text-indigo-900 transition-colors break-all"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 font-semibold">
                    in
                  </span>
                  <span>{profile.linkedinLabel}</span>
                </a>
              </div>

              <div className="mt-8 rounded-[24px] bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {profile.availability}
                    </div>
                    <div className="mt-2 text-slate-600 leading-7 text-sm">
                      {profile.availabilityDetail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Adepte de la pédagogie, du digital et de l'automatisation
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-[1.1] max-w-4xl">
                {profile.tagline}
              </h2>

              <p className="mt-5 text-base md:text-lg text-slate-600 leading-8 max-w-3xl">
                {profile.summary}
              </p>

              <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {profile.stats.map((stat, index) => {
                  const cardStyles = [
                    "from-indigo-50 to-white border-indigo-100",
                    "from-rose-50 to-white border-rose-100",
                    "from-amber-50 to-white border-amber-100",
                    "from-sky-50 to-white border-sky-100",
                  ];

                  return (
                    <div
                      key={stat.label}
                      className={`rounded-[28px] border bg-gradient-to-br p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all ${cardStyles[index % cardStyles.length]}`}
                    >
                      <div className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-none">
                        {stat.value}
                      </div>
                      <div className="mt-4 text-slate-600 text-sm md:text-base leading-7">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8">
              <SectionTitle icon="💼" title="Expérience" accent="indigo" />

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
                          ? "bg-slate-950 text-white border-slate-950 shadow-sm"
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
                            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                              {item.category}
                            </div>
                            <h3 className="mt-2 text-lg font-semibold">
                              {item.role}
                            </h3>
                            <p
                              className={`mt-1 text-sm ${
                                active ? "text-slate-300" : "text-slate-600"
                              }`}
                            >
                              {item.company}
                            </p>
                          </div>
                          <span
                            className={`text-xs whitespace-nowrap ${
                              active ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            {item.period}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-[32px] border border-indigo-100 bg-gradient-to-br from-slate-50 to-indigo-50 p-6 md:p-8 shadow-sm min-h-[420px]">
                  <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-500 border border-slate-200">
                    {activeExperience.accent}
                  </div>
                  <h3 className="mt-5 text-2xl md:text-3xl font-semibold text-slate-950 tracking-tight">
                    {activeExperience.role}
                  </h3>
                  <p className="mt-2 text-slate-600 text-lg">
                    {activeExperience.company}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {activeExperience.period}
                  </p>

                  <div className="mt-8 space-y-4">
                    {activeExperience.highlights.map((point) => (
                      <div key={point} className="flex gap-4">
                        <div className="mt-1 h-8 w-8 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-xs shrink-0">
                          •
                        </div>
                        <p className="text-slate-600 leading-7">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8">
              <SectionTitle icon="🎓" title="Formation" accent="amber" />
              <div className="space-y-4">
                {studies.map((item) => (
                  <div
                    key={`${item.title}-${item.period}`}
                    className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-slate-600 text-lg">
                          {item.school}
                        </p>
                      </div>
                      <span className="text-slate-400 text-lg whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <SectionTitle
                    icon="🛠"
                    title="Compétences techniques"
                    accent="emerald"
                  />
                  <div className="flex flex-wrap gap-3">
                    {technicalSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-slate-700 hover:bg-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionTitle
                    icon="🖥"
                    title="Outils & environnements"
                    accent="rose"
                  />
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-2.5 text-slate-700 hover:bg-white transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[24px] bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 px-5 py-4 text-slate-600 leading-7">
                Cette page a été réalisée avec React, Tailwind CSS et VS Code / Windsurf dans une logique de montée en compétence progressive.
              </div>

              <div className="mt-6 rounded-[24px] bg-slate-950 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-white text-lg">
                  Curieux d’en savoir plus ? Discutons de vos projets.
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-950 px-5 py-3 font-medium hover:bg-slate-100 transition-colors"
                >
                  Me contacter
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}