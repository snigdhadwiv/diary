'use client';
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-raga-dark-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-raga-gold-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-raga-gold-400">Loading divine music...</p>
      </div>
    </div>
  )
}