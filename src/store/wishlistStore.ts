import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category?: string;
}

interface WishlistState {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  getItemCount: () => number;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item: WishlistItem) => {
        set((state) => { //state dùng để lưu trữ dữ liệu
          const exists = state.items.find((i) => i.id === item.id);
          if (exists) return state;
          return { items: [...state.items, item] };
        });
      },
      
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id), //Tạo mảng mới mà không có phần tử có id trùng với id được truyền vào
        }));
      },
      
      isInWishlist: (id: string) => { // Tính năng bật tắt yêu thích, kiểm tra xem sản phẩm có trong danh sách yêu thích hay không
        const currentItems = get().items; 
        for (const item of currentItems) {
          if (item.id === id) {
            return true;
          }
        }
        return false;
      },
      
      getItemCount: () => {
        const currentItems = get().items; 
        return currentItems.length;
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'wishlist-storage', // Tên của key trong localStorage để lưu trữ dữ liệu
    }
  )
);
