import type { Metadata } from "next";
import { portfolioProjects } from "../data";
import { FinalCTA, PageHero, PortfolioCard } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Портфолио Zo0n Sites — примеры сайтов для бизнеса",
  description:
    "Примеры сайтов для автосервиса, цветочного магазина и барбершопа. Разные стили, структура, адаптивность и готовность к заявкам.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="портфолио"
        title="Реальные демо-проекты в разных нишах"
        text="Главное доказательство работы - не обещания, а живые сайты. Здесь автосервис, цветочный магазин и барбершоп: разные задачи, разные визуальные решения и разные сценарии заявки."
      />

      <section className="section-shell pb-16">
        <div className="grid gap-7">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} large />
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold text-cyan">01 / Автосервис</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Когда важны доверие и конкретика</h2>
            <p className="mt-3 leading-7 text-white/[0.62]">
              Услуги, диагностика, цены, отзывы и структура, которая помогает не выглядеть случайным сервисом.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold text-cyan">02 / Цветы</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Когда продается настроение</h2>
            <p className="mt-3 leading-7 text-white/[0.62]">
              Каталог и подбор помогают клиенту выбрать подарок без долгих уточнений в переписке.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold text-cyan">03 / Барбершоп</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Когда нужен стиль и запись</h2>
            <p className="mt-3 leading-7 text-white/[0.62]">
              Лендинг быстро показывает атмосферу, услуги, мастеров, цены и ведет к записи.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Хотите пример в стиле вашей ниши?"
        text="Напишите, чем занимаетесь. Я подскажу, какая структура подойдет и что лучше показать на первом экране."
      />
    </main>
  );
}
