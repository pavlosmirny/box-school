// src/components/sections/ScheduleSection.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ScheduleSectionProps {
  onRegister: () => void;
}

type TrainingType = "all" | "group" | "personal" | "kids";

interface ScheduleItem {
  time: string;
  title: string;
  trainer: string;
  type: TrainingType;
  duration: string;
  level: "beginner" | "intermediate" | "advanced" | "all";
}

const daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя",
];

const scheduleData: Record<string, ScheduleItem[]> = {
  Понеділок: [
    {
      time: "09:00",
      title: "Ранковий бокс",
      trainer: "Олександр Петров",
      type: "group",
      duration: "90 хв",
      level: "all",
    },
    {
      time: "11:00",
      title: "Персональне тренування",
      trainer: "За записом",
      type: "personal",
      duration: "60 хв",
      level: "all",
    },
    {
      time: "17:00",
      title: "Дитяча група",
      trainer: "Марія Іванова",
      type: "kids",
      duration: "60 хв",
      level: "beginner",
    },
    {
      time: "19:00",
      title: "Вечірній бокс",
      trainer: "Дмитро Соколов",
      type: "group",
      duration: "90 хв",
      level: "intermediate",
    },
  ],
  Вівторок: [
    {
      time: "10:00",
      title: "Техніка ударів",
      trainer: "Іван Коваленко",
      type: "group",
      duration: "75 хв",
      level: "all",
    },
    {
      time: "13:00",
      title: "Індивідуальна сесія",
      trainer: "За записом",
      type: "personal",
      duration: "60 хв",
      level: "all",
    },
    {
      time: "18:00",
      title: "Боксерська підготовка",
      trainer: "Олена Смирнова",
      type: "group",
      duration: "90 хв",
      level: "advanced",
    },
  ],
  Середа: [
    {
      time: "09:30",
      title: "Кардіо бокс",
      trainer: "Сергій Левченко",
      type: "group",
      duration: "60 хв",
      level: "all",
    },
    {
      time: "14:00",
      title: "Основи боксу для дітей",
      trainer: "Марина Ковальчук",
      type: "kids",
      duration: "60 хв",
      level: "beginner",
    },
  ],
  Четвер: [
    {
      time: "08:00",
      title: "Ранковий тренінг",
      trainer: "Олександр Петров",
      type: "group",
      duration: "90 хв",
      level: "all",
    },
    {
      time: "12:00",
      title: "Персональна тренування",
      trainer: "За записом",
      type: "personal",
      duration: "60 хв",
      level: "all",
    },
    {
      time: "17:00",
      title: "Дитяча група",
      trainer: "Марія Іванова",
      type: "kids",
      duration: "60 хв",
      level: "beginner",
    },
  ],
  "П’ятниця": [
    {
      time: "10:00",
      title: "Бокс для початківців",
      trainer: "Дмитро Соколов",
      type: "group",
      duration: "90 хв",
      level: "beginner",
    },
    {
      time: "15:00",
      title: "Індивідуальна техніка",
      trainer: "Іван Коваленко",
      type: "personal",
      duration: "60 хв",
      level: "intermediate",
    },
  ],
  Субота: [
    {
      time: "09:00",
      title: "Ранковий бокс",
      trainer: "Олександр Петров",
      type: "group",
      duration: "90 хв",
      level: "all",
    },
    {
      time: "14:00",
      title: "Дитячий бокс",
      trainer: "Марина Ковальчук",
      type: "kids",
      duration: "60 хв",
      level: "beginner",
    },
  ],
  Неділя: [
    {
      time: "11:00",
      title: "Відкриті тренування",
      trainer: "Команда тренерів",
      type: "group",
      duration: "120 хв",
      level: "all",
    },
    {
      time: "16:00",
      title: "Персональна сесія",
      trainer: "За записом",
      type: "personal",
      duration: "60 хв",
      level: "all",
    },
  ],
};

export const ScheduleSection = ({ onRegister }: ScheduleSectionProps) => {
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);
  const [selectedType, setSelectedType] = useState<TrainingType>("all");

  const filterSchedule = (items: ScheduleItem[]) => {
    if (selectedType === "all") return items;
    return items.filter((item) => item.type === selectedType);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Розклад тренувань
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Оберіть зручний час для тренувань. У нас гнучкий розклад та різні
            типи занять
          </p>
        </motion.div>

        {/* Фільтри */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedType === "all" ? "primary" : "outline"}
              onClick={() => setSelectedType("all")}
            >
              Усі тренування
            </Button>
            <Button
              variant={selectedType === "group" ? "primary" : "outline"}
              onClick={() => setSelectedType("group")}
            >
              Групові
            </Button>
            <Button
              variant={selectedType === "personal" ? "primary" : "outline"}
              onClick={() => setSelectedType("personal")}
            >
              Персональні
            </Button>
            <Button
              variant={selectedType === "kids" ? "primary" : "outline"}
              onClick={() => setSelectedType("kids")}
            >
              Дитячі
            </Button>
          </div>
        </div>

        {/* Дні тижня */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex min-w-max">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                  selectedDay === day
                    ? "border-primary text-primary"
                    : "border-transparent text-white hover:text-primary hover:border-primary"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Розклад */}
        <div className="grid gap-4">
          {filterSchedule(scheduleData[selectedDay] || []).map(
            (item, index) => (
              <motion.div
                key={`${item.time}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant="hover" className="p-4">
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-xl font-bold text-primary">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary">
                          {item.title}
                        </h3>
                        <p className="text-sm text-secondary-light">
                          Тренер: {item.trainer}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-sm text-secondary-light">
                        Тривалість: {item.duration}
                      </span>
                      <Button size="sm" onClick={onRegister}>
                        Записатись
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
