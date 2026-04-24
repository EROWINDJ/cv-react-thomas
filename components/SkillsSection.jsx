import { technicalSkills, tools, profile } from "../data/cv";
import SectionTitle from "./SectionTitle";

export default function SkillsSection() {
  return (
    <section
      className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8"
      aria-label="Compétences et outils"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Compétences techniques */}
        <div>
          <SectionTitle icon="🛠" title="Compétences techniques" accent="emerald" />
          <ul className="flex flex-wrap gap-3" aria-label="Liste des compétences techniques">
            {technicalSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-slate-700 hover:bg-white transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Outils & environnements */}
        <div>
          <SectionTitle icon="🖥" title="Outils & environnements" accent="rose" />
          <ul className="flex flex-wrap gap-3" aria-label="Liste des outils">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-2.5 text-slate-700 hover:bg-white transition-colors"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Note de bas de page */}
      <p className="mt-8 rounded-[24px] bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 px-5 py-4 text-slate-600 leading-7">
        Cette page a été réalisée avec React, Tailwind CSS et VS Code / Windsurf dans une logique de montée en compétence progressive.
      </p>

      {/* CTA final */}
      <div className="mt-6 rounded-[24px] bg-slate-950 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-white text-lg">Curieux d'en savoir plus ? Discutons de vos projets.</p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-950 px-5 py-3 font-medium hover:bg-slate-100 transition-colors"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
