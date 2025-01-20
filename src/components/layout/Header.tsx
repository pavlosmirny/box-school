// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { Button } from "../ui/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image
                src="/images/logo.jpg"
                alt="Логотип школи боксу"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="ml-3 text-lg font-bold text-secondary text-shadow uppercase">
              Клуб шкіряна рукавичка
            </span>
          </Link>

          {/* Навігація для десктопу */}
          <div className="hidden md:flex flex-1 justify-center">
            <Navigation />
          </div>

          <div className="flex items-center gap-4">
            {/* Кнопка CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  /* Додати обробник для модального вікна запису */
                }}
              >
                Записатися
              </Button>
            </div>

            {/* Кнопка мобільного меню */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary-light hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Мобільне навігаційне меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <Navigation isMobile />
            <div className="p-4 border-t border-gray-200">
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  /* Додати обробник для модального вікна запису */
                }}
              >
                Записатися
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
