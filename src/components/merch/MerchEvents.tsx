// src/components/sections/merch/MerchEvents.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CalendarIcon } from "@heroicons/react/24/outline";

const events = [
  {
    id: 1,
    title: "Внутрішній турнір",
    date: "28 січня 2024",
    points: 100,
    type: "competition",
    description: "Змагання між учнями школи у різних вагових категоріях",
  },
  {
    id: 2,
    title: "Спаринг-день",
    date: "15 лютого 2024",
    points: 50,
    type: "sparring",
    description: "Відкриті спаринги для всіх рівнів підготовки",
  },
  {
    id: 3,
    title: "Майстер-клас",
    date: "5 березня 2024",
    points: 75,
    type: "workshop",
    description: "Спеціальний майстер-клас від професійного боксера",
  },
];

export const MerchEvents = () => {
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
            Найближчі заходи
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Бери участь у заходах та отримуй бали для обміну на мерч
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {event.points} балів
                    </span>
                    <CalendarIcon className="h-5 w-5 text-secondary-light" />
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-secondary-light mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center text-sm text-secondary-light mb-6">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      /* Додати обробник */
                    }}
                  >
                    Зареєструватися
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Бонусна програма */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 bg-primary/5 rounded-2xl"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Як працює бонусна програма?
            </h3>
            <p className="text-secondary-light mb-8">
              Заробляй бали за участь у різних заходах та обмінюй їх на
              ексклюзивний мерч школи. Чим більше активність - тим більше
              можливостей отримати круті речі!
            </p>
            <Button variant="primary">Детальніше про програму</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
