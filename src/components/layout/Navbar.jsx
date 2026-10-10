import React from 'react';

export default function Navbar({ onGoHome, onBuyNow }) {
  return (
    <header className="w-full border-b border-[#EAE3D9] bg-[#FAF8F5] px-6 md:px-16 py-4 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          onClick={onGoHome}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-8 h-8 bg-[#D96B43] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg shadow-sm">
            A
          </div>
          <span className="font-serif text-2xl font-medium tracking-tight text-[#1F2421]">
            Atif Publications LLC
          </span>
        </div>

        {/* Center Menu Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#5A625E]">
          <a href="#explore" className="hover:text-[#1F2421] transition-colors">Explore</a>
          <a href="#categories" className="hover:text-[#1F2421] transition-colors">Categories</a>
          <a href="#subscription" className="hover:text-[#1F2421] transition-colors">Subscription</a>
          <a href="#authors" className="hover:text-[#1F2421] transition-colors">Authors</a>
        </nav>

        {/* Right Nav Actions */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <button aria-label="Search" className="text-[#5A625E] hover:text-[#1F2421] transition-colors text-base cursor-pointer">
            🔍
          </button>
          <button className="text-[#1F2421] hover:opacity-70 transition-opacity cursor-pointer">
            Log in
          </button>
          <button 
            onClick={onBuyNow}
            className="bg-[#1C2421] hover:bg-[#2B3531] text-white px-5 py-2.5 rounded-lg transition-colors font-medium text-xs shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}