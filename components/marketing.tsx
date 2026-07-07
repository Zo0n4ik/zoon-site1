import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink, Send } from "lucide-react";
import { telegramUrl } from "@/app/data";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cx(
        "mb-10 flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {text ? <p className="text-base leading-7 text-white/[0.66] md:text-lg">{text}</p> : null}
    </div>
  );
}

export function ButtonLink({
  children,
  href = telegramUrl,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const styles = {
    primary: "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:bg-mint",
    secondary:
      "border border-white/[0.14] bg-white/[0.06] text-white hover:-translate-y-0.5 hover:border-cyan/[0.55] hover:bg-white/[0.1]",
    ghost: "text-white/[0.78] hover:text-white",
  }[variant];
  const icon =
    href.startsWith("http") && !href.includes("t.me") ? (
      <ExternalLink className="h-4 w-4" />
    ) : variant === "primary" ? (
      <Send className="h-4 w-4" />
    ) : (
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    );

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a className={cx(base, styles, className)} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={cx(base, styles, className)} href={href}>
      {content}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-semibold text-white md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.68] md:text-xl">{text}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function PortfolioCard({
  project,
  large = false,
}: {
  project: {
    title: string;
    niche: string;
    url: string;
    image: string;
    description: string;
    demonstrates: string;
    tags: string[];
    theme: string;
  };
  large?: boolean;
}) {
  return (
    <article
      className={cx(
        "glass-panel group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan/[0.40]",
        large && "lg:grid lg:grid-cols-[1.08fr_0.92fr]"
      )}
    >
      <a
        className={cx("block overflow-hidden bg-gradient-to-br p-3", project.theme, large ? "lg:min-h-full" : "")}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Открыть сайт ${project.title}`}
      >
        <div className="rounded-xl border border-white/[0.12] bg-black/[0.30] p-2 shadow-card">
          <div className="mb-2 flex gap-1.5 px-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/[0.80]" />
          </div>
          <Image
            className="aspect-[16/10] w-full rounded-lg object-cover object-top transition duration-500 group-hover:scale-[1.025]"
            src={project.image}
            alt={`Превью проекта ${project.title}`}
            width={1200}
            height={750}
            loading="lazy"
          />
        </div>
      </a>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-cyan">{project.niche}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-white/[0.66]">{project.description}</p>
        <div className="mt-5 rounded-xl border border-white/[0.10] bg-white/[0.04] p-4">
          <p className="text-sm font-semibold text-white">Что демонстрирует проект</p>
          <p className="mt-2 text-sm leading-6 text-white/[0.62]">{project.demonstrates}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-xs text-white/[0.70]">
              {tag}
            </span>
          ))}
        </div>
        <ButtonLink href={project.url} variant="secondary" className="mt-6 w-full">
          Смотреть сайт
        </ButtonLink>
      </div>
    </article>
  );
}

export function PricingCard({
  tariff,
}: {
  tariff: {
    name: string;
    price: string;
    note: string;
    description: string;
    featured?: boolean;
    items: string[];
  };
}) {
  return (
    <article
      className={cx(
        "glass-panel flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/[0.35]",
        tariff.featured && "ring-1 ring-mint/[0.45]"
      )}
    >
      <div className="mb-6 flex min-h-7 items-start justify-between gap-4">
        <span className="h-2 w-24 rounded-full bg-gradient-to-r from-mint via-cyan to-violet-300" />
        <span className="rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/[0.70]">
          {tariff.note}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{tariff.name}</h3>
      <p className="mt-3 text-3xl font-semibold text-mint">{tariff.price}</p>
      <p className="mt-4 min-h-14 leading-7 text-white/[0.62]">{tariff.description}</p>
      <ul className="mt-6 flex-1 space-y-3 text-white/[0.72]">
        {tariff.items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ButtonLink className="mt-8 w-full">Обсудить тариф</ButtonLink>
    </article>
  );
}

export function FinalCTA({
  title = "Хотите сайт, который можно спокойно отправлять клиентам?",
  text = "Напишите, чем занимаетесь, какие услуги нужно показать и какой результат хотите получить от сайта.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-shell pb-20 pt-12">
      <div className="rounded-3xl border border-cyan/[0.20] bg-[linear-gradient(135deg,rgba(69,240,165,.16),rgba(66,217,255,.14),rgba(152,122,255,.1)),rgba(10,16,24,.94)] p-6 shadow-soft md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">контакт</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-white md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/[0.68]">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink>Написать в Telegram</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              Посмотреть портфолио
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
