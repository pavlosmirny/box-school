// src/components/sections/about/AboutAchievements.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const achievements = {
  stats: [
    { value: "500+", label: "Учнів" },
    { value: "50+", label: "Медалей" },
    { value: "10+", label: "Майстрів спорту" },
    { value: "15+", label: "Турнірів щороку" },
  ],
  highlights: [
    {
      title: "Чемпіонат України",
      description:
        "5 золотих, 8 срібних та 12 бронзових медалей за останні 3 роки",
      image: "/images/achievements-1.jpg",
    },
    {
      title: "Міжнародні змагання",
      description:
        "Наші спортсмени успішно представляють школу на міжнародній арені",
      image: "/images/achievements-2.webp",
    },
    {
      title: "Дитячо-юнацький спорт",
      description: "Перемоги на всеукраїнських дитячо-юнацьких змаганнях",
      image: "/images/achievements-3.jpg",
    },
  ],
};

export const AboutAchievements = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Досягнення нашої школи
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Результати наполегливої праці наших спортсменів та тренерів
          </p>
        </motion.div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-white">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Основні досягнення */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                {highlight.title}
              </h3>
              <p className="text-white">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
