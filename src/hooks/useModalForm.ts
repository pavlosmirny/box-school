// src/hooks/useModalForm.ts
import { useState } from "react";

interface UseModalForm {
  isOpen: boolean;
  selectedTrainer?: string;
  openModal: (trainerId?: string) => void;
  closeModal: () => void;
}

export const useModalForm = (): UseModalForm => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<string>();

  const openModal = (trainerId?: string) => {
    setSelectedTrainer(trainerId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTrainer(undefined);
  };

  return {
    isOpen,
    selectedTrainer,
    openModal,
    closeModal,
  };
};
