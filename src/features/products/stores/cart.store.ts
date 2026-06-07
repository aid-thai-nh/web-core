import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: newItem =>
    set(state => {
      const existing = state.items.find(item => item.id === newItem.id);
      if (existing) {
        return {
          items: state.items.map(item => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }
      return { items: [...state.items, { ...newItem, quantity: 1 }] };
    }),

  removeItem: id =>
    set(state => ({
      items: state.items.filter(item => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set(state => ({
      items: state.items.map(item => (item.id === id ? { ...item, quantity } : item)),
    })),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));
