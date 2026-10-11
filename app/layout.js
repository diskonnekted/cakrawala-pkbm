import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "PKBM Cakrawala — Pendidikan Setara SMA dengan Kelas Skill Spesialis",
  description:
    "Pendidikan program Paket C setara SMA. Spesial: kelas skill Jaringan Komputer, Keamanan Siber & AI, serta Otomotif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
