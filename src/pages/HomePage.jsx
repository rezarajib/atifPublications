import React from 'react';
import Navbar from '../components/layout/Navbar';
import BookHero from '../features/book/BookHero';
import { BookOverview } from '../features/book/BookOverview';
import { RelatedBooks } from '../features/book/RelatedBooks';
import { Footer } from '../components/layout/Footer';

export default function HomePage({ onBuyNow }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2421]">
      <Navbar 
        onGoHome={() => {}} 
        onBuyNow={onBuyNow} 
      />

      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 space-y-16">
        {/* Book Hero (Buy Button triggers Checkout) */}
        <BookHero onBuyBook={onBuyNow} />

        {/* Details & Takeaways */}
        <BookOverview />

        {/* Reviews & Related Books Grid */}
        <RelatedBooks />
      </main>

      <Footer />
    </div>
  );
}