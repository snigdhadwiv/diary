'use client';
import Link from 'next/link';
import { useState } from 'react';
import RaagCard from '@/components/RaagCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [showRaags, setShowRaags] = useState(false);

  return (
    <main className="min-h-screen bg-ragas-cream text-ragas-dark flex flex-col font-sans">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gradient-to-br from-[#7e1212] via-[#a55b0f] to-[#fef9f1] text-white shadow-inner rounded-b-[3rem]">
        <h1 className="text-6xl font-bold font-devanagari drop-shadow-2xl tracking-wide mb-4">
          संगीत डायरी
        </h1>
        <p className="text-lg max-w-2xl text-white/90 mb-8">
          Discover the depth of Hindustani Classical Music — practice, explore, and learn with Divine Tanpura, authentic Raag data, and an AI-powered guide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/tanpura"
            className="bg-ragas-gold hover:bg-yellow-300 text-ragas-dark px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            🎵 Tanpura Player
          </Link>
          <button 
            onClick={() => setShowRaags(!showRaags)} 
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-7 py-3 rounded-full font-semibold border border-ragas-gold/30 shadow-lg hover:scale-105 transition duration-300"
          >
            🔍 Explore Raags
          </button>
        </div>
      </section>

      {showRaags && (
        <section className="px-6 py-14 mx-4 my-10 bg-white/40 backdrop-blur-xl rounded-3xl border border-ragas-gold/30 shadow-2xl transition-all duration-500">
          <h2 className="text-4xl font-semibold mb-8 text-center text-ragas-dark font-devanagari">
            प्रमुख राग
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RaagCard />
          </div>
        </section>
      )}

      <section className="text-center my-16">
        <Link 
          href="/get-started"
          className="underline text-lg text-ragas-dark hover:text-ragas-gold transition font-medium"
        >
          ✨ Sign Up / Log In to begin your journey
        </Link>
      </section>

      <section className="bg-gradient-to-r from-[#2e0404] to-[#7e1212] text-white py-16 px-6 rounded-t-[3rem]">
        <h3 className="text-3xl font-bold mb-4 font-devanagari text-center">RaagaBot 🤖</h3>
        <p className="mb-10 text-sm max-w-xl mx-auto text-center text-white/90">
          Ask anything about Hindustani Vocal Music — raag info, theory, practice tips & more!
        </p>

        <div className="bg-white/10 rounded-xl p-6 text-left text-sm max-w-2xl mx-auto border border-white/20 backdrop-blur-md shadow-lg">
          [ RaagaBot UI will go here — working on it! ]
        </div>
      </section>

      <Footer />
    </main>
  );
}
