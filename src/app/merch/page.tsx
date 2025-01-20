// src/app/merch/page.tsx
import { Metadata } from "next";

import { MerchSection } from "@/components/sections/MerchSection";

import { MerchHero } from "../../components/merch/MerchHero";
import { MerchEvents } from "../../components/merch/MerchEvents";

export const metadata: Metadata = {
  title: "Мерч | Школа боксу",
  description:
    "Ексклюзивний мерч нашої школи боксу. Можливість отримати безкоштовно за участь у заходах.",
};

export default function MerchPage() {
  return (
    <main>
      <MerchHero />
      <MerchSection />
      <MerchEvents />
    </main>
  );
}
