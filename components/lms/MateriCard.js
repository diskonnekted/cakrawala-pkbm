import Link from "next/link";
import { Clock, BarChart3, BookOpen } from "lucide-react";

const colorBar = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  dark: "bg-foreground",
};
const colorText = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  dark: "text-foreground",
};
const colorBadge = {
  primary: "bg-blue-50 text-primary",
  secondary: "bg-emerald-50 text-secondary",
  accent: "bg-amber-50 text-accent",
  dark: "bg-gray-100 text-foreground",
};

/**
 * Flat LMS materi card. Cover photo + badge kelas + progress bar. No shadow.
 */
export default function MateriCard({ m }) {
  const totalLessons = m.modules.reduce((n, mod) => n + mod.lessons.length, 0);
  return (
    <Link
      href={`/lms/${m.slug}`}
      className="group flex flex-col rounded-lg bg-white overflow-hidden transition-all duration-200 hover:scale-[1.02] focus-ring"
    >
      {/* Cover */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={m.cover}
          alt={m.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${colorBadge[m.color]}`}
        >
          {m.kelas}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-extrabold tracking-tight leading-snug">
          {m.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{m.desc}</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" strokeWidth={2.5} />
            {totalLessons} materi
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
            {m.durasi}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-5 pt-4 border-t-2 border-muted">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="flex items-center gap-1.5 text-gray-600">
              <BarChart3 className="h-3.5 w-3.5" strokeWidth={2.5} />
              Progres
            </span>
            <span className={colorText[m.color]}>{m.progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full rounded-full ${colorBar[m.color]}`}
              style={{ width: `${m.progress}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
