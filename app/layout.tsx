import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zo0n4ik.github.io/zoon-site1/"),
  title: {
    default: "Zo0n Sites — сайты для малого бизнеса за 3 дня",
    template: "%s | Zo0n Sites",
  },
  description:
    "Делаю понятные сайты для мастеров, услуг и локального бизнеса: услуги, цены, фото, контакты, портфолио и кнопки связи.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
