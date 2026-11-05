import Link from "next/link";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { href?: string; label: string }[];
  tone?: "dark" | "light";
}) {
  const quiet = tone === "light" ? "text-white/70" : "text-muted";
  const current = tone === "light" ? "text-white" : "text-navy";
  const link = tone === "light" ? "hover:text-white" : "hover:text-teal";
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${quiet}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden className="text-gold">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            ) : (
              <span className={current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
