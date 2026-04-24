import { studies } from "../data/cv";
import SectionTitle from "./SectionTitle";

export default function EducationSection() {
  return (
    <section
      className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6 md:p-8"
      aria-label="Formation"
    >
      <SectionTitle icon="🎓" title="Formation" accent="amber" />

      <ul className="space-y-4">
        {studies.map((item) => (
          <li
            key={`${item.title}-${item.period}`}
            className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 hover:bg-white hover:shadow-sm transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-lg">{item.school}</p>
              </div>
              <time
                className="text-slate-400 text-lg whitespace-nowrap"
                dateTime={item.period}
              >
                {item.period}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
