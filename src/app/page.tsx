import { RootLayout } from '@/components/layout';
import {
  HeroSection,
  CategoriesSection,
  FeaturedCoursesSection,
  CTASection,
} from '@/components/sections';

export const metadata = {
  title: 'Plataforma de Cursos Online Gratuitos',
  description:
    'Aprenda novas habilidades gratuitamente com milhares de aulas e cursos. Programação, design, marketing, inteligência artificial e muito mais.',
  keywords: [
    'cursos online',
    'educação gratuita',
    'programação',
    'design',
    'marketing',
    'inteligência artificial',
  ],
};

export default function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <CTASection />
    </RootLayout>
  );
}
