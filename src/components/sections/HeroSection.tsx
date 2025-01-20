// src/components/sections/HeroSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  onRegister: () => void;
}

export const HeroSection = ({ onRegister }: HeroSectionProps) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Фонове зображення */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Boxing gym"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Стань сильнішим з
            <span className="text-primary"> професійним боксом</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Тренуйся з найкращими тренерами в сучасному залі. Групові та
            індивідуальні заняття для будь-якого рівня підготовки.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
              onClick={onRegister}
            >
              Записатись на тренування
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Дізнатись більше
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Скрол індикатор */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
