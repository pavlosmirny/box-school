// src/components/forms/MerchOrderForm.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface MerchOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    sizes: string[];
    colors: {
      name: string;
      hex: string;
    }[];
  };
}

interface FormData {
  size: string;
  color: string;
  quantity: number;
  name: string;
  phone: string;
  email: string;
  address: string;
}

export const MerchOrderForm = ({
  isOpen,
  onClose,
  item,
}: MerchOrderFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    size: "",
    color: "",
    quantity: 1,
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Очищаємо помилку при зміні значення
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.size) {
      newErrors.size = "Оберіть розмір";
    }
    if (!formData.color) {
      newErrors.color = "Оберіть колір";
    }
    if (!formData.name) {
      newErrors.name = "Введіть ім'я";
    }
    if (!formData.phone) {
      newErrors.phone = "Введіть номер телефону";
    }
    if (!formData.email) {
      newErrors.email = "Введіть email";
    }
    if (!formData.address) {
      newErrors.address = "Введіть адресу доставки";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Тут буде логіка відправки замовлення
      console.log("Order submitted:", {
        item: item.id,
        ...formData,
        totalPrice: item.price * formData.quantity,
      });
      onClose();
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Замовлення мерчу" size="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Інформація про товар */}
        <div>
          <div className="relative h-48 mb-4">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold text-secondary mb-2">{item.name}</h3>
          <p className="text-xl font-bold text-primary mb-4">{item.price} ₴</p>
        </div>

        {/* Форма замовлення */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-secondary-light">
              Розмір
            </label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Оберіть розмір</option>
              {item.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {errors.size && (
              <p className="mt-1 text-sm text-red-500">{errors.size}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-secondary-light">
              Колір
            </label>
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Оберіть колір</option>
              {item.colors.map((color) => (
                <option key={color.name} value={color.name}>
                  {color.name}
                </option>
              ))}
            </select>
            {errors.color && (
              <p className="mt-1 text-sm text-red-500">{errors.color}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-secondary-light">
              Кількість
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <Input
            label="Ім'я"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Введіть ваше ім'я"
          />

          <Input
            label="Телефон"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="+380"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your@email.com"
          />

          <Input
            label="Адреса доставки"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            placeholder="Введіть адресу доставки"
          />

          <div className="pt-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Сума замовлення:</span>
              <span className="text-xl font-bold text-primary">
                {item.price * formData.quantity} ₴
              </span>
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="primary" className="flex-1">
                Замовити
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Скасувати
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
