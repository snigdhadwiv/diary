// components/RaagCard.js
'use client';
import { useEffect, useState } from 'react';

export default function RaagCard() {
  const [raags, setRaags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/raag')
      .then((res) => res.json())
      .then((data) => {
        setRaags(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center w-full">Loading raags...</p>;

  return raags.map((raag) => (
    <div
      key={raag.id}
      className="bg-white/10 border border-ragas-gold/30 rounded-xl p-5 shadow-md hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold text-ragas-gold-400 mb-2">{raag.name}</h3>
      <p className="text-sm text-ragas-dark mb-1"><strong>Thaat:</strong> {raag.thaat}</p>
      <p className="text-sm text-ragas-dark mb-1"><strong>Jaati:</strong> {raag.jaati}</p>
      <p className="text-sm text-ragas-dark mb-1"><strong>Time:</strong> {raag.time}</p>
      <p className="text-sm text-ragas-dark"><strong>Description:</strong> {raag.description}</p>
    </div>
  ));
}
