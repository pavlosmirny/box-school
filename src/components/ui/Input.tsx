// src/components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const baseStyles =
      "w-full px-4 py-2 border rounded-md transition-colors duration-200 bg-white focus:outline-none focus:ring-2";
    const defaultStyles =
      "border-secondary-light focus:border-primary focus:ring-primary/20";
    const errorStyles =
      "border-red-500 focus:border-red-500 focus:ring-red-500/20";

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-secondary-light">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={twMerge(
            baseStyles,
            error ? errorStyles : defaultStyles,
            className
          )}
          {...props}
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

        {helperText && !error && (
          <p className="mt-1 text-sm text-secondary-light">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
