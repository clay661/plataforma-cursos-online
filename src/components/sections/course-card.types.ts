export interface CourseCardProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail_url: string | null;
  category_id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration_minutes: number;
  total_lessons: number;
  featured?: boolean;
  progress?: number;
}
