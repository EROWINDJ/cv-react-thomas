// App.jsx — point d'entrée de l'application
// Toutes les données sont dans src/data/cv.js
// Chaque section est un composant dans src/components/
import Aside from "./components/Aside";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <div className="grid xl:grid-cols-[340px_1fr] gap-6">
          <Aside />

          <main className="space-y-6">
            <HeroSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
          </main>
        </div>
      </div>
    </div>
  );
}
