"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { navItems, telegramUrl } from "@/app/data";
import { cx } from "./marketing";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/[0.78] backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link className="flex items-center gap-3 text-white" href="/" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-mint/[0.30] bg-mint/[0.12] text-[17px] font-semibold leading-none tracking-[0.08em] text-mint shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            ZS
          </span>
          <span className="font-semibold">Zo0n Sites</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={cx(
                "rounded-lg px-3 py-2 text-sm font-medium text-white/[0.64] transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan",
                isActive(pathname, item.href) && "bg-white/[0.08] text-white"
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Обсудить сайт
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.05] text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan lg:hidden"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.08] bg-ink/[0.96] lg:hidden">
          <nav className="section-shell grid gap-2 py-4" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cx(
                  "rounded-xl px-4 py-3 text-base font-medium text-white/[0.72] transition hover:bg-white/[0.06] hover:text-white",
                  isActive(pathname, item.href) && "bg-white/[0.08] text-white"
                )}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-ink"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Обсудить сайт
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
