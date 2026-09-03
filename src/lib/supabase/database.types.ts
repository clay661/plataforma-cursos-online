// Auto-generated Supabase types
// Run: supabase gen types typescript --project-id your_project_id > src/lib/supabase/database.types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      courses: {
        Row: {
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
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description: string;
          long_description?: string | null;
          thumbnail_url?: string | null;
          category_id: string;
          instructor_id: string;
          level: 'beginner' | 'intermediate' | 'advanced';
          duration_minutes?: number;
          total_lessons?: number;
          published?: boolean;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string;
          long_description?: string | null;
          thumbnail_url?: string | null;
          category_id?: string;
          instructor_id?: string;
          level?: 'beginner' | 'intermediate' | 'advanced';
          duration_minutes?: number;
          total_lessons?: number;
          published?: boolean;
          featured?: boolean;
          updated_at?: string;
        };
      };
      course_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon: string | null;
          color: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          icon?: string | null;
          color?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          icon?: string | null;
          color?: string | null;
        };
      };
      modules: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          slug: string;
          description: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          slug: string;
          description?: string | null;
          order?: number;
          created_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string | null;
          order?: number;
        };
      };
      lessons: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          slug: string;
          description: string | null;
          video_url: string | null;
          duration_minutes: number;
          order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          module_id: string;
          title: string;
          slug: string;
          description?: string | null;
          video_url?: string | null;
          duration_minutes?: number;
          order?: number;
          created_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string | null;
          video_url?: string | null;
          duration_minutes?: number;
          order?: number;
        };
      };
      lesson_resources: {
        Row: {
          id: string;
          lesson_id: string;
          title: string;
          type: 'pdf' | 'document' | 'link' | 'attachment';
          url: string | null;
          file_path: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          lesson_id: string;
          title: string;
          type: 'pdf' | 'document' | 'link' | 'attachment';
          url?: string | null;
          file_path?: string | null;
          created_at?: string;
        };
        Update: {
          title?: string;
          type?: 'pdf' | 'document' | 'link' | 'attachment';
          url?: string | null;
          file_path?: string | null;
        };
      };
      instructors: {
        Row: {
          id: string;
          name: string;
          email: string;
          bio: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          bio?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          email?: string;
          bio?: string | null;
          avatar_url?: string | null;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          enrolled_at: string;
          completed_at: string | null;
          progress_percentage: number;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          enrolled_at?: string;
          completed_at?: string | null;
          progress_percentage?: number;
        };
        Update: {
          completed_at?: string | null;
          progress_percentage?: number;
        };
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          completed: boolean;
          video_progress_seconds: number | null;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          completed?: boolean;
          video_progress_seconds?: number | null;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          completed?: boolean;
          video_progress_seconds?: number | null;
          completed_at?: string | null;
          updated_at?: string;
        };
      };
      favorites: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          created_at?: string;
        };
        Update: {};
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
};
