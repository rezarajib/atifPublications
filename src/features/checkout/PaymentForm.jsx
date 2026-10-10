import React from 'react';
import { paymentMethods } from '../../data/paymentMethods';
import { Selector } from '../../components/ui/Selector';

export const PaymentForm = ({ selectedMethod, setSelectedMethod, onPaySuccess }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-sm font-serif italic text-[#C85A32]">02</span>
        <h2 className="text-xl font-serif font-medium text-[#1F2421]">Payment Method</h2>
      </div>

      <Selector 
        options={paymentMethods} 
        selectedId={selectedMethod} 
        onSelect={setSelectedMethod} 
      />

      <p className="text-[11px] text-[#8C827A]">
        You'll be redirected to {selectedMethod} to complete your payment securely.
      </p>

      <button 
        onClick={onPaySuccess}
        className="w-full bg-[#1C2421] hover:bg-[#2B3531] text-white py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
      >
        <span>Pay ৳499</span>
        <span>→</span>
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C827A] pt-1">
        <span>🔒</span>
        <span>Your payment information is encrypted and secure.</span>
      </div>
    </div>
  );
};