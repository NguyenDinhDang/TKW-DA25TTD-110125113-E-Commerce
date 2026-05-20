import { create } from 'zustand';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  category?: string;
}

interface QuickViewState {
  isOpen: boolean;
  product: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
}

export const useQuickViewStore = create<QuickViewState>((set) => ({
  isOpen: false,
  product: null,
  
  openQuickView: (product: Product) => {
    set({
      isOpen: true,
      product,
    });
  },
  
  closeQuickView: () => {
    set({
      isOpen: false,
      product: null,
    });
  },
}));
