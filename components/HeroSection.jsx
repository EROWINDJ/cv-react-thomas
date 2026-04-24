import { profile } from "../data/cv";

const CARD_STYLES = [
  "from-indigo-50 to-white border-indigo-100",
  "from-rose-50 to-white border-rose-100",
  "from-amber-50 to-white border-amber-100",
  "from-sky-50 to-white border-sky-100",
];

export default function HeroSection() {
  return (
    <section
      className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8"
      aria-label="Présentation"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 mb-6">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        Adepte de la pédagogie, du digital et de l'automatisation
      </div>

      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-[1.1] max-w-4xl">
        {profile.tagline}
      </h2>

      <p className="mt-5 text-base md:text-lg text-slate-600 leading-8 max-w-3xl">
        {profile.summary}
      </p>

      <dl className="mt-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {profile.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`rounded-[28px] border bg-gradient-to-br p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all ${CARD_STYLES[index % CARD_STYLES.length]}`}
          >
            <dt className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-none">
              {stat.value}
            </dt>
            <dd className="mt-4 text-slate-600 text-sm md:text-base leading-7">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
