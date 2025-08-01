'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CartItem from '@/app/components/CartItem';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // 新增导入

// 模拟购物车数据
const mockCartItems = [
  {
    id: 1,
    name: '奢侈品外套',
    description: '顶级材质制作的外套',
    price: 1299,
    image: '/placeholder.jpg',
    quantity: 1
  },
  {
    id: 2,
    name: '真皮皮鞋',
    description: '手工制作的真皮皮鞋',
    price: 999,
    image: '/placeholder.jpg',
    quantity: 2
  }
];

interface CartItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItemData[]>(mockCartItems);

  useEffect(() => {
    // 这里可以添加从本地存储或 API 获取购物车数据的逻辑
    // setCartItems(fetchedCartItems);
  }, []);

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">购物车</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">购物车为空</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                {...item} 
                onRemove={removeFromCart} 
                onQuantityChange={updateQuantity} 
              />
            ))}
             <div className="text-right mt-6">
              <h2 className="text-2xl font-bold">总计: ¥{calculateTotal()}</h2>
              <Link 
                href="/checkout" 
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 inline-block"
              >
                去结算
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;