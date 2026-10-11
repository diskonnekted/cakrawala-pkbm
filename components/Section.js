/**
 * Section with sharp color-block backgrounds (white / muted / accent / dark).
 * Sharp color transitions between sections = flat "poster" look.
 * `bg`: "white" | "muted" | "primary" | "secondary" | "accent" | "dark"
 */
const bgMap = {
  white: "bg-white text-foreground",
  muted: "bg-muted text-foreground",
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  accent: "bg-accent text-foreground",
  dark: "bg-foreground text-white",
};

export default function Section({
  id,
  bg = "white",
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bgMap[bg]} ${className}`}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {children}
      </div>
    </section>
  );
}
