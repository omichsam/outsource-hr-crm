"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content/company";
import { Logo } from "./Logo";

function active(href: string, path: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "border-line shadow-[0_8px_24px_rgba(20,43,69,0.06)]" : "border-transparent"
      }`}
    >
      <div className="h-0.5 bg-gold" />
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 min-[1120px]:flex" aria-label="Primary">
          {nav.map((item) => {
            const on = active(item.href, path);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={`relative py-2 text-[14px] font-medium transition-colors ${
                  on ? "text-teal" : "text-navy/80 hover:text-navy"
                }`}
              >
                {item.label}
                {on && <span className="absolute inset-x-0 -bottom-px h-px bg-teal" />}
              </Link>
            );
          })}
        </nav>
        <div className="hidden min-[1120px]:block">
          <Link
            href="/contact?enquiry=consultation"
            className="inline-flex min-h-11 items-center bg-teal px-4 text-[14px] font-semibold text-white transition hover:bg-teal-dark"
          >
            Request a Consultation
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-navy min-[1120px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-white min-[1120px]:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => {
              const on = active(item.href, path);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={on ? "page" : undefined}
                  className={`border-b border-line py-3.5 text-base font-medium ${on ? "text-teal" : "text-navy"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact?enquiry=consultation"
              className="mt-4 inline-flex min-h-12 items-center justify-center bg-teal px-4 text-[15px] font-semibold text-white"
            >
              Request a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
