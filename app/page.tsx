import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Camera,
  Check,
  CircleDollarSign,
  ExternalLink,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  Smartphone,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

const telegramUrl = "https://t.me/Zo0n4ik";

const audiences = [
  "Мастерам красоты",
  "Автосервисам",
  "Цветочным магазинам",
  "Репетиторам",
  "Ремонту техники",
  "Локальным услугам",
];

const included = [
  { title: "Дизайн страницы", icon: Palette },
  { title: "Адаптация под смартфоны", icon: Smartphone },
  { title: "Блок услуг и цен", icon: CircleDollarSign },
  { title: "Галерея работ", icon: Camera },
  { title: "Кнопка связи в Telegram", icon: Send },
  { title: "Подготовка к запуску", icon: Rocket },
];

const tariffs = [
  {
    name: "Экспресс",
    price: "3000 ₽",
    accent: "from-mint/28 to-cyan/10",
    items: ["мини-сайт", "услуги и цены", "контакты", "кнопка Telegram", "1 круг правок"],
  },
  {
    name: "Стандарт",
    price: "5000 ₽",
    accent: "from-cyan/28 to-mint/12",
    featured: true,
    items: ["3-5 блоков", "фото/портфолио", "отзывы", "контакты", "2 круга правок"],
  },
  {
    name: "Бизнес",
    price: "от 8000 ₽",
    accent: "from-emerald-300/24 to-sky-400/12",
    items: ["все из тарифа Стандарт", "форма заявки", "уведомление в Telegram", "помощь с запуском"],
  },
];

const portfolio = [
  {
    title: "Барбершоп BORODA",
    description: "Лаконичная страница с услугами, ценами, мастерами и быстрой записью.",
    tag: "barber",
    theme: "from-zinc-900 via-emerald-950 to-stone-900",
  },
  {
    title: "Автосервис DRIVE",
    description: "Строгий сайт для сервиса: перечень работ, преимущества и контакты.",
    tag: "service",
    theme: "from-slate-950 via-cyan-950 to-neutral-900",
  },
  {
    title: "Цветочный магазин ROSE",
    description: "Витрина букетов с атмосферной подачей, ценами и кнопкой заказа.",
    tag: "flowers",
    theme: "from-rose-950 via-emerald-950 to-zinc-950",
  },
];

const steps = [
  "обсуждаем задачу",
  "собираю структуру",
  "делаю первый вариант",
  "вносим правки",
  "запускаем сайт",
];

const faq = [
  {
    question: "Сайт будет работать без моего компьютера?",
    answer: "Да. После запуска сайт размещается на хостинге и открывается у клиентов в браузере независимо от вашего компьютера.",
  },
  {
    question: "Можно ли подключить домен?",
    answer: "Да, можно подключить ваш домен или помочь выбрать новый адрес для сайта.",
  },
  {
    question: "Сколько правок входит?",
    answer: "В тарифе Экспресс входит 1 круг правок, в Стандарте 2 круга. Для Бизнеса объем согласуем по задаче.",
  },
  {
    question: "Что нужно от клиента?",
    answer: "Понадобятся список услуг, цены, фотографии, контакты, пожелания по стилю и примеры сайтов, которые нравятся.",
  },
  {
    question: "Можно ли добавить форму заявки?",
    answer: "Да, форма заявки входит в тариф Бизнес. Заявки можно отправлять в Telegram.",
  },
  {
    question: "Как со мной связаться?",
    answer: "Напишите в Telegram @Zo0n4ik. Это единственный канал связи для проекта.",
  },
];

