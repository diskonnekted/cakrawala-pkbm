/**
 * Flat "color block" card. No shadow, no border. Hover = scale 1.02
 * + tint intensification. Icon scales 1.10 on group hover.
 * `tone`: "white" | "muted" | tinted bg like "blue-50"/"emerald-50"/"amber-50"
 */
const hoverTint = {
  white: "hover:bg-muted",
  muted: "hover:bg-border",
  "blue-50": "hover:bg-blue-100",
  "emerald-50": "hover:bg-emerald-100",
  "amber-50": "hover:bg-amber-100",
  "red-50": "hover:bg-red-100",
};

export default function Card({ tone = "white", children, className = "", ...rest }) {
  return (
    <div
      className={`group cursor-pointer rounded-lg p-8 transition-all duration-200 hover:scale-[1.02] ${hoverTint[tone] ?? "hover:bg-muted"} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
