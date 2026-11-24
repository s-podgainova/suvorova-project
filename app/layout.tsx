import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/layout/Header/Header";
import LinesOverlay from "@/components/layout/LinesOverlay/LinesOverlay";
import ScrollToTop from "@/components/layout/ScrollToTop/ScrollToTop";

import "@/styles/globals.css";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.woff2",
  weight: "400 700",
  variable: "--font-montserrat",
});

const oswald = localFont({
  src: "../public/fonts/Oswald-VariableFont_wght.woff2",
  weight: "400 700",
  variable: "--font-oswald",
});

const raleway = localFont({
  src: "../public/fonts/Raleway-VariableFont_wght.woff2",
  weight: "400",
  variable: "--font-raleway",
});

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
      <body
        className={`${montserrat.variable} ${oswald.variable} ${raleway.variable}`}
      >
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
