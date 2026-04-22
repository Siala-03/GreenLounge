import React from 'react';
import { MessageCircle } from 'lucide-react';
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/250788331660"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20B958] hover:scale-105 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp">

      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-kiqao-black text-kiqao-cream text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-kiqao-gold/30 shadow-gold-sm">
        Chat with us
      </span>
    </a>);

}