function CTAButton({
  children,
  href = telegramUrl,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-mint/60 focus:ring-offset-2 focus:ring-offset-ink";
  const styles =
    variant === "primary"
      ? "bg-mint text-ink shadow-glow hover:-translate-y-0.5 hover:bg-cyan"
      : "border border-line bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-mint/55 hover:bg-white/[0.08]";

  return (
    <a className={`${base} ${styles} ${className}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
      {variant === "primary" ? <Send className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-8 flex max-w-3xl flex-col gap-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-4xl">{title}</h2>
      {text ? <p className="text-base leading-7 text-white/68 md:text-lg">{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="section-shell flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-3 font-semibold text-white">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-mint/30 bg-mint/12 text-[17px] font-semibold leading-none tracking-[0.08em] text-mint shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            ZS
          </span>
          <span>Zo0n Sites</span>
        </a>
        <a className="hidden items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-white/80 transition hover:border-mint/50 hover:text-white sm:inline-flex" href={telegramUrl} target="_blank" rel="noreferrer">
          <MessageCircle className="h-4 w-4 text-mint" />
          @Zo0n4ik
        </a>
      </header>

      <section id="top" className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-10 py-10 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm text-white/72">
            <Sparkles className="h-4 w-4 text-mint" />
            Одностраничный сайт для заявок и доверия
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            Сайты-визитки для малого бизнеса за 3 дня
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Помогаю мастерам, услугам и локальному бизнесу получить аккуратный сайт с ценами, фото, контактами и кнопкой записи
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton>Заказать сайт</CTAButton>
            <CTAButton href="#portfolio" variant="secondary">
              Посмотреть примеры
            </CTAButton>
          </div>
        </div>

        <div className="glass-panel relative rounded-[28px] p-4">
          <div className="rounded-2xl border border-line bg-[#081311] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">demo preview</p>
                <p className="mt-1 font-semibold text-white">Zo0n Sites</p>
              </div>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">3 дня</span>
            </div>
            <div className="grid gap-3">
              <div className="h-36 rounded-xl bg-[linear-gradient(135deg,rgba(69,240,165,.26),rgba(66,217,255,.16)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22 viewBox=%220 0 400 200%22%3E%3Cpath fill=%22none%22 stroke=%22rgba(255,255,255,.16)%22 stroke-width=%222%22 d=%22M0 150 C90 60 150 220 240 110 S330 35 400 88%22/%3E%3C/svg%3E')] bg-cover" />
              <div className="grid grid-cols-3 gap-3">
                {["Цены", "Фото", "Запись"].map((item) => (
                  <div key={item} className="rounded-xl border border-line bg-white/[0.04] p-3">
                    <div className="mb-7 h-2 w-10 rounded-full bg-mint/70" />
                    <p className="text-sm font-medium text-white/78">{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-mint/24 bg-mint/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Готово к показу клиентам</p>
                    <p className="mt-1 text-xs text-white/55">Авито, личные сообщения, соцсети</p>
                  </div>
                  <BadgeCheck className="h-8 w-8 text-mint" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="кому подойдет" title="Для локального бизнеса, которому нужен понятный сайт без лишнего шума" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div key={item} className="glass-panel rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-mint/35">
              <Store className="mb-5 h-6 w-6 text-mint" />
              <h3 className="text-lg font-semibold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading
          eyebrow="что входит"
          title="Что входит в сайт"
          text="Базовый набор блоков для аккуратной презентации услуги в интернете: описание, цены, примеры работ и способ связи."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {included.map(({ title, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-line bg-white/[0.035] p-5 transition hover:border-cyan/40 hover:bg-white/[0.06]">
              <Icon className="mb-5 h-7 w-7 text-cyan" />
              <p className="font-semibold text-white">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="тарифы" title="Можно стартовать с малого и усилить сайт по мере роста" text="Цены прозрачные, формат подбирается под задачу и количество материалов." />
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {tariffs.map((tariff) => (
            <article key={tariff.name} className={`glass-panel flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/35 ${tariff.featured ? "ring-1 ring-mint/45" : ""}`}>
              <div className="mb-6 flex min-h-7 items-start justify-between gap-4">
                <div className={`mt-2 h-2 w-24 rounded-full bg-gradient-to-r ${tariff.accent}`} />
                {tariff.featured ? <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">частый выбор</span> : null}
              </div>
              <h3 className="text-2xl font-semibold text-white">{tariff.name}</h3>
              <p className="mt-3 text-3xl font-semibold text-mint">{tariff.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-white/72">
                {tariff.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CTAButton className="mt-8 w-full self-end">Обсудить тариф</CTAButton>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section-shell py-16">
        <SectionHeading eyebrow="портфолио" title="Демо-сайты, которые показывают подачу и уровень" />
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.title} className="glass-panel overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
              <div className={`h-48 bg-gradient-to-br ${item.theme} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-white/14 bg-black/18 p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">{item.tag}</span>
                    <ExternalLink className="h-5 w-5 text-mint" />
                  </div>
                  <div>
                    <div className="mb-3 h-3 w-28 rounded-full bg-white/70" />
                    <div className="h-3 w-40 rounded-full bg-mint/75" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-white/64">{item.description}</p>
                <CTAButton href={telegramUrl} variant="secondary" className="mt-4 w-full">
                  Смотреть пример
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="процесс" title="Как проходит работа" />
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-line bg-white/[0.035] p-5">
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-sm font-bold text-ink">{index + 1}</div>
              <p className="font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="glass-panel rounded-3xl p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-mint/25 bg-mint/12">
              <CalendarCheck className="h-12 w-12 text-mint" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">первые кейсы</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Почему сейчас дешевле</h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Сейчас я собираю первые кейсы, поэтому первым клиентам делаю сайты по сниженной цене за разрешение показать работу в портфолио.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="faq" title="Ответы на частые вопросы" />
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-line bg-white/[0.035] p-5">
              <h3 className="flex gap-3 text-lg font-semibold text-white">
                <Wrench className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                {item.question}
              </h3>
              <p className="mt-3 leading-7 text-white/64">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20 pt-16">
        <div className="rounded-3xl border border-mint/24 bg-[linear-gradient(135deg,rgba(69,240,165,.18),rgba(66,217,255,.12)),rgba(13,25,23,.92)] p-6 shadow-glow md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">контакты</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-white md:text-4xl">Telegram: @Zo0n4ik</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                Расскажите, чем занимаетесь, какие услуги нужно показать и какой результат хотите получить от сайта.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CTAButton>Написать в Telegram</CTAButton>
              <CTAButton variant="secondary">Обсудить сайт</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
