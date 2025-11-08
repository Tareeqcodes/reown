'use client';
import React, { useEffect, useRef } from 'react';

export default function ReownLanding() {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    featureRefs.current.forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease;
        }
        
        .animate-fadeInUp-1 {
          animation: fadeInUp 0.8s ease 0.2s both;
        }
        
        .animate-fadeInUp-2 {
          animation: fadeInUp 0.8s ease 0.4s both;
        }
        
        .animate-fadeInUp-3 {
          animation: fadeInUp 0.8s ease 0.6s both;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease 0.4s both;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full px-[5%] py-6 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 animate-slideDown">
        <div className="text-3xl font-bold text-slate-900 tracking-tight">Reown</div>
        <div className="flex gap-10 items-center">
          <a href="#features" className="text-slate-700 font-medium text-[0.95rem] hover:text-blue-500 transition-colors duration-300">
            Features
          </a>
          <a href="#join" className="px-7 py-3 bg-blue-500 text-white rounded-full font-medium text-[0.95rem] hover:bg-blue-400 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-[5%] pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="lg:text-left text-center">
            <h1 className="text-6xl lg:text-7xl font-semibold mb-6 text-slate-900 leading-tight animate-fadeInUp-1">
              Buy & Sell Fashion with Complete Peace of Mind
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed animate-fadeInUp-2">
              Your trusted marketplace for pre-loved clothing. Every transaction protected with secure escrow payment—shop confidently, sell safely.
            </p>
            <div className="flex gap-6 animate-fadeInUp-3 lg:justify-start justify-center flex-wrap">
              <a href="#" className="px-7 py-3 bg-slate-900 text-white rounded-full font-medium text-[0.95rem] hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300">
                Start Selling
              </a>
              <a href="#" className="px-7 py-3 bg-blue-500 text-white rounded-full font-medium text-[0.95rem] hover:bg-blue-400 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
                Browse Items
              </a>
            </div>
          </div>

          <div className="relative animate-fadeIn hidden lg:block">
            <div className="relative h-[500px]">
              <div className="absolute w-[280px] h-[400px] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-6 top-0 left-0 -rotate-[5deg] hover:scale-105 hover:rotate-0 transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:z-10">
                <div className="w-full h-[250px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Vintage Denim Jacket</h3>
                <div className="text-2xl font-semibold text-blue-500">₦15,000</div>
              </div>
              
              <div className="absolute w-[280px] h-[400px] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-6 top-[50px] left-[100px] rotate-[3deg] z-[2] hover:scale-105 hover:rotate-0 transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:z-10">
                <div className="w-full h-[250px] bg-gradient-to-br from-pink-400 to-red-500 rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Designer Handbag</h3>
                <div className="text-2xl font-semibold text-blue-500">₦45,000</div>
              </div>
              
              <div className="absolute w-[280px] h-[400px] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-6 top-[100px] left-[200px] -rotate-[2deg] z-[3] hover:scale-105 hover:rotate-0 transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:z-10">
                <div className="w-full h-[250px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Summer Dress</h3>
                <div className="text-2xl font-semibold text-blue-500">₦8,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-[5%] py-24 bg-slate-50" id="features">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 text-slate-900">Why Choose Reown?</h2>
          <p className="text-xl text-slate-600">The smartest way to refresh your wardrobe sustainably</p>
        </div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div 
            ref={addToRefs}
            className="bg-white p-10 rounded-[20px] border border-gray-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-500 to-blue-400 rounded-[15px] flex items-center justify-center text-3xl mb-6">
              🔒
            </div>
            <h3 className="text-2xl font-semibold mb-4">Secure Escrow</h3>
            <p className="text-slate-600 leading-relaxed">
              Your payment is safely held until you confirm receipt. Buy with confidence knowing you're protected every step of the way.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="bg-white p-10 rounded-[20px] border border-gray-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-500 to-blue-400 rounded-[15px] flex items-center justify-center text-3xl mb-6">
              ⚡
            </div>
            <h3 className="text-2xl font-semibold mb-4">Easy Listing</h3>
            <p className="text-slate-600 leading-relaxed">
              List your items in minutes. Snap photos, set your price, and reach thousands of fashion-conscious buyers instantly.
            </p>
          </div>
          
          <div 
            ref={addToRefs}
            className="bg-white p-10 rounded-[20px] border border-gray-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-500 to-blue-400 rounded-[15px] flex items-center justify-center text-3xl mb-6">
              ✨
            </div>
            <h3 className="text-2xl font-semibold mb-4">Quality Verified</h3>
            <p className="text-slate-600 leading-relaxed">
              Every seller is verified. Our community standards ensure you're getting authentic, quality pieces every time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center text-white" id="join">
        <h2 className="text-5xl font-semibold mb-6">Ready to Transform Your Closet?</h2>
        <p className="text-xl mb-10 opacity-90">
          Join thousands discovering the joy of sustainable, secure fashion resale
        </p>
        <a href="#" className="inline-block px-7 py-3 bg-white text-slate-900 rounded-full font-medium text-[0.95rem] hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300">
          Get Started Today
        </a>
      </section>

      {/* Footer */}
      <footer className="px-[5%] py-12 bg-slate-900 text-white text-center">
        <p>&copy; 2025 Reown. All rights reserved. Made with care for sustainable fashion.</p>
      </footer>
    </div>
  );
}