'use client';
import { useState } from 'react';

interface CartItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  quantity, 
  onRemove, 
  onQuantityChange 
}) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setLocalQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  return (
    <div className="flex border p-4 rounded-lg shadow-sm">
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24 object-cover rounded-lg mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold text-gray-800">¥{price}</p>
        <div className="flex items-center mt-2">
          <span className="mr-2">数量:</span>
          <input
            type="number"
            value={localQuantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 border rounded p-1"
          />
        </div>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="self-start bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        移除
      </button>
    </div>
  );
};

export default CartItem;