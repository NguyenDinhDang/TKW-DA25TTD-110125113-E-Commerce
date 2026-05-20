import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string) => void;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      
      login: (email: string, password: string) => {
        // Fake login - no actual validation
        if (email && password) {
          set({
            user: {
              id: Math.random().toString(36).substr(2, 9),
              email,
              name: email.split('@')[0],
            },
            isLoggedIn: true,
          });
        }
      },
      
      signup: (email: string, password: string, name: string) => {
        // Fake signup - no actual validation
        if (email && password && name) {
          set({
            user: {
              id: Math.random().toString(36).substr(2, 9),
              email,
              name,
            },
            isLoggedIn: true,
          });
        }
      },
      
      logout: () => {
        set({
          user: null,
          isLoggedIn: false,
        });
      },
      
      updateProfile: (userData: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
