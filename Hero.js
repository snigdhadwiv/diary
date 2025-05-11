'use client';
import Link from 'next/link';
import RaagCard from "./RaagCard";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-24 px-4 text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-pink-500 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h1 className="font-devanagari text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The <span className="text-yellow-400">Music</span> Diary
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Your complete online companion for Hindustani Classical Music
        </p>

        {/* 🚀 updated buttons with links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-started">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </Link>
          <Link href="/explore">
            <button className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
              Explore Ragas
            </button>
          </Link>
        </div>
      </div>

      {/* Floating musical notes */}
      <div className="absolute top-20 left-10 text-4xl animate-float">🎵</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-float animation-delay-2000">🎶</div>
    </section>
  );
}
