// src/components/sections/about/AboutHero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      {/* Фонове зображення */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.webp"
          alt="Тренування в залі"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Про нашу школу боксу
          </h1>
          <p className="text-xl text-gray-200">
            Більше 10 років ми навчаємо, тренуємо та виховуємо чемпіонів. Наша
            мета - зробити бокс доступним для кожного, хто хоче розвиватися
            фізично та духовно.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
