// Dummy data LMS PKBM Cakrawala — 4 materi (satu per kelas skill).
// ponytail: static data, no backend; upgrade to CMS/DB when real content exists.

export const MATERI = [
  {
    slug: "jaringan-komputer",
    title: "Dasar-dasar Jaringan Komputer",
    kelas: "Jaringan Komputer",
    cover: "/img/comp-network2.jpg",
    level: "Pemula → Menengah",
    durasi: "48 jam pelajaran",
    progress: 65,
    color: "primary",
    desc: "Materi inti kelas Jaringan Komputer: dari konsep dasar, topologi, hingga konfigurasi router & switch dan troubleshooting jaringan produksi.",
    modules: [
      {
        title: "Fundamen Jaringan",
        lessons: [
          "Pengertian Jaringan & Topologi",
          "Model OSI & TCP/IP",
          "Alamat IP, Subnetting & DHCP",
          "Perangkat Jaringan: NIC, Hub, Switch, Router",
        ],
        durasi: "12 JP",
      },
      {
        title: "Topologi & Cabling",
        lessons: [
          "Jenis Topologi (Star, Bus, Mesh)",
          "Pembuatan Kabel UTP & Fiber",
          "Crimping & Pengujian Kabel",
          "Manajemen Kabel & Rack Server",
        ],
        durasi: "12 JP",
      },
      {
        title: "Routing & Switching",
        lessons: [
          "Konfigurasi Switch VLAN",
          "Protokol Routing (Static & Dynamic)",
          "NAT & Port Forwarding",
          "Setup Network pada Linux & Windows",
        ],
        durasi: "12 JP",
      },
      {
        title: "Troubleshooting & Praktik",
        lessons: [
          "Tools Diagnostik (ping, traceroute, wireshark)",
          "Analisis Log & Monitoring",
          "Studi Kasus: Perbaikan Jaringan Kantor",
          "Proyek Akhir: Bangun Jaringan Lab",
        ],
        durasi: "12 JP",
      },
    ],
  },
  {
    slug: "keamanan-siber-ai",
    title: "Keamanan Siber & Pengenalan AI",
    kelas: "Keamanan Siber & AI",
    cover: "/img/security2.jpg",
    level: "Menengah",
    durasi: "48 jam pelajaran",
    progress: 40,
    color: "secondary",
    desc: "Menggabungkan fundamental security, praktik ethical hacking, cyber defense, dan pengenalan AI/ML dengan Python — jalur karier IT yang paling diminati industri.",
    modules: [
      {
        title: "Fundamen Keamanan Siber",
        lessons: [
          "Konsep CIA Triad & Threat Landscape",
          "Autentikasi, Kriptografi & Manajemen Akses",
          "Keamanan Jaringan & Firewall",
          "Hukum & Etika Siber di Indonesia",
        ],
        durasi: "12 JP",
      },
      {
        title: "Ethical Hacking Dasar",
        lessons: [
          "Reconnaissance & Scanning (nmap)",
          "Teknik Penetration Testing",
          "Web Application Security (OWASP Top 10)",
          "Lab: CTF & Write-up",
        ],
        durasi: "12 JP",
      },
      {
        title: "Cyber Defense",
        lessons: [
          "Incident Response & Forensik Dasar",
          "SIEM & Log Analysis",
          "Hardening Server & Endpoint",
          "Security Operations Center (SOC) Overview",
        ],
        durasi: "12 JP",
      },
      {
        title: "Pengenalan AI & Python",
        lessons: [
          "Python untuk Cybersecurity",
          "Konsep Machine Learning Dasar",
          "Automasi Defense dengan Skrip",
          "Studi Kasus: Deteksi Anomali",
        ],
        durasi: "12 JP",
      },
    ],
  },
  {
    slug: "kecerdasan-buatan",
    title: "AI & Machine Learning untuk Pemula",
    kelas: "AI",
    cover: "/img/ai2.jpg",
    level: "Pemula → Menengah",
    durasi: "48 jam pelajaran",
    progress: 20,
    color: "accent",
    desc: "Dari logika komputasional dan Python hingga membangun model AI sederhana. Membekali lulusan dengan literasi AI dan portofolio proyek yang siap pakai.",
    modules: [
      {
        title: "Logika & Python Dasar",
        lessons: [
          "Berpikir Komputasional",
          "Python: Variabel, Logika, Fungsi",
          "Struktur Data & OOP Dasar",
          "Git & Manajemen Proyek",
        ],
        durasi: "12 JP",
      },
      {
        title: "Data & Preparasi",
        lessons: [
          "Pengantar Data Science",
          "NumPy & Pandas",
          "Visualisasi Data (Matplotlib)",
          "Pembersihan & EDA Dataset",
        ],
        durasi: "12 JP",
      },
      {
        title: "Model AI Sederhana",
        lessons: [
          "Supervised Learning: Regresi & Klasifikasi",
          "Scikit-learn dari Nol",
          "Evaluasi Model & Metrics",
          "Pengantar Deep Learning",
        ],
        durasi: "12 JP",
      },
      {
        title: "Proyek Akhir",
        lessons: [
          "Pilih & Definisikan Masalah",
          "Bangun & Latih Model",
          "Deploy Sederhana (API/Web)",
          "Presentasi & Portofolio",
        ],
        durasi: "12 JP",
      },
    ],
  },
  {
    slug: "otomotif",
    title: "Teknik Otomotif & Diagnostik",
    kelas: "Otomotif",
    cover: "/img/automotive2.jpg",
    level: "Pemula",
    durasi: "48 jam pelajaran",
    progress: 80,
    color: "dark",
    desc: "Pelatihan hands-on perawatan dan perbaikan kendaraan: mesin, kelistrikan, dan diagnostik. Skema kurikulum setara SMK jurusan otomotif dengan praktik bengkel.",
    modules: [
      {
        title: "Dasar Mesin & Komponen",
        lessons: [
          "Prinsip Kerja Mesin 4 Langkah",
          "Sistem Bahan Bakar & Pengapian",
          "Pelumasan & Pendinginan",
          "Identifikasi Komponen Mesin",
        ],
        durasi: "12 JP",
      },
      {
        title: "Sistem Kelistrikan Kendaraan",
        lessons: [
          "Dasar Listrik & Multimeter",
          "Aki, Starter & Alternator",
          "Baca Wiring Diagram",
          "Praktik Instalasi Kelistrikan",
        ],
        durasi: "12 JP",
      },
      {
        title: "Diagnostik & Troubleshooting",
        lessons: [
          "OBD-II & Scan Tool",
          "Analisis Gejala & Diagnosa",
          "Sistem Rem & Kemudi",
          "Sistem Transmisi Dasar",
        ],
        durasi: "12 JP",
      },
      {
        title: "Praktik Bengkel & Standar Kerja",
        lessons: [
          "Keselamatan Kerja Bengkel",
          "Prosedur Perawatan Berkala",
          "Standar Industri & SOP",
          "Proyek: Perawatan Kendaraan Nyata",
        ],
        durasi: "12 JP",
      },
    ],
  },
];

export function getMateri(slug) {
  return MATERI.find((m) => m.slug === slug);
}
