import { create } from 'zustand';

interface CartSidebarModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

export const useCartSidebarModal = create<CartSidebarModalState>(
  (set) => ({
    isOpen: false,
  
    openModal: () => {
      set({ isOpen: true });
    },
  
    closeModal: () => {
      set({ isOpen: false });
    },
    // Đảo ngược trạng thái của modal, nếu đang mở thì đóng, nếu đang đóng thì mở
    toggleModal: () => {
      set((state) => ({ isOpen: !state.isOpen }));
    },
  })
);
