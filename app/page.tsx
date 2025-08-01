'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* 主页内容 */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                欢迎来到奢饰品服装商城
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 示例商品卡片 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/placeholder.jpg" 
                    alt="示例商品" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      示例奢饰品服装
                    </h2>
                    <p className="text-gray-600 text-base">
                      高品质的奢饰品服装，彰显您的独特品味。
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl font-bold text-red-600">¥9999</span>
                      <Link 
                        href="/products/1" 
                        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                      >
                        查看详情
                      </Link>
                    </div>
                  </div>
                </div>
                {/* 可添加更多商品卡片 */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
