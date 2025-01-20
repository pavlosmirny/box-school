// src/components/sections/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@heroicons/react/24/outline";

interface PricingPlan {
  id: number;
  name: string;
  price: string | number;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isFree?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Пробне тренування",
    price: "Безкоштовно",
    duration: "перше тренування",
    description: "Спробуйте наші тренування без зобов'язань",
    features: [
      "Знайомство з тренером",
      "Оцінка фізичної підготовки",
      "Індивідуальні рекомендації",
      "Все необхідне спорядження",
      "Можливість задати будь-які питання",
    ],
    isFree: true,
  },

  {
    id: 2,
    name: "Разове тренування",
    price: 450,
    duration: "за тренування",
    description: "Гнучкий графік без абонементу",
    features: [
      "Індивідуальний підхід",
      "Вибір тренера",
      "Все обладнання включено",
      "Без зобов'язань",
    ],
  },
  {
    id: 3,
    name: "Базовий",
    price: 2200,
    duration: "на місяць",
    description: "8 тренувань на місяць",
    features: [
      "8 групових тренувань",
      "Складання програми",
      "Консультація з харчування",
      "Доступ до загального чату",
      "Знижка 10% на персональні тренування",
    ],
    isPopular: true,
  },
  {
    id: 4,
    name: "Безліміт",
    price: 3500,
    duration: "на місяць",
    description: "Необмежена кількість тренувань",
    features: [
      "Необмежені групові тренування",
      "Індивідуальна програма",
      "Консультація з харчування",
      "Доступ до закритого клубу",
      "Знижка 20% на персональні тренування",
      "Пріоритетний запис на спаринги",
    ],
  },
];

interface PricingSectionProps {
  onSelectPlan: () => void;
}

export const PricingSection = ({ onSelectPlan }: PricingSectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок остается без изменений */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Тарифи та абонементи
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Оберіть зручний тариф для регулярних тренувань або спробуйте
            безкоштовне тренування
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mt-6"
            >
              <Card
                variant="hover"
                padding="none"
                className={`flex flex-col min-h-[600px] ${
                  plan.isPopular ? "border-2 border-primary" : ""
                } ${plan.isFree ? "border-2 border-green-500" : ""}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="bg-primary text-white text-sm font-medium py-1 px-4 rounded-full mx-auto w-max">
                      Популярний вибір
                    </div>
                  </div>
                )}
                {plan.isFree && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="bg-green-500 text-white text-sm font-medium py-1 px-4 rounded-full mx-auto w-max">
                      Спробуй безкоштовно
                    </div>
                  </div>
                )}

                <div className="flex flex-col flex-grow p-6">
                  {/* Заголовок */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-secondary-light">{plan.description}</p>
                  </div>

                  {/* Блок с ценой */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span
                        className={`text-4xl font-bold ${
                          plan.isFree ? "text-green-500" : "text-secondary"
                        }`}
                      >
                        {typeof plan.price === "number"
                          ? `${plan.price} ₴`
                          : plan.price}
                      </span>
                      <span className="text-base text-secondary-light">
                        {plan.duration}
                      </span>
                    </div>
                  </div>

                  {/* Список преимуществ */}
                  <div className="flex-grow space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckIcon
                          className={`h-5 w-5 shrink-0 mr-2 ${
                            plan.isFree ? "text-green-500" : "text-primary"
                          }`}
                        />
                        <span className="text-secondary-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Кнопка */}
                  <div className="mt-6">
                    <Button
                      variant={
                        plan.isFree
                          ? "outline"
                          : plan.isPopular
                          ? "primary"
                          : "outline"
                      }
                      className={`w-full ${
                        plan.isFree
                          ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                          : ""
                      }`}
                      onClick={onSelectPlan}
                    >
                      {plan.isFree ? "Записатись на пробне" : "Обрати тариф"}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Секция для корпоративных клиентов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white mb-4">
            Для корпоративних клієнтів доступні спеціальні умови
          </p>
          <Button variant="outline">Дізнатися більше</Button>
        </motion.div>
      </div>
    </section>
  );
};
