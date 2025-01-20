import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Про нас */}
          <div>
            <h3 className="text-lg font-bold mb-4">Школа Боксу</h3>
            <p className="text-gray-300 text-sm">
              Професійна школа боксу з досвідченими тренерами та сучасним
              обладнанням. Тренування для всіх рівнів підготовки.
            </p>
          </div>

          {/* Навігація */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Розклад
                </Link>
              </li>
              <li>
                <Link
                  href="/trainers"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Тренери
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакти</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">вул. Прикладна, 123</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary mr-2" />
                <a
                  href="tel:+71234567890"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  +7 (123) 456-78-90
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-primary mr-2" />
                <a
                  href="mailto:info@boxingschool.ru"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@boxingschool.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Соціальні мережі */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ми в соцмережах</h3>
            <div className="flex space-x-4">
              {/* Тут можна додати іконки соцмереж */}
            </div>
          </div>
        </div>

        {/* Авторські права */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            © {currentYear} Школа Боксу &quot;Клуб шкіряна рукавичка&quot;. Всі
            права захищено.
          </p>
        </div>
      </div>
    </footer>
  );
};
