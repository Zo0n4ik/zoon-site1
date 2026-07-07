import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navItems, telegramUrl } from "@/app/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-mint/[0.30] bg-mint/[0.12] text-[16px] font-semibold tracking-[0.08em] text-mint">
              ZS
            </span>
            <span className="font-semibold">Zo0n Sites</span>
          </div>
          <p className="mt-4 max-w-xl leading-7 text-white/[0.58]">
            Понятные сайты для мастеров, услуг и локального бизнеса: структура, цены, фото, контакты и кнопки связи.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint transition hover:text-cyan"
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Telegram: @Zo0n4ik
          </a>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3" aria-label="Навигация в футере">
          {navItems.map((item) => (
            <Link key={item.href} className="text-white/[0.58] transition hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
