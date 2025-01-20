// src/components/sections/MerchSection.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface MerchItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  category: "clothes" | "equipment" | "accessories";
}

const merchItems: MerchItem[] = [
  {
    id: 1,
    name: "Тренувальна футболка",
    price: 890,
    image: "/images/merch/tshirt.webp",
    description:
      "Стильна футболка з логотипом школи. Зручний крій та якісна тканина.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Чорний", hex: "#000000" },
      { name: "Червоний", hex: "#FF0000" },
      { name: "Білий", hex: "#FFFFFF" },
    ],
    category: "clothes",
  },
  {
    id: 2,
    name: "Спортивний худі",
    price: 1590,
    image: "/images/merch/hoodie.webp",
    description:
      "Тепле та зручне худі з капюшоном. Ідеально для тренувань у прохолодну погоду.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Чорний", hex: "#000000" },
      { name: "Сірий", hex: "#808080" },
    ],
    category: "clothes",
  },
  {
    id: 3,
    name: "Боксерські рукавички",
    price: 2490,
    image: "/images/merch/gloves.webp",
    description:
      "Професійні боксерські рукавички з логотипом школи. Відмінний захист та комфорт.",
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    colors: [
      { name: "Чорно-червоний", hex: "#000000" },
      { name: "Червоно-чорний", hex: "#FF0000" },
    ],
    category: "equipment",
  },
  {
    id: 4,
    name: "Спортивна сумка",
    price: 990,
    image: "/images/merch/bag.webp",
    description:
      "Містка спортивна сумка з логотипом школи. Ідеальна для тренувань.",
    sizes: ["One Size"],
    colors: [
      { name: "Чорний", hex: "#000000" },
      { name: "Червоний", hex: "#FF0000" },
    ],
    category: "accessories",
  },
];

interface MerchSectionProps {
  onOrderMerch?: (item: MerchItem) => void;
}

export const MerchSection = ({ onOrderMerch }: MerchSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | MerchItem["category"]
  >("all");

  const filterMerch = (items: MerchItem[]) => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category === selectedCategory);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Брендований мерч
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Стань частиною нашої команди з ексклюзивним мерчем школи боксу
          </p>
        </motion.div>

        {/* Фільтри категорій */}
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          <Button
            variant={selectedCategory === "all" ? "primary" : "outline"}
            onClick={() => setSelectedCategory("all")}
          >
            Всі товари
          </Button>
          <Button
            variant={selectedCategory === "clothes" ? "primary" : "outline"}
            onClick={() => setSelectedCategory("clothes")}
          >
            Одяг
          </Button>
          <Button
            variant={selectedCategory === "equipment" ? "primary" : "outline"}
            onClick={() => setSelectedCategory("equipment")}
          >
            Екіпірування
          </Button>
          <Button
            variant={selectedCategory === "accessories" ? "primary" : "outline"}
            onClick={() => setSelectedCategory("accessories")}
          >
            Аксесуари
          </Button>
        </div>

        {/* Сітка товарів */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filterMerch(merchItems).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="hover" className="h-full">
                <div className="relative h-64 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-secondary-light mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-secondary mb-2">
                      Розміри:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 text-xs border rounded-md text-secondary-light"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-secondary mb-2">
                      Кольори:
                    </p>
                    <div className="flex gap-2">
                      {item.colors.map((color) => (
                        <div
                          key={color.name}
                          className="w-6 h-6 rounded-full border border-gray-200"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-primary">
                      {item.price} ₴
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onOrderMerch?.(item)}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBagIcon className="h-5 w-5" />
                      Замовити
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
