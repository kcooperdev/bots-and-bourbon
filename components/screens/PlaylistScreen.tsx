"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Home, Music2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlaylistScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black pb-24 pt-24 px-4 text-white font-sans flex flex-col items-center">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
          The Playlist
        </span>
        <button
          onClick={() => router.push("/home")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white active:scale-95"
        >
          <Home className="h-4 w-4" />
        </button>
      </header>

      <main className="w-full max-w-md space-y-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E0AA3E]/25 bg-[#0a0800] shadow-[0_0_24px_rgba(224,170,62,0.12)]">
              <Music2 className="h-6 w-6 text-[#E0AA3E]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gold">The Playlist</h1>
          <p className="text-neutral-400 text-sm tracking-wider uppercase">
            Bots &amp; Bourbon Vibes
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E0AA3E]/20 to-transparent" />

        {/* Spotify Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full overflow-hidden rounded-2xl"
        >
          <iframe
            src="https://open.spotify.com/embed/playlist/6qOInMsQuaeO4cKCJSky7p?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ borderRadius: "16px" }}
          />
        </motion.div>

        <p className="text-center text-xs text-neutral-700 pb-4">
          Curated for the night. Sip &amp; enjoy.
        </p>
      </main>
    </div>
  );
}
