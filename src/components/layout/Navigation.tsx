// src/components/layout/Navigation.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Головна", href: "/" },
  { name: "Про нас", href: "/about" },
  { name: "Розклад", href: "/schedule" },
  { name: "Тренери", href: "/trainers" },
  { name: "Мерч", href: "/merch" },
  { name: "Контакти", href: "/contact" },
];

interface NavigationProps {
  isMobile?: boolean;
}

export const Navigation = ({ isMobile }: NavigationProps) => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  if (isMobile) {
    return (
      <nav className="py-2">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 text-base font-medium transition-colors ${
                isActiveLink(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-secondary-light hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-base font-medium transition-colors hover:text-primary ${
            isActiveLink(item.href) ? "text-primary" : "text-secondary-light"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
