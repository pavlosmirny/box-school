// src/components/sections/about/AboutGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";

const galleryImages = [
  {
    src: "/images/gallery-1.webp",
    alt: "Тренування в залі",
    category: "training",
  },
  {
    src: "/images/gallery-2.webp",
    alt: "Спаринг",
    category: "sparring",
  },
  {
    src: "/images/gallery-3.webp",
    alt: "Тренування з грушею",
    category: "training",
  },
  {
    src: "/images/gallery-4.webp",
    alt: "Групове тренування",
    category: "group",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Змагання",
    category: "competition",
  },
  {
    src: "/images/gallery-6.webp",
    alt: "Розминка",
    category: "training",
  },
];

export const AboutGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Галерея
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Фотографії з тренувань та змагань
          </p>
        </motion.div>

        {/* Галерея зображень */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <div className="relative w-full h-48">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Модальне вікно для перегляду зображень */}
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          size="lg"
        >
          {selectedImage && (
            <div className="relative w-full h-[60vh]">
              <Image
                src={selectedImage}
                alt="Збільшене фото"
                fill
                className="object-contain"
              />
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
