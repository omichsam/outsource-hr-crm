import Link from "next/link";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const title = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-white/75" : "text-navy/70";
  return (
    <Link href="/" className="group inline-flex flex-col leading-none" aria-label="Avenyra Global, home">
      <span className={`font-heading text-[15px] font-bold tracking-[0.18em] ${title}`}>AVENYRA GLOBAL</span>
      <span className="mt-1.5 flex items-center gap-2">
        <span className="h-px w-5 bg-gold" aria-hidden />
        <span className={`text-[10px] font-medium tracking-[0.08em] ${sub}`}>People. Potential. Progress.</span>
      </span>
    </Link>
  );
}
