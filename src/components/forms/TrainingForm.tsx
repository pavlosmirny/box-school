// src/components/forms/TrainingForm.tsx
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
  selectedTrainer: string;
  message: string;
}

interface TrainingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrainer?: string;
}

export const TrainingForm = ({
  isOpen,
  onClose,
  selectedTrainer,
}: TrainingFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    selectedDate: "",
    selectedTime: "",
    selectedTrainer: selectedTrainer || "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const trainers = [
    { id: "1", name: "Олександр Петров" },
    { id: "2", name: "Марія Іванова" },
    { id: "3", name: "Дмитро Соколов" },
  ];

  const timeSlots = [
    "09:00",
    "10:30",
    "12:00",
    "14:00",
    "15:30",
    "17:00",
    "18:30",
    "20:00",
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введіть ваше ім'я";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введіть номер телефону";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введіть email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введіть коректний email";
    }

    if (!formData.selectedDate) {
      newErrors.selectedDate = "Оберіть дату";
    }

    if (!formData.selectedTime) {
      newErrors.selectedTime = "Оберіть час";
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
      // Тут буде логіка відправки даних на сервер
      console.log("Form submitted:", formData);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Запис на тренування"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Дата"
            name="selectedDate"
            type="date"
            value={formData.selectedDate}
            onChange={handleChange}
            error={errors.selectedDate}
          />

          <div>
            <label className="block mb-2 text-sm font-medium text-secondary-light">
              Час
            </label>
            <select
              name="selectedTime"
              value={formData.selectedTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-secondary"
            >
              <option value="">Оберіть час</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.selectedTime && (
              <p className="mt-1 text-sm text-red-500">{errors.selectedTime}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-secondary-light">
            Тренер
          </label>
          <select
            name="selectedTrainer"
            value={formData.selectedTrainer}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-secondary"
          >
            <option value="">Оберіть тренера</option>
            {trainers.map((trainer) => (
              <option key={trainer.id} value={trainer.id}>
                {trainer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-secondary-light">
            Повідомлення
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-md text-secondary resize-none"
            placeholder="Додаткова інформація або побажання"
          />
        </div>

        <div className="flex gap-4">
          <Button type="submit" variant="primary" className="flex-1">
            Записатись
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
      </form>
    </Modal>
  );
};
