'use client';

import { useEffect, useRef, useState } from 'react';

const NOTES = ['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];

export default function TanpuraPage() {
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const gainRef = useRef(null);
  const bufferRef = useRef(null);

  const [semitoneIndex, setSemitoneIndex] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    gainRef.current = audioContextRef.current.createGain();

    fetch('/tanpura.mp3')
      .then((res) => res.arrayBuffer())
      .then((data) => {
        if (audioContextRef.current) {
          return audioContextRef.current.decodeAudioData(data);
        }
      })
      .then((decoded) => {
        if (decoded) {
          bufferRef.current = decoded;
          playAudio(semitoneIndex);
        }
      });

    return () => stopAudio();
  }, []);

  const playAudio = (semitones) => {
    stopAudio();
    if (!audioContextRef.current || !bufferRef.current) return;
    const ctx = audioContextRef.current;
    const source = ctx.createBufferSource();
    source.buffer = bufferRef.current;
    source.loop = true;
    source.detune.value = semitones * 100;
    source.connect(gainRef.current).connect(ctx.destination);
    source.start(0);
    gainRef.current.gain.value = volume;
    sourceRef.current = source;
  };

  const stopAudio = () => {
    if (sourceRef.current) {
      try {
        sourceRef.current.stop();
        sourceRef.current.disconnect();
      } catch {}
    }
  };

  const changeKey = (direction) => {
    const newIndex = (semitoneIndex + direction + NOTES.length) % NOTES.length;
    setSemitoneIndex(newIndex);
    playAudio(newIndex);
  };

  const handleDropdownChange = (e) => {
    const newIndex = NOTES.indexOf(e.target.value);
    setSemitoneIndex(newIndex);
    playAudio(newIndex);
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (gainRef.current) gainRef.current.gain.value = vol;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-[0.5]"
      >
        <source src="/sunset.mp4" type="video/mp4" />
      </video>

      <div className="min-h-screen flex flex-col justify-center items-center gap-8 px-4 text-center">
        <h1 className="text-6xl font-bold text-yellow-100 drop-shadow-lg bg-red-900/60 px-8 py-4 rounded-2xl font-serif">
          Divine Tanpura
        </h1>

        <p className="text-2xl font-semibold text-yellow-100 bg-black/40 px-4 py-2 rounded-xl">
          Current Note: <span className="text-yellow-300">{NOTES[semitoneIndex]}</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => playAudio(semitoneIndex)}
            className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold px-6 py-3 rounded-2xl shadow-xl transition"
          >
            🔊 Play / Restart
          </button>

          <button
            onClick={() => changeKey(-1)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-2xl shadow-xl transition"
          >
            🔽 Key Down
          </button>

          <button
            onClick={() => changeKey(1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-2xl shadow-xl transition"
          >
            🔼 Key Up
          </button>

          <select
            value={NOTES[semitoneIndex]}
            onChange={handleDropdownChange}
            className="bg-white/90 text-black font-semibold px-5 py-3 rounded-2xl shadow-lg backdrop-blur-sm"
          >
            {NOTES.map((note, idx) => (
              <option key={idx} value={note}>
                {note}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center gap-2 mt-6 w-full max-w-sm">
          <label className="text-yellow-100 font-semibold text-lg bg-black/40 px-3 py-1 rounded-lg">
            Volume: {(volume * 100).toFixed(0)}%
          </label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-yellow-400"
          />
        </div>
      </div>
    </div>
  );
}
