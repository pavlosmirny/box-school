// src/components/sections/about/AboutHistory.tsx
"use client";

import { motion } from "framer-motion";

const historyEvents = [
  {
    year: 2013,
    title: "Відкриття школи",
    description:
      "Заснування школи боксу з першою залою на 100 квадратних метрів.",
  },
  {
    year: 2015,
    title: "Перший чемпіон",
    description:
      "Наш перший вихованець став чемпіоном міста у своїй ваговій категорії.",
  },
  {
    year: 2017,
    title: "Розширення",
    description:
      "Відкриття нового просторого залу площею 300 квадратних метрів.",
  },
  {
    year: 2019,
    title: "Міжнародні успіхи",
    description:
      "Наші спортсмени почали успішно виступати на міжнародних змаганнях.",
  },
  {
    year: 2021,
    title: "Нові програми",
    description: "Запуск програм для дітей та жіночого боксу.",
  },
  {
    year: 2023,
    title: "Сучасність",
    description: "Повне оновлення обладнання та запуск персональних тренувань.",
  },
];

export const AboutHistory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Наша історія
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Шлях становлення та розвитку нашої школи
          </p>
        </motion.div>

        {/* Таймлайн історії */}
        <div className="relative">
          {/* Вертикальна лінія */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          <div className="space-y-16">
            {historyEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center lg:gap-8`}
              >
                {/* Контент */}
                <div className="flex-1 lg:text-right order-2 lg:order-none">
                  <div
                    className={`lg:px-8 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <span className="block text-5xl font-bold text-primary/40 mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-secondary">
                        {event.title}
                      </h3>
                      <p className="text-secondary-light mt-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Точка на таймлайні */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="w-1 h-8 bg-primary/20"></div>
                </div>

                {/* Пуста колонка для вирівнювання */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
