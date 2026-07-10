import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  view: 'signin' | 'signup';
  openModal: (view?: 'signin' | 'signup') => void;
  closeModal: () => void;
  switchView: (view: 'signin' | 'signup') => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  view: 'signin',
  openModal: (view = 'signin') => set({ isOpen: true, view }),
  closeModal: () => set({ isOpen: false }),
  switchView: (view) => set({ view }),
}));
