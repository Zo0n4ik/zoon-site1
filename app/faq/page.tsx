import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { faqItems } from "../data";
import { FinalCTA, PageHero } from "@/components/marketing";

export const metadata: Metadata = {
  title: "FAQ Zo0n Sites",
  description:
    "Ответы на частые вопросы о сайтах для малого бизнеса: запуск, домен, правки, форма заявки, сроки и связь.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="faq"
        title="Частые вопросы перед заказом сайта"
        text="Коротко и без канцелярита: что нужно от клиента, сколько занимает работа, как запускается сайт и что можно добавить."
      />

      <section className="section-shell pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-6">
              <h2 className="flex gap-3 text-xl font-semibold text-white">
                <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                {item.question}
              </h2>
              <p className="mt-3 leading-7 text-white/[0.62]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA title="Остался вопрос по вашему случаю?" text="Напишите в Telegram. Лучше коротко описать нишу, услуги и что хотите получить от сайта." />
    </main>
  );
}
