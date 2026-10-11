import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary",
  secondary:
    "bg-muted text-foreground hover:bg-border focus-visible:ring-primary",
  outline:
    "border-4 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  "outline-white":
    "border-4 border-white text-white hover:bg-white hover:text-foreground focus-visible:ring-white",
  dark: "bg-foreground text-white hover:bg-black focus-visible:ring-white",
};

/**
 * Flat-design button. No shadow. Hover = scale + color shift.
 * Use as <a> (href) or <button>.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-md h-14 px-8 text-base font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-100 ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
