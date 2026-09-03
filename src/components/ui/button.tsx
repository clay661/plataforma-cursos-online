'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
  }
>(({ className, variant = 'default', size = 'md', ...props }, ref) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    default:
      'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary',
    ghost:
      'hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive',
  };

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };
