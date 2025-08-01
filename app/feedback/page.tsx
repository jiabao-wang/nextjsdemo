'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useState } from 'react';

const FeedbackPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加提交反馈到服务器的逻辑
    // fetch('/api/submit-feedback', { ... });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">感谢您的反馈！</h1>
            <p className="text-lg">我们已经收到您的反馈，会尽快处理。</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md space-y-6"
        >
          <h1 className="text-3xl font-bold text-center">留下您的反馈</h1>
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700"
            >
              姓名
            </label>
            <input
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              邮箱
            </label>
            <input
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label 
              htmlFor="feedback" 
              className="block text-sm font-medium text-gray-700"
            >
              反馈内容
            </label>
            <textarea
              id="feedback" 
              value={feedback} 
              onChange={(e) => setFeedback(e.target.value)} 
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            提交反馈
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default FeedbackPage;