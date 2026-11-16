import { ReactNode } from "react";
import type { Metadata } from "next";

import { Header } from "@/components/layout/Header/Header";
import LinesOverlay from "@/components/layout/LinesOverlay/LinesOverlay";
import ScrollToTop from "@/components/layout/ScrollToTop/ScrollToTop";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Suvorova interiors",
  description:
    "Портфолио дизайнера интерьеров Сони Суворовой. Реализованные проекты, концепции и авторский подход к созданию пространств.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-light.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="site">
          <Header />
          <LinesOverlay />
          {children}
          <ScrollToTop/>
        </div>
      </body>
    </html>
  );
}
