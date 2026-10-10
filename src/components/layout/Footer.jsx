import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#121A17] text-white pt-16 pb-12 w-full mt-24">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="bg-[#D96B43] text-white font-serif font-bold italic text-lg w-8 h-8 flex items-center justify-center rounded-[4px]">L</div>
            <span className="text-2xl font-serif tracking-tight text-white">Lumina</span>
          </div>
          <p className="text-xs text-[#9CA3AF]">Exceptional books, thoughtfully chosen.</p>
        </div>
        <div className="flex gap-8 text-xs text-[#9CA3AF]">
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
          <a href="#authors">Authors</a>
          <a href="#reviews">Reviews</a>
        </div>
      </div>
    </footer>
  );
};