import { create } from 'zustand';
import type { Course } from '@/types';

interface CoursesStore {
  favorites: string[];
  addFavorite: (courseId: string) => void;
  removeFavorite: (courseId: string) => void;
  isFavorite: (courseId: string) => boolean;
}

export const useCoursesStore = create<CoursesStore>((set, get) => ({
  favorites: [],
  addFavorite: (courseId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, courseId])],
    })),
  removeFavorite: (courseId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== courseId),
    })),
  isFavorite: (courseId) => get().favorites.includes(courseId),
}));
