import type { Metadata } from "next";
import { MessageCircle, Send } from "lucide-react";
import { telegramUrl } from "../data";
import { ButtonLink, PageHero } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Контакты Zo0n Sites",
  description:
    "Связаться с Zo0n Sites в Telegram, обсудить сайт для малого бизнеса и посмотреть портфолио live-проектов.",
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero
        eyebrow="контакты"
        title="Напишите, чем занимаетесь и какой сайт хотите получить"
        text="Лучше всего начать с пары предложений: ниша, услуги, есть ли фото, нужен ли сайт на одну страницу или несколько разделов."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={telegramUrl}>Написать в Telegram</ButtonLink>
          <ButtonLink href="/portfolio" variant="secondary">
            Посмотреть портфолио
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section-shell pb-20">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <MessageCircle className="h-10 w-10 text-mint" />
            <h2 className="mt-6 text-3xl font-semibold text-white">Telegram: @Zo0n4ik</h2>
            <p className="mt-4 leading-7 text-white/[0.64]">
              Это главный канал связи. Напишите, чем занимаетесь, какие услуги нужно показать и какой результат хотите получить от сайта.
            </p>
            <ButtonLink href={telegramUrl} className="mt-7 w-full sm:w-auto">
              Обсудить сайт
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-white/[0.10] bg-white/[0.04] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Send className="h-6 w-6 text-cyan" />
              <h2 className="text-2xl font-semibold text-white">Что можно написать первым сообщением</h2>
            </div>
            <div className="rounded-xl border border-white/[0.10] bg-ink/[0.50] p-5 text-white/[0.70]">
              <p>Здравствуйте. Нужен сайт для моего бизнеса.</p>
              <p className="mt-3">Ниша: ...</p>
              <p>Услуги/товары: ...</p>
              <p>Есть фото: да/нет</p>
              <p>Хочу: сайт для заявок / портфолио / каталог / форму</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
