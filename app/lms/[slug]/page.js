import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Clock,
  BarChart3,
  Award,
  ChevronDown,
  PlayCircle,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { getMateri } from "@/lib/lmsData";

const colorMap = {
  primary: { bar: "bg-primary", text: "text-primary", badge: "bg-blue-50 text-primary", solid: "bg-primary text-white" },
  secondary: { bar: "bg-secondary", text: "text-secondary", badge: "bg-emerald-50 text-secondary", solid: "bg-secondary text-white" },
  accent: { bar: "bg-accent", text: "text-accent", badge: "bg-amber-50 text-accent", solid: "bg-accent text-foreground" },
  dark: { bar: "bg-foreground", text: "text-foreground", badge: "bg-gray-100 text-foreground", solid: "bg-foreground text-white" },
};

function generateStaticParams() {
  return [{ slug: "jaringan-komputer" }, { slug: "keamanan-siber-ai" }, { slug: "kecerdasan-buatan" }, { slug: "otomotif" }];
}

export function generateMetadata({ params }) {
  const m = getMateri(params.slug);
  return { title: m ? `${m.title} — LMS PKBM Cakrawala` : "Materi LMS" };
}

export default function MateriDetail({ params }) {
  const m = getMateri(params.slug);
  if (!m) notFound();
  const c = colorMap[m.color];
  const totalLessons = m.modules.reduce((n, mod) => n + mod.lessons.length, 0);
  // Dummy: mark first N lessons "done" based on progress
  const doneCount = Math.round((m.progress / 100) * totalLessons);

  let flat = 0;

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b-2 border-border">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/lms" className="flex items-center gap-3 group">
            <span className="h-12 rounded-md transition-transform duration-200 group-hover:scale-110 shrink-0">
              <img src="/img/logo.png" alt="Logo PKBM Cakrawala" className="h-12 w-auto" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-extrabold text-xl tracking-tight">
                PKBM<span className="text-primary"> Cakrawala</span>
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-wider text-gray-500 mt-1">
                Learning Portal
              </span>
            </span>
          </Link>
          <Link
            href="/lms"
            className="focus-ring inline-flex items-center gap-2 rounded-md h-11 px-5 text-sm font-semibold uppercase tracking-wider bg-muted text-foreground hover:bg-border transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            Semua Materi
          </Link>
        </nav>
      </header>

      {/* Banner cover */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0" aria-hidden>
          <img src={m.cover} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <span className={`inline-block rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${c.solid}`}>
            {m.kelas}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {m.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">{m.desc}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-white/90">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="h-5 w-5" strokeWidth={2.5} /> {totalLessons} pelajaran
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Clock className="h-5 w-5" strokeWidth={2.5} /> {m.durasi}
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Award className="h-5 w-5" strokeWidth={2.5} /> {m.level}
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <BarChart3 className="h-5 w-5" strokeWidth={2.5} /> Progres {m.progress}%
            </span>
          </div>
        </div>
      </section>

      {/* Konten: sidebar info + list modul */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-8">
          {/* Sidebar info */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-extrabold tracking-tight">Ringkasan</h3>
              <dl className="mt-5 space-y-4">
                {[
                  ["Kelas", m.kelas],
                  ["Level", m.level],
                  ["Durasi", m.durasi],
                  ["Modul", String(m.modules.length)],
                  ["Pelajaran", String(totalLessons)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center text-sm">
                    <dt className="text-gray-500 font-medium">{k}</dt>
                    <dd className="font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-5 border-t-2 border-muted">
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-gray-600">Progres Kamu</span>
                  <span className={c.text}>{m.progress}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${m.progress}%` }} />
                </div>
              </div>
              <button className="focus-ring mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md h-14 px-6 text-base font-semibold uppercase tracking-wider bg-primary text-white hover:bg-primary-hover hover:scale-105 transition-all duration-200">
                <PlayCircle className="h-5 w-5" strokeWidth={2.5} />
                Lanjutkan Belajar
              </button>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-extrabold tracking-tight">Sertifikat</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Dapatkan sertifikat penyelesaian setelah menyelesaikan 100% materi dan
                melalui asesmen akhir.
              </p>
            </div>
          </aside>

          {/* List modul accordion */}
          <div className="lg:col-span-8 space-y-4">
            {m.modules.map((mod, mi) => (
              <details
                key={mod.title}
                open={mi === 0}
                className="group bg-white rounded-lg overflow-hidden"
              >
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none focus-ring">
                  <span className={`h-12 w-12 shrink-0 rounded-lg grid place-items-center font-extrabold text-lg ${c.solid}`}>
                    {mi + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xl font-bold tracking-tight">{mod.title}</span>
                    <span className="block mt-1 text-sm text-gray-500">
                      {mod.lessons.length} pelajaran · {mod.durasi}
                    </span>
                  </span>
                  <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-200 group-open:rotate-180" strokeWidth={2.5} />
                </summary>
                <div className="border-t-2 border-border px-6 pb-6 pt-2">
                  <ul className="divide-y-2 divide-border">
                    {mod.lessons.map((lesson) => {
                      const done = flat < doneCount;
                      flat += 1;
                      return (
                        <li key={lesson} className="flex items-center gap-4 py-3.5">
                          {done ? (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" strokeWidth={2.5} />
                          ) : (
                            <Circle className="h-5 w-5 shrink-0 text-gray-300" strokeWidth={2.5} />
                          )}
                          <span className={`flex-1 text-sm font-medium ${done ? "text-gray-500" : ""}`}>
                            {lesson}
                          </span>
                          <span className="text-xs font-medium text-gray-400">08:00</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent" strokeWidth={2.5} />
            PKBM Cakrawala — Learning Portal
          </span>
          <span>Simulasi LMS · Data dummy</span>
        </div>
      </footer>
    </>
  );
}
