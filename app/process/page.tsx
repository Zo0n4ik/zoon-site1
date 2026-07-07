import type { Metadata } from "next";
import { FileText, Send } from "lucide-react";
import { clientMaterials, processSteps } from "../data";
import { ButtonLink, FinalCTA, PageHero, SectionIntro } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Процесс работы Zo0n Sites",
  description:
    "Как проходит создание сайта для малого бизнеса: структура, первый вариант, правки, запуск и готовая ссылка для клиентов.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="процесс"
        title="Понятная работа без бесконечных созвонов и хаоса"
        text="Сначала разбираемся в задаче, потом собираем структуру, готовим первый вариант, вносим правки и запускаем сайт."
      >
        <ButtonLink>Обсудить сайт</ButtonLink>
      </PageHero>

      <section className="section-shell pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="glass-panel rounded-2xl p-6">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-ink">
                {index + 1}
              </div>
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 leading-7 text-white/[0.62]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="материалы"
            title="Что подготовить клиенту"
            text="Чем понятнее исходные материалы, тем быстрее можно собрать сайт без угадываний."
          />
          <div className="glass-panel rounded-2xl p-6">
            <div className="mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-mint" />
              <h2 className="text-xl font-semibold text-white">Минимальный список</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {clientMaterials.map((item) => (
                <div key={item} className="rounded-xl border border-white/[0.10] bg-white/[0.04] p-4 text-sm font-semibold text-white/[0.78]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-mint/[0.20] bg-mint/[0.10] p-4">
              <Send className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
              <p className="text-sm leading-6 text-white/[0.66]">
                Если каких-то материалов нет, это не стопор. Можно начать с того, что есть, а недостающее аккуратно заменить текстом, структурой или временными визуальными блоками.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
