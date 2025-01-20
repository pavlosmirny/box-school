"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Trainer {
  id: number;
  name: string;
  position: string;
  experience: string;
  achievements: string[];
  specialization: string[];
  image: string;
}
interface TrainersSectionProps {
  onSelectTrainer: (trainerId: string) => void;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Олександр Петров",
    position: "Головний тренер",
    experience: "15 років",
    achievements: [
      "Майстер спорту міжнародного класу",
      "Чемпіон України з боксу",
      "Тренер вищої категорії",
    ],
    specialization: [
      "Класичний бокс",
      "Індивідуальні тренування",
      "Підготовка до змагань",
    ],
    image: "/images/trainer-1.webp",
  },
  {
    id: 2,
    name: "Марія Іванова",
    position: "Тренер",
    experience: "8 років",
    achievements: [
      "Майстер спорту з боксу",
      "Призер чемпіонату Європи",
      "Спеціаліст з роботи з дітьми",
    ],
    specialization: ["Дитячі групи", "Жіночий бокс", "Фітнес-бокс"],
    image: "/images/trainer-2.webp",
  },
  {
    id: 3,
    name: "Дмитро Соколов",
    position: "Тренер",
    experience: "12 років",
    achievements: [
      "Майстер спорту з боксу",
      "Переможець міжнародних турнірів",
      "Сертифікований тренер",
    ],
    specialization: [
      "Загальна фізична підготовка",
      "Робота з початківцями",
      "Спаринги",
    ],
    image: "/images/trainer-3.webp",
  },
];

export const TrainersSection = ({ onSelectTrainer }: TrainersSectionProps) => {
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
            Наші тренери
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Професійні спортсмени з багатим досвідом тренерської роботи
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card variant="hover" className="h-full overflow-hidden">
                <div className="relative h-64 mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {trainer.position}
                  </p>
                  <p className="text-secondary-light mb-4">
                    Досвід роботи: {trainer.experience}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-bold text-secondary mb-2">
                      Досягнення:
                    </h4>
                    <ul className="list-disc list-inside text-secondary-light">
                      {trainer.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-secondary mb-2">
                      Спеціалізація:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => onSelectTrainer(trainer.id.toString())}
                  >
                    Записатись на тренування
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
