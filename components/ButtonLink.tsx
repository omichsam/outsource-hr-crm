import Link from "next/link";

type Variant = "primary" | "secondary" | "light" | "outlineLight";

const variants: Record<Variant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "bg-white text-navy ring-1 ring-navy/15 hover:ring-teal hover:text-teal",
  light: "bg-white text-navy hover:bg-mist",
  outlineLight: "bg-transparent text-white ring-1 ring-white/50 hover:bg-white/10",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 text-[15px] font-semibold transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
