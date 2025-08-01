'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// 模拟商品数据
const mockProducts = [
  {
    id: 1,
    name: '奢华羊毛大衣',
    description: '顶级羊毛材质，手工缝制，彰显非凡品味。采用最优质的澳洲羊毛，经过多道工序精心制作而成，保暖性能极佳，款式经典大方，是冬季出行的绝佳选择。',
    price: 12999,
    image: '/placeholder.jpg',
    size: ['S', 'M', 'L', 'XL'],
    color: ['黑色', '白色', '灰色']
  },
  {
    id: 2,
    name: '真皮休闲鞋',
    description: '进口头层牛皮，舒适透气，经典设计。选用意大利进口头层牛皮，鞋底采用特殊材质，提供良好的支撑和缓冲，让您行走更加舒适自在。',
    price: 8999,
    image: '/placeholder.jpg',
    size: ['38', '39', '40', '41', '42'],
    color: ['棕色', '黑色']
  },
  {
    id: 3,
    name: '丝绸衬衫',
    description: '桑蚕丝面料，贴身舒适，优雅大方。采用 100% 桑蚕丝面料，手感柔软光滑，穿着亲肤透气，适合各种场合穿着。',
    price: 5999,
    image: '/placeholder.jpg',
    size: ['S', 'M', 'L'],
    color: ['白色', '粉色', '蓝色']
  },
  {
    id: 4,
    name: '羊绒围巾',
    description: '纯羊绒材质，柔软保暖，时尚百搭。选用内蒙古优质羊绒，经过精细加工，围巾质地柔软，保暖性能卓越，多种颜色可选，轻松搭配各种服饰。',
    price: 3999,
    image: '/placeholder.jpg',
    size: ['长 200cm，宽 30cm'],
    color: ['驼色', '灰色', '黑色']
  }
];

const ProductDetailPage = () => {
  const params = useParams();
  const productId = Number(params.id);
  const product = mockProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="py-12 flex justify-center items-center">
          <p className="text-xl text-gray-600">未找到该商品</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-xl font-bold text-red-600 mb-4">¥{product.price}</p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">商品描述</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">尺寸</h2>
              <div className="flex gap-2">
                {product.size.map(size => (
                  <button 
                    key={size} 
                    className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">颜色</h2>
              <div className="flex gap-2">
                {product.color.map(color => (
                  <button 
                    key={color} 
                    className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900">
              添加到购物车
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;