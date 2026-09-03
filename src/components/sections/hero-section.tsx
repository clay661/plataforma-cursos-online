'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-slideUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Educação de qualidade para todos
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Aprenda novas habilidades
              <span className="block text-primary">gratuitamente</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de aulas e cursos para você estudar no seu ritmo. De programação a design,
              tudo que você precisa para crescer.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild>
              <Link href="/cursos" className="gap-2">
                Explorar Cursos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#categorias">Ver Categorias</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-border">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Cursos</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold">10k+</p>
              <p className="text-sm text-muted-foreground">Aulas</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Grátis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
