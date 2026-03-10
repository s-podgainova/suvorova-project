import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "../styles/globals.css";
import LinesOverlay from "@/components/LinesOverlay/LinesOverlay";
import { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Соня Суворова — дизайнер интерьеров",
  description:
    "Портфолио дизайнера интерьеров Сони Суворовой. Реализованные проекты, концепции и авторский подход к созданию пространств.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${oswald.variable}`}>
        <div className="site">
          <Header />
          <LinesOverlay />
          {children}
        </div>
      </body>
    </html>
  );
}
