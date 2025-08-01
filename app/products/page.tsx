'use client';

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// 模拟商品数据
const mockProducts = [
  {
    id: 1,
    name: '奢华羊毛大衣',
    description: '顶级羊毛材质，手工缝制，彰显非凡品味。',
    price: 12999,
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    name: '真皮休闲鞋',
    description: '进口头层牛皮，舒适透气，经典设计。',
    price: 8999,
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    name: '丝绸衬衫',
    description: '桑蚕丝面料，贴身舒适，优雅大方。',
    price: 5999,
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    name: '羊绒围巾',
    description: '纯羊绒材质，柔软保暖，时尚百搭。',
    price: 3999,
    image: '/placeholder.jpg'
  }
];

const ProductListPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-8">商品列表</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-600">¥{product.price}</span>
                    <Link 
                      href={`/products/${product.id}`} 
                      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListPage;