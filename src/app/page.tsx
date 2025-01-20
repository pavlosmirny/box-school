// src/app/page.tsx
"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { TrainersSection } from "@/components/sections/TrainersSection";
import { PricingSection } from "@/components/sections/PricingSection";

import { TrainingForm } from "@/components/forms/TrainingForm";
import { useModalForm } from "@/hooks/useModalForm";
import { MerchSection } from "../components/sections/MerchSection";

export default function Home() {
  const { isOpen, selectedTrainer, openModal, closeModal } = useModalForm();

  return (
    <>
      <HeroSection onRegister={() => openModal()} />
      <AboutSection />
      <ScheduleSection onRegister={() => openModal()} />
      <TrainersSection onSelectTrainer={(trainerId) => openModal(trainerId)} />
      <PricingSection onSelectPlan={() => openModal()} />
      <MerchSection />
      <TrainingForm
        isOpen={isOpen}
        onClose={closeModal}
        selectedTrainer={selectedTrainer}
      />
    </>
  );
}
