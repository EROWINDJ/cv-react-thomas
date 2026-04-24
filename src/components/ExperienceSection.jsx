import { useMemo, useState } from "react";
import { experiences, CATEGORIES } from "../data/cv";
import SectionTitle from "./SectionTitle";
import { cn } from "../lib/cn";

export default function ExperienceSection() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [activeIndex, setActiveIndex] = useState(0);

  // experiences est défini HORS du composant → dépendance stable, pas de warning ESLint
  const filteredExperiences = useMemo(
    () =>
      selectedCategory === "Toutes"
        ? experiences
        : experiences.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  // Garde l'index dans les bornes si le filtre réduit la liste
  const safeActiveIndex = Math.min(activeIndex, Math.max(filteredExperiences.length - 1, 0));
  const activeExperience = filteredExperiences[safeActiveIndex] ?? null;

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    setActiveIndex(0);
  }

  return (
    <section
      className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8"
      aria-label="Expérience professionnelle"
    >
      <SectionTitle icon="💼" title="Expérience" accent="indigo" />

      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mb-8" role="group" aria-label="Filtrer par catégorie">
        {CATEGORIES.map((category) => {
          const active = category === selectedCategory;
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={active}
              className={cn(
                "rounded-full px-4 py-2 text-sm border transition-all",
                active
                  ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                  : "bg-white text-slate-600 border-slate-300 hover:border-slate-500"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Cas vide */}
      {filteredExperiences.length === 0 ? (
        <p className="text-slate-500 text-center py-12">
          Aucune expérience dans cette catégorie.
        </p>
      ) : (
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          {/* Liste */}
          <ul className="space-y-4" role="list">
            {filteredExperiences.map((item, index) => {
              const active = index === safeActiveIndex;
              return (
                <li key={`${item.role}-${item.company}-${index}`}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={active}
                    aria-label={`${item.role} chez ${item.company}`}
                    className={cn(
                      "w-full text-left rounded-[28px] border p-5 transition-all",
                      active
                        ? "bg-slate-950 text-white border-slate-950 shadow-xl"
                        : "bg-white text-slate-900 border-slate-200 hover:-translate-y-1 hover:shadow-md"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                          {item.category}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                        <p className={cn("mt-1 text-sm", active ? "text-slate-300" : "text-slate-600")}>
                          {item.company}
                        </p>
                      </div>
                      <span className={cn("text-xs whitespace-nowrap", active ? "text-slate-400" : "text-slate-500")}>
                        {item.period}
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Détail */}
          {activeExperience && (
            <article
              className="rounded-[32px] border border-indigo-100 bg-gradient-to-br from-slate-50 to-indigo-50 p-6 md:p-8 shadow-sm min-h-[420px]"
              aria-live="polite"
              aria-label={`Détail : ${activeExperience.role}`}
            >
              <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-500 border border-slate-200">
                {activeExperience.accent}
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl font-semibold text-slate-950 tracking-tight">
                {activeExperience.role}
              </h3>
              <p className="mt-2 text-slate-600 text-lg">{activeExperience.company}</p>
              <p className="mt-1 text-sm text-slate-400">{activeExperience.period}</p>

              <ul className="mt-8 space-y-4">
                {activeExperience.highlights.map((point) => (
                  <li key={point} className="flex gap-4">
                    <div
                      className="mt-1 h-8 w-8 rounded-2xl bg-slate-950 text-white flex items-center justify-center text-xs shrink-0"
                      aria-hidden="true"
                    >
                      •
                    </div>
                    <p className="text-slate-600 leading-7">{point}</p>
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>
      )}
    </section>
  );
}
