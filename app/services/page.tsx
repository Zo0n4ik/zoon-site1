import type { Metadata } from "next";
import { CheckCircle2, PlusCircle } from "lucide-react";
import { addOns, included, tariffs } from "../data";
import { FinalCTA, PageHero, PricingCard, SectionIntro } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Услуги и тарифы Zo0n Sites",
  description:
    "Мини-сайты, сайты-визитки и усиленные страницы для малого бизнеса с адаптацией, портфолио, ценами и кнопками связи.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="услуги и тарифы"
        title="Сайт под задачу: от быстрого старта до усиленной страницы"
        text="Можно начать с мини-сайта, а можно сразу собрать более подробную презентацию с портфолио, отзывами, формой заявки и помощью с запуском."
      />

      <section className="section-shell pb-16">
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {tariffs.map((tariff) => (
            <PricingCard key={tariff.name} tariff={tariff} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionIntro
          eyebrow="база"
          title="Что входит в сайт"
          text="Базовый набор помогает аккуратно презентовать услугу в интернете и дать клиенту понятный путь к связи."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item) => (
            <div key={item} className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-5">
              <CheckCircle2 className="mb-5 h-6 w-6 text-mint" />
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionIntro
          eyebrow="дополнительно"
          title="Что можно добавить"
          text="Если нужно больше, сайт можно усилить отдельными страницами, формой заявки, каталогом или подбором."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {addOns.map((item) => (
            <div key={item} className="rounded-2xl border border-cyan/[0.15] bg-cyan/[0.045] p-4">
              <PlusCircle className="mb-4 h-5 w-5 text-cyan" />
              <p className="text-sm font-semibold leading-6 text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA title="Не уверены, какой тариф нужен?" text="Напишите пару слов о бизнесе, и я предложу формат без лишних блоков и переплаты." />
    </main>
  );
}
