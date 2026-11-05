import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-[16ch] font-heading text-[2.4rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{lede}</p>
        </div>
        <div className="relative lg:col-span-5">
          <div className="absolute -bottom-3 -right-3 hidden h-full w-full border border-gold/70 sm:block" aria-hidden />
          <div className="relative aspect-[16/10] overflow-hidden bg-navy">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
