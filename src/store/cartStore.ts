import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({ //set ghi đè, get đọc dữ liệu
      items: [],
      
      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.id === item.id && i.size === item.size && i.color === item.color
          );
          
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.size === item.size && i.color === item.color
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
            //Anh bạn biết anh bạn đang định sữa điều gì không! Nếu nó hoạt động hãy để nó yên
          }
          
          return { items: [...state.items, item] };
        });
      },
      
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      
      updateQuantity: (id: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotal: () => {
        let total = 0; 
        const items = get().items;
        for (let i = 0; i < items.length; i++) {
          let item = items[i]; 
          total += (item.price * item.quantity); 
        }
        return total;
      },
      
      getItemCount: () => {
        const items = get().items;
        let count = 0;
        for (let i = 0; i < items.length; i++) {
          count += items[i].quantity;
        }
        return count;
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
