'use client';
import Link from 'next/link';
import { useState } from 'react';
// 删除错误的导入语句
// import { button} from 'react/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                奢饰品服装
              </Link>
            </div>
          </div>
          {/* 移动端汉堡菜单按钮 */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              // 修正 aria-expanded 属性值
              aria-expanded={isOpen}
            >
              <span className="sr-only">打开主菜单</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          {/* 桌面端导航链接 */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link 
              href="/products"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              商品列表
            </Link>
            <Link 
              href="/cart"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              购物车
            </Link>
            <Link 
              href="/feedback"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              反馈
            </Link>
            <Link 
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              关于我们
            </Link>
          </div>
        </div>
      </div>
      {/* 移动端导航菜单 */}
      <div className={isOpen ? "block" : "hidden"}>  {/* 修正移动端导航菜单显示逻辑 */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            商品列表
          </Link>
          <Link 
            href="/cart"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            购物车
          </Link>
          <Link 
            href="/feedback"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            反馈
          </Link>
          <Link 
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            关于我们
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;