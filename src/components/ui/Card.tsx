// src/components/ui/Card.tsx
"use client";

import { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hover" | "interactive";
  padding?: "none" | "small" | "medium" | "large";
}

export const Card = ({
  children,
  className,
  variant = "default",
  padding = "medium",
  onClick,
  ...props
}: CardProps) => {
  const baseStyles = "bg-white rounded-lg shadow-md relative";

  const variantStyles = {
    default: "",
    hover:
      "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
    interactive:
      "cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary border-2 border-transparent",
  };

  const paddingStyles = {
    none: "",
    small: "p-3",
    medium: "p-5",
    large: "p-8",
  };

  return (
    <div
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
