'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const variants: Record<string, string> = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge };
