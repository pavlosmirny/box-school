// src/components/sections/about/AboutValues.tsx
"use client";

import { motion } from "framer-motion";
import {
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";

const values = [
  {
    icon: HeartIcon,
    title: "Здоровя",
    description:
      "Ми приділяємо особливу увагу безпеці та здоровю наших учнів, забезпечуючи правильну техніку та навантаження.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Дисципліна",
    description:
      "Бокс виховує силу волі, характер та вміння досягати поставлених цілей.",
  },
  {
    icon: UsersIcon,
    title: "Спільнота",
    description:
      "Ми створюємо дружню атмосферу, де кожен може знайти підтримку та однодумців.",
  },
  {
    icon: TrophyIcon,
    title: "Розвиток",
    description:
      "Постійне вдосконалення навичок та досягнення нових висот у спорті та житті.",
  },
];

export const AboutValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Наші цінності
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Принципи та цінності, якими ми керуємося у нашій роботі
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 flex flex-col items-center text-center">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-light">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
