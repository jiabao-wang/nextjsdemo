'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (gradient) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        gradient.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #8fd3f4)`;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: 'http://store.xingyuai.xyz/2024-07-10/nXYnqYWakAJJ.png',
      title: '顶级奢华外套',
      description: '选用珍稀面料，手工缝制，尽显非凡品味。',
    },
    {
      image: 'http://store.xingyuai.xyz/2024-07-10/nXYnqYWakAJJ.png',
      title: '真皮皮鞋',
      description: '进口头层牛皮，经典设计，舒适透气。',
    },
    {
      image: 'http://store.xingyuai.xyz/2024-07-10/nXYnqYWakAJJ.png',
      title: '丝绸衬衫',
      description: '100% 桑蚕丝面料，贴身舒适，优雅大方。',
    },
  ];

  return (
    <div ref={gradientRef} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse mb-8">
              欢迎来到奢饰品服装商城
            </h1>
            {/* 轮播图部分 */}
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl bg-transparent">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0' + (index < currentSlide ? ' -translate-x-full' : ' translate-x-full')}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain bg-transparent"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-md shadow-xl max-w-2xl text-white">
                      <h2 className="text-4xl font-bold mb-4 text-gold-500">{slide.title}</h2>
                      <p className="text-xl mb-6">{slide.description}</p>
                      <Link
                        href="/products"
                        className="bg-gold-500 text-white px-8 py-3 rounded-full font-bold hover:bg-gold-600"
                      >
                        立即探索
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* 轮播指示点 */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gold-500' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* 示例商品卡片 */}
            <div className="bg-white/20 rounded-3xl backdrop-blur-md shadow-xl p-6 hover:scale-105 transition-transform duration-300">
              <img 
                src="http://store.xingyuai.xyz/2024-07-10/nXYnqYWakAJJ.png" 
                alt="示例商品" 
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <div className="px-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  示例奢饰品服装
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  高品质的奢饰品服装，彰显您的独特品味。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">¥9999</span>
                  <Link 
                    href="/products/1" 
                    className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full hover:opacity-90"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
            {/* 可添加更多商品卡片 */}
          </div>
        </div>
      </main>
      <Footer />
    </div> 
  );
};

export default HomePage;
