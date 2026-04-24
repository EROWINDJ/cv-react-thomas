import { profile } from "../data/cv";
import profilePhoto from "../assets/thomas-vigier.jpg";

export default function Aside() {
  return (
    <aside
      className="rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(15,23,42,0.08)] overflow-hidden h-fit"
      aria-label="Informations personnelles"
    >
      <div className="p-5 md:p-6">
        {/* Photo */}
        <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          <img
            src={profilePhoto}
            alt="Portrait de Thomas Vigier"
            width={340}
            height={340}
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Identité */}
        <div className="mt-5">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 leading-none">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl text-slate-700 leading-snug">
            Formateur | Développeur indépendant
          </p>
          <p className="mt-2 text-slate-500">IA · Automatisation · Développement web</p>
          <p className="mt-5 text-slate-600 leading-8 text-[15px]">{profile.bio}</p>
        </div>

        {/* Coordonnées */}
        <address className="mt-8 pt-6 border-t border-slate-200 space-y-4 text-slate-700 not-italic">
          <div className="flex items-start gap-3">
            <span className="text-lg" aria-hidden="true">✉</span>
            <a href={`mailto:${profile.email}`} className="break-all hover:text-slate-900 transition-colors">
              {profile.email}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg" aria-hidden="true">☎</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-slate-900 transition-colors">
              {profile.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg" aria-hidden="true">⌖</span>
            <span>{profile.location}</span>
          </div>
        </address>

        {/* CTA */}
        <div className="mt-8 space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center rounded-2xl bg-slate-950 text-white px-5 py-4 text-base font-medium hover:bg-slate-800 transition-colors shadow-sm"
          >
            Me contacter
          </a>
          <a
            href="/CV_Thomas_Vigier_V2.pdf"
            download
            className="flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Télécharger mon CV (PDF)
          </a>
        </div>

        {/* Réseaux */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
            Réseaux
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn de Thomas Vigier"
            className="inline-flex items-center gap-3 text-indigo-700 hover:text-indigo-900 transition-colors break-all"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 font-semibold"
              aria-hidden="true"
            >
              in
            </span>
            <span>{profile.linkedinLabel}</span>
          </a>
        </div>

        {/* Disponibilité */}
        <div className="mt-8 rounded-[24px] bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-5">
          <div className="flex items-start gap-3">
            <span
              className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0"
              aria-hidden="true"
            />
            <div>
              <div className="font-medium text-slate-900">{profile.availability}</div>
              <div className="mt-2 text-slate-600 leading-7 text-sm">
                {profile.availabilityDetail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
