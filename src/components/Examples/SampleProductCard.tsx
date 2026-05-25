'use client';

import { useCartStore } from '@/store';
import toast from 'react-hot-toast';
import { formatVND } from "@/utils/currency";

interface SampleProductProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

/**
 * Example component showing how to use Zustand stores
 * This demonstrates the migration from Redux to Zustand
 */
export function SampleProductCard({ id, title, price, image }: SampleProductProps) {
  const { addItem, items } = useCartStore();
  const itemInCart = items.find(item => item.id === id);

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      image,
      quantity: 1,
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{formatVND(price)}</p>
      
      <button
        onClick={handleAddToCart}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
          itemInCart
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {itemInCart ? `In Cart (${itemInCart.quantity})` : 'Add to Cart'}
      </button>
    </div>
  );
}
