import React from 'react';
import { takeawaysData } from '../../data/booksData';

export const BookOverview = () => {
  return (
    <div className="space-y-20 max-w-[1100px] mx-auto px-4">
      {/* About Section */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-x-[100px] gap-y-12 items-start">
        <div className="space-y-6">
          <p className="text-xs font-bold tracking-widest text-[#C85A32] uppercase">ABOUT THE BOOK</p>
          <h2 className="text-4xl md:text-[44px] font-serif leading-[1.15] text-[#1F2421]">
            Doing well with money isn’t necessarily about what you know.
          </h2>
          <p className="text-[#4A5568] text-lg leading-relaxed">It’s about how you behave. And behavior is hard to teach, even to really smart people.</p>
          <div className="border-l-[3px] border-[#C85A32] pl-6 py-1 italic font-serif text-2xl text-[#1F2421] leading-snug">
            “Financial success is not a hard science. It’s a soft skill, where how you behave is more important than what you know.”
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E0D8]">
            <p className="text-[10px] font-bold tracking-wider text-[#C85A32] uppercase mb-1">READ WITH LUMINA</p>
            <h3 className="text-xl font-serif font-semibold text-[#1F2421] mb-2">AI can help you understand this book.</h3>
            <p className="text-xs text-[#6B7280]">Explore unfamiliar ideas, trace key themes, or ask for context—without leaving the page.</p>
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      <section id="takeaways" className="space-y-8 max-w-[700px]">
        <p className="text-xs font-bold tracking-widest text-[#C85A32] uppercase">KEY TAKEAWAYS</p>
        <div className="divide-y divide-[#E5E0D8] border-t border-[#E5E0D8]">
          {takeawaysData.map((item) => (
            <div key={item.id} className="pt-[35px] pb-6 grid grid-cols-1 md:grid-cols-12 gap-4">
              <span className="md:col-span-1 text-sm font-serif italic text-[#C85A32]">{item.id}</span>
              <div className="md:col-span-11 space-y-1.5">
                <h3 className="text-xl font-serif font-medium text-[#1F2421]">{item.title}</h3>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};