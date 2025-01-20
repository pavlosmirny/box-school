// src/app/about/page.tsx
import { Metadata } from "next";
import { AboutHero } from "../../components/sections/about/AboutHero";
import { AboutHistory } from "../../components/sections/about/AboutHistory";
import { AboutValues } from "../../components/sections/about/AboutValues";
import { AboutAchievements } from "../../components/sections/about/AboutAchievements";
import { AboutGallery } from "../../components/sections/about/AboutGallery";

export const metadata: Metadata = {
  title: "Про нас | Школа боксу",
  description:
    "Дізнайтеся більше про нашу школу боксу, історію, цінності та досягнення.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutHistory />
      <AboutValues />
      <AboutAchievements />
      <AboutGallery />
    </main>
  );
}
