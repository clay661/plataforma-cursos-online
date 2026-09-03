'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { CourseCard } from './course-card';
import type { CourseCardProps } from './course-card.types';

const DEMO_COURSES: CourseCardProps[] = [
  {
    id: '1',
    title: 'Python do Zero',
    slug: 'python-do-zero',
    description: 'Aprenda Python desde o básico até conceitos avançados. Perfeito para iniciantes.',
    thumbnail_url: null,
    category_id: '1',
    level: 'beginner',
    duration_minutes: 1200,
    total_lessons: 48,
    featured: true,
  },
  {
    id: '2',
    title: 'Marketing Digital Completo',
    slug: 'marketing-digital-completo',
    description: 'Domine as principais estratégias de marketing digital para crescer online.',
    thumbnail_url: null,
    category_id: '3',
    level: 'intermediate',
    duration_minutes: 900,
    total_lessons: 36,
    featured: true,
  },
  {
    id: '3',
    title: 'Excel Avançado',
    slug: 'excel-avancado',
    description: 'Dominar fórmulas avançadas, gráficos e análise de dados em Excel.',
    thumbnail_url: null,
    category_id: '1',
    level: 'advanced',
    duration_minutes: 600,
    total_lessons: 24,
    featured: false,
  },
  {
    id: '4',
    title: 'Introdução à IA',
    slug: 'introducao-ia',
    description: 'Entenda os fundamentos de Machine Learning e redes neurais.',
    thumbnail_url: null,
    category_id: '4',
    level: 'intermediate',
    duration_minutes: 1500,
    total_lessons: 60,
    featured: true,
  },
];

export function FeaturedCoursesSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Cursos em Destaque</h2>
              <p className="text-lg text-muted-foreground">
                Os cursos mais populares da plataforma
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/cursos" className="gap-2">
                Ver Todos <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slideUp">
            {DEMO_COURSES.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="text-center sm:hidden">
            <Button size="lg" asChild>
              <Link href="/cursos">Ver Todos os Cursos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
