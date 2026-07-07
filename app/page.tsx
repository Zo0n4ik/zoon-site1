import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  LayoutGrid,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { portfolioProjects, tariffs, telegramUrl } from "./data";
import { ButtonLink, FinalCTA, PortfolioCard, PricingCard, SectionIntro } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Zo0n Sites — сайты для малого бизнеса за 3 дня",
  description:
    "Делаю понятные сайты для мастеров, услуг и локального бизнеса: услуги, цены, фото, контакты, портфолио и кнопки связи.",
};

const proofItems = [
  { value: "3 дня", label: "первый рабочий вариант" },
  { value: "3 ниши", label: "разные стили в портфолио" },
  { value: "от 3000 ₽", label: "понятный старт" },
];

const businessReasons = [
  {
    title: "Не объяснять одно и то же вручную",
    text: "Ссылка на сайт сразу показывает услуги, цены, фото, контакты и кнопку связи.",
  },
  {
    title: "Выглядеть надежнее в переписке",
    text: "Аккуратный сайт помогает клиенту понять, что бизнес живой, понятный и с ним можно работать.",
  },
  {
    title: "Быстрее доводить человека до заявки",
    text: "Сайт должен не просто быть красивым. Он должен помогать человеку понять предложение и оставить заявку.",
  },
];

const styleExamples = [
  ["Автосервис", "строгий, технический, про доверие"],
  ["Цветы", "мягкий, эмоциональный, про подарок"],
  ["Барбершоп", "премиальный, мужской, про запись"],
];

export default function Home() {
  return (
    <main>
      <section className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-sm text-white/[0.72]">
            <Sparkles className="h-4 w-4 text-mint" />
            Сайт, который можно отправить клиенту одной ссылкой
          </div>
          <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Упакую ваш бизнес в понятный сайт с услугами, ценами и кнопкой связи
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.70]">
            Делаю сайты для мастеров, услуг и локального бизнеса: быстро, аккуратно и без лишнего шума. Клиент видит, что вы делаете, сколько это стоит, какие есть примеры и как с вами связаться.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portfolio" variant="primary">
              Посмотреть портфолио
            </ButtonLink>
            <ButtonLink href={telegramUrl} variant="secondary">
              Обсудить сайт
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item.value} className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-4">
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-5 text-white/[0.52]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[28px] p-4">
          <div className="mb-4 flex items-center justify-between px-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">live cases</p>
              <p className="mt-1 text-sm text-white/[0.60]">Три разных ниши, три разных подачи</p>
            </div>
            <BadgeCheck className="h-8 w-8 text-mint" />
          </div>
          <div className="grid gap-3">
            {portfolioProjects.map((project, index) => (
              <a
                key={project.title}
                className="group grid gap-4 rounded-2xl border border-white/[0.10] bg-white/[0.045] p-3 transition hover:border-cyan/[0.40] hover:bg-white/[0.07] sm:grid-cols-[150px_1fr]"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="aspect-[16/10] w-full rounded-xl object-cover object-top"
                  src={project.image}
                  alt={`Превью ${project.title}`}
                  width={640}
                  height={400}
                />
                <div className="min-w-0 py-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">0{index + 1} / {project.niche}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/[0.58]">{project.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
                    Смотреть сайт
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionIntro
          eyebrow="зачем"
          title="Зачем бизнесу сайт, если есть Telegram, Авито и соцсети?"
          text="Сайт не заменяет ваши каналы. Он собирает важное в одном месте и помогает не терять клиента в переписке."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {businessReasons.map((item, index) => (
            <article key={item.title} className="glass-panel rounded-2xl p-6">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-ink">
                {index === 0 ? <LayoutGrid className="h-5 w-5" /> : index === 1 ? <BriefcaseBusiness className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/[0.62]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionIntro
          eyebrow="портфолио"
          title="Делаю под нишу, а не меняю только текст"
          text="В портфолио разные задачи и разные визуальные языки: технический сервис, эмоциональная витрина и локальный премиальный лендинг."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/portfolio" variant="secondary">
            Открыть полное портфолио
          </ButtonLink>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="подход"
              title="Сайт должен не просто быть красивым"
              text="Он должен быстро отвечать на вопросы клиента: что вы делаете, сколько стоит, можно ли доверять и как оставить заявку."
            />
            <ButtonLink href="/process" variant="secondary">
              Как проходит работа
            </ButtonLink>
          </div>
          <div className="grid gap-3">
            {styleExamples.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-5">
                <div className="flex items-center gap-4">
                  <MonitorSmartphone className="h-6 w-6 text-cyan" />
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-white/[0.58]">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionIntro
          eyebrow="тарифы"
          title="Можно начать с малого и усилить сайт по мере роста"
          text="Цены остаются понятными, но задача не в дешевизне. Задача - сделать аккуратную страницу, которую не стыдно показывать клиентам."
        />
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {tariffs.map((tariff) => (
            <PricingCard key={tariff.name} tariff={tariff} />
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 text-sm text-white/[0.52]">
          <Clock3 className="h-4 w-4 text-mint" />
          Первый рабочий вариант обычно готов за 3 дня, если материалы собраны заранее.
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
