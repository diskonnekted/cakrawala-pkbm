import {
  GraduationCap,
  Network,
  ShieldCheck,
  Cpu,
  Wrench,
  BookOpen,
  Users,
  Clock,
  Check,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  BadgeCheck,
  Award,
  MessageSquare,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Card from "@/components/Card";

const NAV = [
  { label: "Program", href: "#program" },
  { label: "Kelas Skill", href: "#kelas" },
  { label: "Kenapa Kami", href: "#keunggulan" },
  { label: "Daftar", href: "#daftar" },
  { label: "LMS", href: "/lms" },
];

// ---- Data ----------------------------------------------------------------

const KELAS = [
  {
    icon: Network,
    title: "Skill Jaringan Komputer",
    desc: "Membangun, mengkonfigurasi, dan mengelola jaringan lokal sampai backbone. Praktik langsung: cabling, routing, switching, dan manajemen server.",
    points: ["CCNA-style foundation", "Lab Cisco/Praktik nyata", "Sertifikasi pendukung"],
    tone: "blue-50",
    iconColor: "bg-primary text-white",
    dot: "bg-primary",
    img: "/img/comp-network2.jpg",
    alt: "Ilustrasi kelas skill jaringan komputer",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Siber & AI",
    desc: "Fundamental security, etika & hukum siber, plus pengenalan praktis AI/ML. Cocok untuk jalur karier IT yang paling diminati industri.",
    points: ["Ethical hacking dasar", "Cyber defense", "Introduksi AI & Python"],
    tone: "emerald-50",
    iconColor: "bg-secondary text-white",
    dot: "bg-secondary",
    img: "/img/security2.jpg",
    alt: "Ilustrasi kelas skill keamanan siber dan AI",
  },
  {
    icon: Cpu,
    title: "AI (Kecerdasan Buatan)",
    desc: "Dari dasar logika hingga membangun model sederhana dengan Python. Berpikir komputasional + literasi AI untuk siap kerja masa depan.",
    points: ["Python & data dasar", "Model AI sederhana", "Proyek akhir terbimbing"],
    tone: "amber-50",
    iconColor: "bg-accent text-foreground",
    dot: "bg-accent",
    img: "/img/ai2.jpg",
    alt: "Ilustrasi kelas skill AI kecerdasan buatan",
  },
  {
    icon: Wrench,
    title: "Otomotif",
    desc: "Pelatihan hands-on perawatan dan perbaikan kendaraan: mesin, kelistrikan, dan diagnostik. Skema kurikulum setara SMK jurusan otomotif.",
    points: ["Praktik bengkel", "Diagnostik & kelistrikan", "Standar kerja industri"],
    tone: "red-50",
    iconColor: "bg-foreground text-white",
    dot: "bg-foreground",
    img: "/img/automotive2.jpg",
    alt: "Ilustrasi kelas skill otomotif",
  },
];

const KEUNGGULAN = [
  {
    icon: GraduationCap,
    title: "Ijazah Setara SMA",
    desc: "Kurikulum PKBM terakreditasi, diawasi Kemendikbud. Ijazah Paket C setara SMA, diakui nasional.",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    desc: "Pagi / sore / malam & blended learning. Bisa sambil bekerja atau kuliah.",
  },
  {
    icon: Users,
    title: "Rombongan Kecil",
    desc: "Kelas terbatas agar tiap peserta mendapat pendampingan dan akses lab optimal.",
  },
  {
    icon: BadgeCheck,
    title: "Instruktur Praktisi",
    desc: "Dibimbing tutor berpengalaman, banyak bersertifikat dan aktif di industri.",
  },
  {
    icon: Award,
    title: "Skill + Ijazah",
    desc: "Lulus dengan ijazah SMA dan portofolio skill yang bisa langsung dipakai melamar kerja.",
  },
  {
    icon: MessageSquare,
    title: "Pendampingan Total",
    desc: "Counseling karier, bimbingan belajar, dan alumni network yang aktif.",
  },
];

const LANGKAH = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Konsultasi & Registrasi",
    desc: "Hubungi kami, konsultasikan jalur & kelas skill pilihan. Pendaftaran mudah, online/offline.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Seleksi & Asesmen",
    desc: "Asesmen kemampuan dasar untuk penempatan kelas yang tepat. Tidak menghapal, tapi mengasah.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Belajar + Praktik",
    desc: "Teori, praktik lab, dan proyek. Kombinasikan mata pelajaran umum dengan kelas skill pilihan.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Ujian & Lulusan",
    desc: "Ujian persamaan & KKM. Lulus dengan ijazah Paket C setara SMA dan portofolio skill.",
  },
];

