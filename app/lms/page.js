import Link from "next/link";
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  BarChart3,
  Layers,
  PlayCircle,
} from "lucide-react";
import { MATERI } from "@/lib/lmsData";
import MateriCard from "@/components/lms/MateriCard";

const FILTERS = ["Semua", "Jaringan Komputer", "Keamanan Siber & AI", "AI", "Otomotif"];

export default function LmsPage() {
  const totalMateri = MATERI.length;
  const totalModul = MATERI.reduce((n, m) => n + m.modules.length, 0);
  const totalPelajaran = MATERI.reduce(
    (n, m) => n + m.modules.reduce((x, mod) => x + mod.lessons.length, 0),
    0
  );
  const avgProgress = Math.round(
    MATERI.reduce((n, m) => n + m.progress, 0) / totalMateri
  );

  const STATS = [
    { icon: BookOpen, value: totalMateri, label: "Materi Aktif", color: "text-primary" },
    { icon: Layers, value: totalModul, label: "Modul", color: "text-secondary" },
    { icon: PlayCircle, value: totalPelajaran, label: "Pelajaran", color: "text-accent" },
    { icon: BarChart3, value: avgProgress + "%", label: "Progres Rata-rata", color: "text-red-500" },
  ];

  return (
    <>
      {/* Navbar LMS */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b-2 border-border">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
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
          <a
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-md h-11 px-5 text-sm font-semibold uppercase tracking-wider bg-muted text-foreground hover:bg-border transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
            Kembali ke Website
          </a>
        </nav>
      </header>

      {/* Hero LMS — dark block */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5" aria-hidden />
        <div className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-primary/10" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
            <GraduationCap className="h-4 w-4" strokeWidth={2.5} />
            Simulasi LMS
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Belajar kapan saja, di mana saja.
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl leading-relaxed">
            Platform pembelajaran daring PKBM Cakrawala. Akses materi, ikuti modul,
            dan pantau progresmu di 4 kelas skill spesialis.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/5 rounded-lg p-6">
                <s.icon className={`h-8 w-8 ${s.color}`} strokeWidth={2.5} />
                <div className={`mt-3 text-3xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs font-medium text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konten materi */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Kumpulan Materi
              </h2>
              <p className="text-gray-600">
                Pilih materi sesuai kelas skill yang kamu ikuti.
              </p>
            </div>
          </div>

          {/* Filter pills (dummy — visual only) */}
          <div className="flex flex-wrap gap-3 mb-10">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={`focus-ring rounded-md px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 ${
                  i === 0
                    ? "bg-primary text-white"
                    : "bg-white text-foreground hover:bg-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid materi */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MATERI.map((m) => (
              <MateriCard key={m.slug} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Butuh bantuan memilih kelas?
              </h2>
              <p className="text-blue-100">
                Konsultasikan jalur belajarmu dengan tim Cakrawala.
              </p>
            </div>
            <a
              href="/"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md h-14 px-8 text-base font-semibold uppercase tracking-wider bg-white text-primary hover:scale-105 transition-all duration-200"
            >
              Hubungi Kami
            </a>
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
