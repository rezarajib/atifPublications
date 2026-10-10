import React from 'react';

export const OrderSummary = () => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-[#EAE3D9] shadow-sm space-y-6">
      <p className="text-[10px] font-bold tracking-[0.18em] text-[#C85A32] uppercase">
        YOUR ORDER
      </p>

      <div className="flex gap-5 items-start">
        <div className="w-24 h-32 bg-[#D7E0D8] rounded-md p-2.5 shrink-0 border border-[#C0C9C1] flex flex-col justify-between relative overflow-hidden">
          <div className="text-[6px] font-bold tracking-widest text-[#6B7280] uppercase z-10">TIMELESS LESSONS ON</div>
          <div className="font-serif text-[10px] font-normal leading-tight text-[#1F2421] z-10">The Psychology of Money</div>
          <div className="text-[6px] font-bold text-[#6B7280] uppercase z-10">MORGAN HOUSEL</div>
          <div className="absolute -right-3 bottom-1 w-12 h-12 rounded-full border border-[#C85A32]/40"></div>
          <div className="absolute right-0 bottom-3 w-6 h-6 rounded-full bg-[#C85A32]"></div>
        </div>

        <div className="space-y-1.5">
          <p className="text-[9px] font-bold tracking-wider text-[#8C827A] uppercase">BOOK</p>
          <h3 className="font-serif text-lg font-medium text-[#1F2421] leading-tight">The Psychology of Money</h3>
          <p className="text-xs text-[#6B7280]">Morgan Housel</p>
          <p className="text-[11px] text-[#8C827A]">Digital edition · English</p>
          <p className="font-serif text-xl font-bold text-[#1F2421] pt-1">৳499</p>
        </div>
      </div>

      <hr className="border-[#F0EBDC]" />

      <div className="space-y-2 text-xs">
        <div className="flex justify-between text-[#6B7280]">
          <span>Subtotal</span>
          <span className="text-[#1F2421] font-medium">৳499</span>
        </div>
        <div className="flex justify-between text-[#6B7280]">
          <span>Delivery</span>
          <span className="text-[#1F2421] font-medium">Digital · Free</span>
        </div>
      </div>

      <hr className="border-[#F0EBDC]" />

      <div className="flex justify-between items-baseline">
        <div>
          <span className="text-xl font-serif font-semibold text-[#1F2421]">Total</span>
          <p className="text-[10px] text-[#8C827A] mt-0.5">Including applicable taxes</p>
        </div>
        <span className="text-3xl font-serif font-bold text-[#1F2421]">৳499</span>
      </div>

      <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE3D9] space-y-1">
        <p className="text-[10px] font-bold tracking-wider text-[#C85A32] uppercase">INSTANT ACCESS</p>
        <p className="text-xs text-[#6B7280] leading-relaxed">
          This book will be added to your Lumina library as soon as payment is complete.
        </p>
      </div>
    </div>
  );
};