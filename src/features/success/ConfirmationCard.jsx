import React from 'react';

export const ConfirmationCard = ({ onGoToHome }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center w-full max-w-5xl">
      {/* Left: Big Book Showcase with Background Rings */}
      <div className="relative flex items-center justify-center py-10">
        <div className="absolute w-[380px] h-[380px] rounded-full border border-[#E2DDD5]"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full border border-[#E2DDD5]"></div>
        <div className="absolute w-[220px] h-[220px] rounded-full border border-[#E2DDD5]"></div>

        <div className="relative w-64 h-[410px] md:w-72 md:h-[440px] bg-[#D7E0D8] rounded-r-xl shadow-2xl p-7 flex flex-col justify-between border-l-4 border-[#C0C9C1] overflow-hidden z-10">
          <p className="text-[8px] font-bold tracking-[0.2em] text-[#6B7280] uppercase z-10">
            TIMELESS LESSONS ON
          </p>

          <div className="z-10 -mt-8">
            <h2 className="text-3xl font-serif text-[#1F2421] leading-tight font-normal">
              The Psychology of Money
            </h2>
          </div>

          <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-[0.18em] z-10">
            MORGAN HOUSEL
          </p>

          <div className="absolute -right-10 bottom-4 w-48 h-48 rounded-full border border-[#C85A32]/30"></div>
          <div className="absolute -right-6 bottom-8 w-36 h-36 rounded-full border border-[#C85A32]/50"></div>
          <div className="absolute right-0 bottom-12 w-20 h-20 rounded-full border border-[#C85A32]/70"></div>
          <div className="absolute right-4 bottom-16 w-12 h-12 rounded-full bg-[#C85A32]"></div>
        </div>

        <div className="absolute -bottom-2 bg-white/95 px-5 py-2.5 rounded-full shadow-lg border border-[#EAE3D9] flex items-center gap-2 text-xs font-medium text-[#1F2421] z-20">
          <span className="text-[#2E5A44] font-bold">✓</span>
          <span>Now in your library</span>
        </div>
      </div>

      {/* Right: Order Confirmation Details */}
      <div className="space-y-8">
        <div className="w-11 h-11 rounded-full bg-[#2B4C3F] text-white flex items-center justify-center text-lg font-bold shadow-sm">
          ✓
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-bold tracking-[0.18em] text-[#C85A32] uppercase">
            PAYMENT SUCCESSFUL
          </p>
          <h1 className="text-4xl md:text-[54px] font-serif text-[#1F2421] leading-[1.08] font-normal">
            A new story is waiting.
          </h1>
          <p className="text-sm text-[#5A625E] font-serif">
            <span className="italic text-[#1F2421]">The Psychology of Money</span> has been added to your library.
          </p>
        </div>

        <div className="border-t border-b border-[#EAE3D9] py-5 space-y-1.5">
          <p className="text-[9px] font-bold tracking-[0.15em] text-[#8C827A] uppercase">
            ORDER CONFIRMED
          </p>
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-medium text-[#1F2421]">Digital edition</span>
            <span className="font-serif text-2xl font-bold text-[#1F2421]">৳499</span>
          </div>
          <p className="text-[11px] text-[#8C827A] pt-0.5">
            A receipt has been sent to your email.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={onGoToHome}
              className="bg-[#1C2421] hover:bg-[#2B3531] text-white px-7 py-3.5 rounded-xl font-medium text-xs flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <span>Read Now</span>
              <span>→</span>
            </button>
            <button 
              onClick={onGoToHome}
              className="border border-[#D5CFC5] bg-white hover:bg-[#FAF8F5] text-[#1F2421] px-7 py-3.5 rounded-xl font-medium text-xs transition-all shadow-sm cursor-pointer"
            >
              Go to Library
            </button>
          </div>
          <p className="text-[11px] text-[#8C827A] pt-1">
            Available now on all your devices.
          </p>
        </div>
      </div>
    </div>
  );
};