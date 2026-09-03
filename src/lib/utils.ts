import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + '...' : str;
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
  };
  return labels[level] || level;
}

export function getLevelColor(level: string): string {
  const colors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800',
  };
  return colors[level] || 'bg-gray-100 text-gray-800';
}
