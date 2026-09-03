'use client';

import Link from 'next/link';
import { Badge, Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/types';

const DEMO_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Programação',
    slug: 'programacao',
    description: 'Aprenda linguagens de programação',
    icon: '💻',
    color: 'bg-blue-100',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Design',
    slug: 'design',
    description: 'Design gráfico e UX/UI',
    icon: '🎨',
    color: 'bg-purple-100',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Marketing',
    slug: 'marketing',
    description: 'Marketing digital e vendas',
    icon: '📈',
    color: 'bg-green-100',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Inteligência Artificial',
    slug: 'ia',
    description: 'Machine Learning e IA',
    icon: '🤖',
    color: 'bg-pink-100',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Negócios',
    slug: 'negocios',
    description: 'Empreendedorismo e gestão',
    icon: '💼',
    color: 'bg-orange-100',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Idiomas',
    slug: 'idiomas',
    description: 'Aprenda novos idiomas',
    icon: '🌍',
    color: 'bg-indigo-100',
    created_at: new Date().toISOString(),
  },
];

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Categorias Populares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore cursos das áreas mais procuradas e desenvolva novas competências.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
            {DEMO_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="group"
              >
                <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/cursos">Ver Todas as Categorias</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
