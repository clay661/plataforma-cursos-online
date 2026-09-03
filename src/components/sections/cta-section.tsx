'use client';

import { Button } from '@/components/ui';
import Link from 'next/link';
import { Zap, Users, Award, Zap as ZapIcon } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Comunidade Ativa</h3>
              <p className="text-sm text-muted-foreground">
                Aprenda com milhares de alunos em uma comunidade solidária.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">100% Gratuito</h3>
              <p className="text-sm text-muted-foreground">
                Todos os cursos e aulas são completamente gratuitos.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Certificados</h3>
              <p className="text-sm text-muted-foreground">
                Receba certificados ao completar os cursos.
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Crie sua conta agora e tenha acesso a todos os cursos.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/cadastro">Criar Conta Grátis</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/cursos">Explorar Cursos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
