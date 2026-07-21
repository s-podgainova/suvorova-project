import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat, Oswald, Raleway } from "next/font/google";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import LinesOverlay from "@/components/LinesOverlay/LinesOverlay";

import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
