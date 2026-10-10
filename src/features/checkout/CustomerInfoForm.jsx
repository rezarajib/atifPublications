import React from 'react';

export const CustomerInfoForm = ({ name, setName, email, setEmail }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-sm font-serif italic text-[#C85A32]">01</span>
        <h2 className="text-xl font-serif font-medium text-[#1F2421]">Customer Information</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold tracking-wider text-[#6B7280] uppercase">Name</label>
          <input 
            type="text" 
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#E0D9CE] focus:border-[#C85A32] outline-none rounded-xl px-4 py-3.5 text-sm text-[#1F2421]"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold tracking-wider text-[#6B7280] uppercase">Email</label>
          <input 
            type="email" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#E0D9CE] focus:border-[#C85A32] outline-none rounded-xl px-4 py-3.5 text-sm text-[#1F2421]"
          />
        </div>
      </div>
    </div>
  );
};