'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useState } from 'react';

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

const CheckoutPage = () => {
  const [cartItems] = useState<CartItemData[]>(mockCartItems);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('alipay');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加提交订单到服务器的逻辑
    // fetch('/api/submit-order', { ... });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">订单提交成功！</h1>
            <p className="text-lg">我们已经收到您的订单，会尽快处理。</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">下单页</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">订单信息</h2>
            <div className="bg-white shadow-md rounded-lg p-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex py-2 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-800">¥{item.price} × {item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="text-right mt-4">
                <p className="text-xl font-bold">总计: ¥{calculateTotal()}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">收货信息</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
                <input
                  id="name" 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">地址</label>
                <input
                  id="address" 
                  type="text" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">电话</label>
                <input
                  id="phone" 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">支付方式</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio" 
                      value="alipay" 
                      checked={paymentMethod === 'alipay'} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="mr-2"
                    />
                    支付宝
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio" 
                      value="wechat" 
                      checked={paymentMethod === 'wechat'} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="mr-2"
                    />
                    微信支付
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio" 
                      value="creditCard" 
                      checked={paymentMethod === 'creditCard'} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="mr-2"
                    />
                    信用卡
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                提交订单
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;