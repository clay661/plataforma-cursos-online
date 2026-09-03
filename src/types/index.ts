// User
export interface User {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

// Courses
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  long_description: string | null;
  thumbnail_url: string | null;
  category_id: string;
  instructor_id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration_minutes: number;
  total_lessons: number;
  published: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
  category?: Category;
  instructor?: Instructor;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  description: string | null;
  order: number;
  created_at: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  slug: string;
  description: string | null;
  video_url: string | null;
  duration_minutes: number;
  order: number;
  created_at: string;
  resources?: LessonResource[];
}

export interface LessonResource {
  id: string;
  lesson_id: string;
  title: string;
  type: 'pdf' | 'document' | 'link' | 'attachment';
  url: string | null;
  file_path: string | null;
  created_at: string;
}

// Instructor
export interface Instructor {
  id: string;
  name: string;
  email: string;
  bio: string | null;
  avatar_url: string | null;
  created_at: string;
}

// Enrollment & Progress
export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at: string | null;
  progress_percentage: number;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  video_progress_seconds: number | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

// Favorites
export interface Favorite {
  id: string;
  user_id: string;
  course_id: string;
  created_at: string;
}

// API Responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// Filter Types
export interface CourseFilters {
  search?: string;
  category_id?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  duration_min?: number;
  duration_max?: number;
  sort?: 'relevance' | 'recent' | 'popular';
  page?: number;
  per_page?: number;
}

export interface CourseStats {
  total_courses: number;
  total_users: number;
  total_lessons: number;
  total_enrollments: number;
}
