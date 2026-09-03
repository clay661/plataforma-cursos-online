# Plataforma de Cursos Online Gratuitos

Uma plataforma moderna, responsiva e escalável para educação online com suporte a milhares de cursos.

## 🎯 Objetivos

- ✅ Catálogo de cursos gratuitos
- ✅ Organização por categorias, módulos e aulas
- ✅ Sistema de progresso do usuário
- ✅ Área de aluno com dashboard
- ✅ Painel administrativo
- ✅ Autenticação segura
- ✅ Design moderno e responsivo
- ✅ Preparado para integração com Google Drive

## 🏗️ Arquitetura

### Frontend
- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS
- **Estado**: Zustand
- **Formulários**: React Hook Form + Zod

### Backend
- **API**: Next.js API Routes
- **Autenticação**: Supabase Auth
- **Banco de Dados**: PostgreSQL (via Supabase)
- **Storage**: Supabase Storage

### Segurança
- Row Level Security (RLS) no Supabase
- Autenticação via JWT
- Proteção CORS

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js app router
│   ├── (auth)/            # Rotas autenticadas
│   ├── (public)/          # Rotas públicas
│   ├── admin/             # Painel administrativo
│   └── api/               # API routes
├── components/            # Componentes React
│   ├── ui/               # Componentes básicos
│   ├── layout/           # Layout components
│   └── sections/         # Seções de páginas
├── hooks/                # React hooks customizados
├── lib/                  # Utilitários
│   ├── supabase.ts       # Cliente Supabase
│   └── ...
├── services/             # Serviços de API
├── store/                # Zustand stores
├── types/                # Tipos TypeScript
├── utils/                # Funções utilitárias
└── styles/               # Estilos globais
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Supabase

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/clay661/plataforma-cursos-online.git
cd plataforma-cursos-online
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
```

4. Adicione suas credenciais do Supabase no `.env.local`

5. Execute o projeto
```bash
npm run dev
```

6. Acesse http://localhost:3000

## 📊 Banco de Dados

Ver `supabase/migrations/` para a estrutura completa das tabelas.

Tabelas principais:
- `users` - Usuários da plataforma
- `courses` - Cursos
- `course_categories` - Categorias
- `modules` - Módulos
- `lessons` - Aulas
- `enrollments` - Inscrições
- `lesson_progress` - Progresso das aulas
- `favorites` - Favoritos

## 🔐 Segurança

- RLS habilitado em todas as tabelas
- Chaves secretas nunca no frontend
- Rate limiting em endpoints críticos
- Validação de entrada com Zod

## 📱 Responsividade

Design mobile-first:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🎨 Design

- Fundo claro com suporte a tema escuro
- Cards modernos com bordas arredondadas
- Tipografia clara e hierarquia visual
- Espaçamento generoso
- Animações discretas

## 🔄 Integração Google Drive (Futuro)

Estrutura preparada em `/admin/importacao` para:
- Importar cursos do Google Drive
- Identificação automática de módulos e aulas
- Sincronização de metadados
- Histórico de importações

## 📝 Dados Iniciais

Cursos de demonstração inclusos:
- Python do Zero
- Marketing Digital
- Excel Avançado
- Introdução à Inteligência Artificial
- Design Gráfico

## 📄 Licença

MIT
