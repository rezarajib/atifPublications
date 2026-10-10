import React, { useState } from 'react';
import { paymentMethods } from '../data/paymentMethods';
import { OrderSummary } from '../features/checkout/OrderSummary';

export default function CheckoutPage({ onBack, onPaySuccess }) {
  const [selectedMethod, setSelectedMethod] = useState('bkash');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#1F2421] flex flex-col justify-between">
      <header className="w-full border-b border-[#EAE3D9] px-6 md:px-16 py-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#C85A32] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg">A</div>
            <span className="font-serif text-2xl font-medium tracking-tight">Atif Publications LLC</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
            <span>🔒</span>
            <span>Secure checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] w-full mx-auto px-6 md:px-16 py-10 flex-1">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#1F2421] mb-8 cursor-pointer">
          <span>‹</span> Back to book
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#C85A32] uppercase mb-2">COMPLETE YOUR PURCHASE</p>
              <h1 className="text-4xl md:text-[52px] font-serif text-[#1F2421] leading-tight mb-2 font-normal">Checkout</h1>
              <p className="text-[#6B7280] text-sm">Your next great read is almost yours.</p>
            </div>

            <hr className="border-[#EAE3D9]" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-serif italic text-[#C85A32]">01</span>
                <h2 className="text-xl font-serif font-medium text-[#1F2421]">Customer Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider text-[#6B7280] uppercase">Name</label>
                  <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#FAF8F5] border border-[#E0D9CE] focus:border-[#C85A32] outline-none rounded-xl px-4 py-3.5 text-sm text-[#1F2421]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider text-[#6B7280] uppercase">Email</label>
                  <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#FAF8F5] border border-[#E0D9CE] focus:border-[#C85A32] outline-none rounded-xl px-4 py-3.5 text-sm text-[#1F2421]" />
                </div>
              </div>
            </div>

            <hr className="border-[#EAE3D9]" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-serif italic text-[#C85A32]">02</span>
                <h2 className="text-xl font-serif font-medium text-[#1F2421]">Payment Method</h2>
              </div>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label key={method.id} onClick={() => setSelectedMethod(method.id)} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${selectedMethod === method.id ? 'border-[#C85A32] bg-[#FAF8F5] shadow-sm' : 'border-[#EAE3D9]'}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" checked={selectedMethod === method.id} readOnly className="accent-[#C85A32]" />
                      <div className={`w-8 h-8 rounded-lg ${method.logoBg} text-white font-bold flex items-center justify-center text-xs`}>{method.logoText}</div>
                      <div>
                        <p className="text-xs font-bold text-[#1F2421]">{method.name}</p>
                        <p className="text-[11px] text-[#8C827A]">{method.subtext}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <button onClick={onPaySuccess} className="w-full bg-[#1C2421] hover:bg-[#2B3531] text-white py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm">
                <span>Pay ৳499</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <OrderSummary />
        </div>
      </main>

      <footer className="w-full border-t border-[#EAE3D9] px-6 md:px-16 py-5 text-xs text-[#8C827A]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <p>© 2025 Lumina Books</p>
          <div className="flex gap-6">
            <a href="#terms" className="hover:underline">Terms</a>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#help" className="hover:underline">Need help?</a>
          </div>
        </div>
      </footer>
    </div>
  );
}