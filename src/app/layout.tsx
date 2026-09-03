import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plataforma de Cursos Online Gratuitos',
  description: 'Aprenda novas habilidades gratuitamente com milhares de aulas e cursos.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Plataforma de Cursos Online Gratuitos',
    description: 'Aprenda novas habilidades gratuitamente com milhares de aulas e cursos.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
