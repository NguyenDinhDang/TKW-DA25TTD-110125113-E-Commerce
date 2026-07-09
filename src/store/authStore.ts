import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
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
  updateProfile: (userData: Partial<User>) => void; // Biến tất cả các thuộc tính của User thành optional để có thể cập nhật từng phần
}

export const useAuthStore = create<AuthState>()(
  //persist middleware to persist the auth state in localStorage
  persist(  
    (set) => ({
      user: null,
      isLoggedIn: false,
      
      login: (email: string, password: string) => {
        if (email && password) {
          set({
            user: {
              id: uuidv4(),
              email,
              name: email.split('@')[0],
            },
            isLoggedIn: true,
          });
        }
      },
      
      signup: (email: string, password: string, name: string) => {
        if (email && password && name) {
          set({
            user: {
              id: uuidv4(),
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
          user: state.user ? { ...state.user, ...userData } : null, // tạo object mới với dữ liệu cập nhật nếu user tồn tại, nếu không thì giữ nguyên null
        }));
      },
    }),
    {
      name: 'auth-storage', //key for localStorage
    }
  )
);
