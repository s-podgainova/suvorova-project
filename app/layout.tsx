import type { Metadata } from "next";
import { Montserrat, Oswald} from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Соня Суворова — дизайнер интерьеров",
  description: "Портфолио дизайнера интерьеров Сони Суворовой. Реализованные проекты, концепции и авторский подход к созданию пространств.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${oswald.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
