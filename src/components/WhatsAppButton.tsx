export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/250788331660"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20B958] hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-2rem)]"
      aria-label="Chat with us on WhatsApp">

      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.2c-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.59.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.67-1.27-1.49-1.42-1.75-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.94-.21-.5-.43-.43-.59-.44l-.5-.01c-.17 0-.45.07-.68.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.8 2.75 4.36 3.85.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.53-.62 1.74-1.22.22-.6.22-1.11.15-1.22-.07-.11-.24-.17-.5-.3Z" />
        <path d="M16.01 3.2c-6.98 0-12.63 5.65-12.63 12.63 0 2.22.58 4.4 1.67 6.3L3.2 28.8l6.86-1.8c1.82.99 3.87 1.51 5.95 1.51h.01c6.98 0 12.63-5.65 12.63-12.63 0-3.38-1.32-6.55-3.71-8.94-2.38-2.39-5.56-3.71-8.93-3.71Zm0 23.17h-.01c-1.89 0-3.74-.5-5.35-1.45l-.38-.22-4.07 1.07 1.09-3.96-.24-.41a10.45 10.45 0 0 1-1.6-5.52c0-5.76 4.69-10.45 10.46-10.45 2.79 0 5.41 1.08 7.38 3.06a10.39 10.39 0 0 1 3.06 7.39c0 5.77-4.69 10.46-10.45 10.46Z" />
      </svg>
      <span className="text-xs sm:text-sm font-semibold tracking-wide">WhatsApp</span>

      <span className="hidden sm:block absolute right-full mr-4 px-3 py-1.5 bg-kiqao-black text-kiqao-cream text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-kiqao-gold/30 shadow-gold-sm">
        +250788 331 660
      </span>
    </a>);

}
