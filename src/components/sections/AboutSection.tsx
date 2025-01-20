// src/components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: TrophyIcon,
    title: "Досвідчені тренери",
    description:
      "Наші тренери — професійні спортсмени з великим досвідом підготовки чемпіонів",
  },
  {
    icon: UserGroupIcon,
    title: "Індивідуальний підхід",
    description:
      "Тренування для будь-якого рівня підготовки, від новачків до професіоналів",
  },
  {
    icon: ClockIcon,
    title: "Зручний розклад",
    description:
      "Тренування вранці та ввечері, можливість індивідуальних занять",
  },
];

export const AboutSection = () => {
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
            Чому обирають нас
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Ми створюємо всі умови для вашого спортивного розвитку та досягнення
            поставлених цілей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card variant="hover" className="h-full">
                <div className="flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-light">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-secondary-light max-w-3xl mx-auto mb-8">
            У нас ви знайдете сучасне обладнання, просторий зал та дружню
            атмосферу. Приєднуйтесь до нашої боксерської спільноти!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
