import React from 'react';
import { reviewsData, relatedBooksData } from '../../data/booksData';

export const RelatedBooks = () => {
  return (
    <div className="space-y-20 max-w-[1100px] mx-auto px-4 pt-10">
      {/* Reviews Section */}
      <section id="reviews" className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#C85A32] uppercase mb-2">READER REVIEWS</p>
            <h2 className="text-4xl font-serif text-[#1F2421]">What readers are saying</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-serif text-[#1F2421]">4.8</span>
            <div className="text-xs text-[#6B7280]">
              <div className="text-[#C85A32] text-sm">★★★★★</div>
              <span>From 2,438 readers</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((rev, idx) => (
            <div key={idx} className="bg-[#F3EFEA] p-7 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${rev.bgColor} text-white rounded-full flex items-center justify-center font-bold text-xs`}>
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2421]">{rev.name}</h4>
                      <p className="text-[10px] text-[#8C827A]">{rev.date}</p>
                    </div>
                  </div>
                  <span className="text-[#C85A32] text-xs">★★★★★</span>
                </div>
                <h3 className="text-lg font-serif font-medium text-[#1F2421] leading-snug">{rev.title}</h3>
                <p className="text-xs text-[#5A625E] leading-relaxed">{rev.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Books Grid */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.15em] text-[#C85A32] uppercase mb-2">KEEP READING</p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1F2421]">Related books</h2>
          </div>
          <a href="#explore" className="text-xs font-semibold text-[#1F2421] flex items-center gap-1 hover:underline">
            <span>Explore all</span> <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedBooksData.map((book) => (
            <div key={book.id} className="space-y-4 group cursor-pointer">
              <div className={`relative h-[330px] rounded-xl p-6 flex flex-col justify-between shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden ${book.coverStyle}`}>
                <div className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-80 z-10 text-right">{book.subtitle}</div>
                {book.customDesign}
                <h3 className="font-serif text-2xl leading-tight z-10 pr-2">{book.title}</h3>
                <div className="text-[9px] font-bold tracking-[0.15em] uppercase z-10 opacity-90">{book.author}</div>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#C85A32] uppercase">{book.tag}</p>
                <h4 className="text-base font-serif font-medium text-[#1F2421] leading-snug">{book.title}</h4>
                <p className="text-xs text-[#8C827A]">{book.author}</p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#EAE3D9] mt-3">
                  <span className="text-[#C85A32] font-semibold flex items-center gap-1">★ <span className="text-[#1F2421]">{book.rating}</span></span>
                  <span className="text-[10px] text-[#C85A32] font-medium">Included</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};