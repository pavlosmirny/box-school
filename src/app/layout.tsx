// src/app/layout.tsx
import { Inter, Roboto_Condensed } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "Школа Бокса - Профессиональные тренировки",
  description:
    "Школа бокса с профессиональными тренерами. Тренировки для всех уровней подготовки.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${robotoCondensed.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