const STATS = [
  { value: "4", label: "Kelas Skill Spesialis", color: "text-primary" },
  { value: "90%", label: "Peserta Lolos Ujian Persamaan", color: "text-secondary" },
  { value: "1:15", label: "Rasio Tutor : Peserta", color: "text-accent" },
  { value: "2", label: "Jalur: Reguler / Intensif", color: "text-red-500" },
];

// ---- Decorative flat shapes ----------------------------------------------

function Decor({ shape }) {
  if (shape === "circles")
    return (
      <>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute top-1/3 right-1/4 h-24 w-24 rotate-12 rounded-lg bg-white/10" />
      </>
    );
  if (shape === "accent-circles")
    return (
      <>
        <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-white/20" />
        <div className="absolute bottom-0 left-1/4 h-40 w-40 -rotate-12 rounded-lg bg-white/10" />
      </>
    );
  if (shape === "muted-circles")
    return (
      <>
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-primary/5" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-secondary/5" />
      </>
    );
  return null;
}

// ---- Page ----------------------------------------------------------------

export default function Home() {
  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b-2 border-line">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="h-12 rounded-md transition-transform duration-200 group-hover:scale-110 shrink-0">
              <img
                src="/img/logo.png"
                alt="Logo PKBM Cakrawala"
                className="h-12 w-auto"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-extrabold text-xl tracking-tight">
                PKBM<span className="text-primary"> Cakrawala</span>
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-wider text-gray-500 mt-1">
                Community Learning Center
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="focus-ring text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors duration-200"
              >
                {n.label}
              </a>
            ))}
          </div>

          <Button href="#daftar" variant="primary" className="h-12 px-6 text-sm">
            Daftar Sekarang
          </Button>
        </nav>
      </header>

      {/* ===================== HERO ===================== */}
      <Section bg="primary" className="pt-24 pb-28">
        <Decor shape="circles" />
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-flex items-center gap-2 bg-white text-primary rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <BadgeCheck className="h-4 w-4" strokeWidth={2.5} />
              Terakreditasi · Diawasi Kemendikbud
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Selesai SMA.
              <br />
              Berbekal <span className="bg-white text-primary px-3 rounded-lg">Skill</span> yang
              dicari industri.
            </h1>
            <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
              PKBM Cakrawala menyelenggarakan Pendidikan Program <strong className="text-white">Paket C setara SMA</strong>,
              dengan kelas skill spesialis: <strong className="text-white">Jaringan Komputer</strong>,{" "}
              <strong className="text-white">Keamanan Siber &amp; AI</strong>, dan{" "}
              <strong className="text-white">Otomotif</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#daftar" variant="outline-white" className="h-16">
                Daftar Sekarang <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#kelas" variant="outline-white" className="h-16">
                Lihat Kelas Skill
              </Button>
            </div>
          </div>

          {/* Hero photo — flat frame, sharp radius, no shadow, ring accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden bg-muted ring-4 ring-white/30">
              <img
                src="/img/hero.jpg"
                alt="Suasana belajar di PKBM Cakrawala"
                loading="eager"
                className="h-full w-full object-cover aspect-[4/3]"
              />
              {/* Flat accent corner — geometric, no depth */}
              <div className="absolute bottom-0 right-0 h-16 w-16 bg-accent rounded-tl-lg" aria-hidden />
              <div className="absolute bottom-0 right-16 h-8 w-8 bg-white/80 rounded-tl-md" aria-hidden />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 rounded-lg overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="bg-primary p-8">
              <div className={`text-4xl sm:text-5xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="mt-2 text-sm font-medium text-blue-100">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== PROGRAM ===================== */}
      <Section id="program" bg="muted">
        <Decor shape="muted-circles" />
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Program
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Paket C, setara SMA, dengan jalur yang lebih jelas.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Program Paket C adalah jalur pendidikan nonformal setara SMA untuk yang ingin
              melanjutkan, bekerja, atau memasuki dunia industri — tanpa harus duduk di bangku
              SMA reguler. Di Cakrawala, kamu memilih <strong>jalur skill</strong> yang jadi
              pembeda lamaran pertamamu.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Setara SMA", d: "Ijazah diakui untuk melamar kerja & lanjut ke perguruan tinggi." },
              { t: "Kurikulum Nasional", d: "Disusun sesuai standar PKBM & KKM Kemendikbud." },
              { t: "Blended Learning", d: "Kombinasi tatap muka, online, dan praktik lab." },
              { t: "2 Jalur", d: "Reguler (fleksibel) atau Intensif (lebih cepat)." },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-bold text-lg">{x.t}</h3>
                <p className="mt-1 text-sm text-gray-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== KELAS SKILL (spesial) ===================== */}
      <Section id="kelas" bg="white">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 bg-accent/15 text-accent rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <Award className="h-4 w-4" strokeWidth={2.5} />
            Yang Membuat Kami Spesial
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            4 Kelas Skill yang tidak kamu temukan di PKBM lain.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Di atas kurikulum Paket C, kamu mendalami satu (atau lebih) spesialisasi dengan
            praktik langsung dan instruktur praktisi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {KELAS.map((k) => (
            <Card key={k.title} tone={k.tone}>
              {/* Flat image header — sharp radius, no shadow, subtle zoom on hover */}
              <div className="relative h-52 overflow-hidden rounded-lg mb-6 bg-muted">
                <img
                  src={k.img}
                  alt={k.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute -bottom-6 left-6 h-14 w-14 rounded-lg grid place-items-center shadow-none ring-4 ring-white transition-transform duration-200 group-hover:scale-110 ${k.iconColor}`}
                >
                  <k.icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">{k.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{k.desc}</p>
              <ul className="mt-6 space-y-2">
                {k.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium">
                    <span className={`h-2.5 w-2.5 rounded-full ${k.dot}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===================== KEUNGGULAN ===================== */}
      <Section id="keunggulan" bg="dark">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Kenapa PKBM Cakrawala
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Bukan sekadar ijazah. Tapi bekal yang bisa langsung dipakai.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEUNGGULAN.map((k) => (
            <Card key={k.title} tone="muted" className="!bg-white/5 !hover:bg-white/10">
              <div className="h-14 w-14 rounded-full bg-white text-primary grid place-items-center mb-6 transition-transform duration-200 group-hover:scale-110">
                <k.icon className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold">{k.title}</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">{k.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===================== LANGKAH / CARA DAFTAR ===================== */}
      <Section id="daftar" bg="muted">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Cara Daftar
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Empat langkah menuju kelulusan yang lebih siap.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANGKAH.map((l) => (
            <div key={l.step} className="relative bg-white rounded-lg p-8 hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="h-14 w-14 rounded-lg bg-primary text-white grid place-items-center">
                  <l.icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <span className="text-5xl font-extrabold text-border leading-none">{l.step}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{l.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-16 bg-primary rounded-lg p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Siap mulai? Pendaftaran dibuka untuk angkatan baru.
              </h3>
              <p className="text-blue-100 text-lg">
                Konsultasikan kelas skill dan jalur belajarmu — tim kami bantu carikan yang pas.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-4 flex-wrap">
              <Button variant="outline-white" className="h-16">
                WhatsApp Kami
              </Button>
              <Button variant="secondary" className="h-16">
                Unduh Brosur
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <span className="h-11 shrink-0">
                <img
                  src="/img/logo.png"
                  alt="Logo PKBM Cakrawala"
                  className="h-11 w-auto"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-extrabold text-lg">PKBM Cakrawala</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-wider text-gray-500 mt-1">
                  Community Learning Center
                </span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pendidikan nonformal setingkat SMA dengan kelas skill spesialis: Jaringan,
              Keamanan Siber &amp; AI, dan Otomotif.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Navigasi</h4>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Kelas Skill</h4>
            {KELAS.map((k) => (
              <a key={k.title} href="#kelas" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {k.title}
              </a>
            ))}
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Kontak</h4>
            <p className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> Jl. Cakrawala No. 12, Kota — Indonesia
            </p>
            <p className="flex items-center gap-3 text-sm text-gray-400">
              <Phone className="h-4 w-4 shrink-0 text-accent" /> +62 812-3456-7890
            </p>
            <p className="flex items-center gap-3 text-sm text-gray-400">
              <Mail className="h-4 w-4 shrink-0 text-accent" /> halo@pkbmcakrawala.id
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} PKBM Cakrawala. Semua hak dilindungi.</span>
            <span>Mendukung pendidikan setara, siap kerja.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
