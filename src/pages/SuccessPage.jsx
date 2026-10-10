import React from 'react';
import { ConfirmationCard } from '../features/success/ConfirmationCard';

export default function SuccessPage({ onGoToHome }) {
  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#1F2421] font-sans flex flex-col justify-between">
      <header className="w-full border-b border-[#EAE3D9] px-6 md:px-16 py-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#C85A32] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg">A</div>
            <span className="font-serif text-2xl font-medium tracking-tight">Atif Publications LLC</span>
          </div>
          <span className="text-xs text-[#8C827A]">Purchase complete</span>
        </div>
      </header>

      <main className="max-w-[1280px] w-full mx-auto px-6 md:px-16 py-12 flex-1 flex items-center justify-center">
        <ConfirmationCard onGoToHome={onGoToHome} />
      </main>

      <footer className="w-full border-t border-[#EAE3D9] px-6 md:px-16 py-5 text-xs text-[#8C827A]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <p>© 2025 Lumina Books</p>
          <div className="flex gap-6">
            <a href="#help" className="hover:underline">Need help?</a>
            <a href="#receipt" className="hover:underline">View receipt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}