import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={`
          disabled:cursor-opacity-50
          w-auto
          rounded-md
          border
          bg-neutral-100
          px-2
          py-1
          text-sm
          tracking-widest
          text-neutral-500
          transition
          hover:opacity-75
          disabled:cursor-not-allowed
          dark:border-neutral-800
          dark:bg-neutral-900
          dark:text-neutral-400
          ${className}
        `}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
