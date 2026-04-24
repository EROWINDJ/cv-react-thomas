// Composant partagé — défini UNE FOIS en dehors de tout composant parent
// pour éviter d'être recréé à chaque render.
import { cn } from "../lib/cn";

const accentStyles = {
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  rose: "bg-rose-50 text-rose-700 border-rose-100",
};

export default function SectionTitle({ icon, title, accent = "indigo" }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className={cn(
          "h-10 w-10 rounded-2xl flex items-center justify-center text-sm font-semibold border",
          accentStyles[accent]
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
    </div>
  );
}
