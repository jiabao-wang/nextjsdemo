'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useEffect, useRef } from 'react';

const AboutPage = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div 
        ref={gradientRef}
        className="flex-grow relative bg-cover bg-center bg-no-repeat transition-all duration-300"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto p-8 relative z-10 text-white">
          <h1 className="text-6xl font-extrabold text-center mb-12 mt-8 animate-fadeInDown">关于我们</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-md shadow-xl animate-fadeInLeft">
              <h2 className="text-3xl font-bold mb-4 text-gold-500">品牌故事</h2>
              <p className="text-lg leading-relaxed">
                自创立以来，我们一直致力于为全球客户提供最顶级的奢侈品服装。每一件产品都由世界知名设计师精心打造，选用珍稀的面料，结合传统工艺与现代科技，确保每一个细节都无可挑剔。
              </p>
            </div>
            
            <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-md shadow-xl animate-fadeInRight">
              <h2 className="text-3xl font-bold mb-4 text-gold-500">品质承诺</h2>
              <p className="text-lg leading-relaxed">
                我们坚持只使用最高品质的材料，每一道工序都经过严格的质量检测。从设计到生产，我们追求卓越，只为呈现无与伦比的奢华体验。
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white/20 p-8 rounded-3xl backdrop-blur-md shadow-xl animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4 text-gold-500">我们的愿景</h2>
            <p className="text-lg leading-relaxed">
              成为全球奢侈品服装行业的领导者，引领时尚潮流，为客户带来超越期待的产品和服务。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;