// src/components/sections/merch/MerchHero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const MerchHero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Фонове зображення */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/merch-hero.webp"
          alt="Мерч школи боксу"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
              Спеціальна пропозиція
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Отримай мерч <span className="text-primary">безкоштовно</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Бери участь у наших заходах, змаганнях та спарингах - отримуй бали
              та обмінюй їх на ексклюзивний мерч школи. Чим активніше береш
              участь, тим більше можливостей отримати круті речі!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  /* Додати обробник */
                }}
              >
                Переглянути мерч
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  /* Додати обробник */
                }}
              >
                Дізнатися про бали
              </Button>
            </div>
          </motion.div>

          {/* Переваги */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">Участь у заходах</h3>
              <p className="text-white">
                Отримуй бали за кожен захід та спаринг
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">Бонусна система</h3>
              <p className="text-white">
                Додаткові бали за перемоги та досягнення
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-primary font-bold mb-2">Ексклюзивні речі</h3>
              <p className="text-white">
                Унікальний мерч тільки для активних учасників
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
