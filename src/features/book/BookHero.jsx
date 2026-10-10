import React from 'react';
import { mainBook } from '../../data/booksData';

export default function BookHero({ onBuyBook }) {
  const book = mainBook || {};

  return (
    <section className="py-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-12 lg:gap-16 items-center">
      {/* Left: Book Cover Canvas */}
      <div className="bg-[#EFECE6] p-10 md:p-12 rounded-2xl flex flex-col items-center justify-center relative min-h-[480px]">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[8px] tracking-[0.2em] font-medium text-[#9CA3AF] uppercase whitespace-nowrap">
          LUMINA EDITION · 2020
        </div>

        <div className="relative w-64 md:w-72 h-[400px] bg-[#D7E0D8] rounded-r-xl shadow-2xl p-6 flex flex-col justify-between border-l-4 border-[#C0C9C1] overflow-hidden">
          <p className="text-[8px] font-bold tracking-[0.2em] text-[#6B7280] uppercase z-10">
            TIMELESS LESSONS ON
          </p>

          <div className="z-10 -mt-6">
            <h2 className="text-3xl font-serif text-[#1F2421] font-normal leading-[1.12]">
              {book.title || "The Psychology of Money"}
            </h2>
          </div>

          <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-[0.18em] z-10">
            {(book.author || "MORGAN HOUSEL").toUpperCase()}
          </p>

          <div className="absolute -right-12 bottom-6 w-52 h-52 rounded-full border border-[#C85A32]/30 pointer-events-none"></div>
          <div className="absolute -right-8 bottom-10 w-40 h-40 rounded-full border border-[#C85A32]/45 pointer-events-none"></div>
          <div className="absolute -right-4 bottom-14 w-28 h-28 rounded-full border border-[#C85A32]/65 pointer-events-none"></div>
          <div className="absolute right-0 bottom-18 w-16 h-16 rounded-full border border-[#C85A32]/85 pointer-events-none"></div>
          <div className="absolute right-3 bottom-21 w-10 h-10 rounded-full bg-[#C85A32] pointer-events-none"></div>
        </div>

        <div className="text-right w-full mt-6 pr-2">
          <p className="text-[11px] text-[#8C827A] italic font-serif leading-tight">
            International bestseller
          </p>
          <p className="text-[11px] text-[#8C827A] italic font-serif leading-tight">
            Translated into 53 languages
          </p>
        </div>
      </div>

      {/* Right: Details & Action */}
      <div className="space-y-6">
        <div className="flex gap-2">
          <span className="bg-[#FAF0EB] text-[#C85A32] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-[#F3E2D8]">
            PSYCHOLOGY
          </span>
          <span className="bg-[#FAF0EB] text-[#C85A32] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-[#F3E2D8]">
            PERSONAL FINANCE
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-serif text-[#1F2421] leading-[1.08] font-normal tracking-tight">
            {book.title || "The Psychology of Money"}
          </h1>
          <p className="text-base text-[#6B7280] font-serif">
            by <span className="underline underline-offset-2 cursor-pointer text-[#1F2421]">{book.author || "Morgan Housel"}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#C85A32] text-sm">★</span>
          <span className="font-bold text-[#1F2421]">4.8</span>
          <span className="text-[#8C827A]">2,438 readers</span>
          <span className="text-[#EAE3D9] mx-2">|</span>
          <span className="text-[#C85A32] font-medium text-[11px]">Editor's choice</span>
        </div>

        <p className="text-[#4A5568] leading-relaxed text-sm max-w-lg font-serif">
          A timeless exploration of how people think about money, wealth and financial decisions.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button 
            onClick={onBuyBook}
            className="bg-[#1C2421] hover:bg-[#2B3531] text-white px-6 py-3.5 rounded-xl text-xs font-medium flex items-center gap-2.5 transition-all shadow-sm cursor-pointer"
          >
            <span>📖</span>
            <span>Read Now</span>
          </button>

          <button 
            onClick={onBuyBook}
            className="border border-[#D5CFC5] bg-[#FAF8F5] text-[#1F2421] hover:bg-[#EAE4DC] px-6 py-3.5 rounded-xl text-xs font-medium transition-all shadow-sm cursor-pointer"
          >
            Buy Book · ৳499
          </button>

          <button className="border border-[#D5CFC5] bg-[#FAF8F5] hover:bg-[#EAE4DC] p-3.5 rounded-xl text-xs text-[#1F2421] transition-all cursor-pointer">
            🔖
          </button>

          <button className="border border-[#D5CFC5] bg-[#FAF8F5] hover:bg-[#EAE4DC] p-3.5 rounded-xl text-xs text-[#1F2421] transition-all cursor-pointer">
            🎧
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4 pt-8 border-t border-[#EAE3D9] text-xs">
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">PRICE</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">৳499</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">READING TIME</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">5h 24m</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">PAGES</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">256</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">LANGUAGE</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">English</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">PUBLISHED</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">Sept. 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
}