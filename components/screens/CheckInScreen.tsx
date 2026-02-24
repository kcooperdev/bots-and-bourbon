"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Wine, CheckCircle } from "lucide-react";

// ─── Audio ────────────────────────────────────────────────────────────────────
// Warm A-major-7 chord (A3·C#4·E4·G#4) — Web Audio API, royalty-free.
function playWelcomeChord() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 0.06);
    masterGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.5);
    masterGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.9);
    masterGain.connect(ctx.destination);

    [220, 277.18, 329.63, 415.3].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.7 / 4, ctx.currentTime);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(ctx.currentTime + i * 0.04);
      osc.stop(ctx.currentTime + 2.1);
    });
  } catch {
    // silent fail
  }
}

// ─── Shimmer particles ────────────────────────────────────────────────────────
// Fixed values — no Math.random() at module level to avoid SSR/client mismatch.
const PARTICLES = [
  { id: 0,  x: 8,  delay: 0.0, size: 2.5, duration: 1.8 },
  { id: 1,  x: 17, delay: 0.3, size: 1.8, duration: 1.4 },
  { id: 2,  x: 26, delay: 0.9, size: 3.2, duration: 2.0 },
  { id: 3,  x: 34, delay: 0.5, size: 2.0, duration: 1.6 },
  { id: 4,  x: 41, delay: 1.2, size: 1.5, duration: 1.3 },
  { id: 5,  x: 50, delay: 0.1, size: 4.0, duration: 2.1 },
  { id: 6,  x: 57, delay: 0.7, size: 2.8, duration: 1.7 },
  { id: 7,  x: 63, delay: 1.4, size: 1.6, duration: 1.5 },
  { id: 8,  x: 70, delay: 0.4, size: 3.5, duration: 1.9 },
  { id: 9,  x: 76, delay: 1.1, size: 2.2, duration: 1.4 },
  { id: 10, x: 82, delay: 0.6, size: 1.7, duration: 2.0 },
  { id: 11, x: 88, delay: 0.2, size: 3.0, duration: 1.6 },
  { id: 12, x: 93, delay: 1.3, size: 2.4, duration: 1.8 },
  { id: 13, x: 12, delay: 0.8, size: 1.5, duration: 1.3 },
  { id: 14, x: 22, delay: 1.0, size: 2.9, duration: 2.2 },
  { id: 15, x: 46, delay: 0.3, size: 3.8, duration: 1.5 },
  { id: 16, x: 68, delay: 1.5, size: 2.1, duration: 1.9 },
  { id: 17, x: 97, delay: 0.9, size: 1.6, duration: 1.7 },
];

// ─── Badge ────────────────────────────────────────────────────────────────────
function Badge({
  guestName,
  onEnter,
}: {
  guestName: string;
  onEnter: () => void;
}) {
  const [shimmerDone, setShimmerDone] = useState(false);
  const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE ?? "2026";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-col items-center justify-center px-6"
    >
      {/* Card */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0, scale: 0.95 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        onAnimationComplete={() => {
          playWelcomeChord();
          setTimeout(() => setShimmerDone(true), 2200);
        }}
        style={{ perspective: 1200 }}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl
                   border border-[#E0AA3E]/25
                   bg-gradient-to-br from-[#0a0f1e] via-[#080808] to-[#050505]
                   shadow-[0_0_60px_rgba(0,200,255,0.12),0_0_120px_rgba(224,170,62,0.08)]"
      >
        {/* Hologram grid */}
        <div className="hologram-grid absolute inset-0 z-0" />

        {/* Corner glows */}
        <div className="absolute left-0 top-0 h-20 w-20 rounded-br-[80px] bg-[#00C8FF]/5" />
        <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-[80px] bg-[#E0AA3E]/5" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-8 py-10">
          <p className="text-[9px] font-bold tracking-[0.3em] text-[#00C8FF]/60 uppercase">
            BLK Tech Connect Presents
          </p>

          {/* Icon */}
          <motion.div
            className="my-5 flex h-16 w-16 items-center justify-center rounded-2xl
                       border border-[#E0AA3E]/30
                       bg-gradient-to-br from-[#1a1200] to-[#0a0f1e]
                       shadow-[0_0_20px_rgba(224,170,62,0.2)]"
            animate={{
              boxShadow: [
                "0 0 20px rgba(224,170,62,0.2)",
                "0 0 40px rgba(224,170,62,0.4)",
                "0 0 20px rgba(224,170,62,0.2)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Wine className="h-7 w-7 text-[#E0AA3E]" />
          </motion.div>

          <p className="text-[10px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            Welcome to the
          </p>
          <h2 className="mt-1 text-center text-2xl font-bold tracking-tight text-white">
            Bots <span className="text-[#E0AA3E]">&amp;</span> Bourbon
          </h2>
          <p className="text-center text-[11px] font-medium tracking-[0.15em] text-[#00C8FF]/80 uppercase">
            Experience
          </p>

          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#E0AA3E]/40 to-transparent" />

          <p className="text-[9px] font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Verified Guest
          </p>
          <h1 className="mt-1 text-center text-3xl font-bold tracking-tight text-[#F2C94C]">
            {guestName}
          </h1>

          <div className="mt-4 flex items-center gap-1.5 rounded-full border border-[#E0AA3E]/20 bg-[#E0AA3E]/8 px-3 py-1">
            <CheckCircle className="h-3 w-3 text-[#E0AA3E]" />
            <span className="text-[9px] font-semibold tracking-widest text-[#E0AA3E] uppercase">
              Access Granted
            </span>
          </div>

          <p className="mt-6 text-[10px] tracking-[0.2em] text-neutral-600 uppercase">
            {eventDate}
          </p>
        </div>

        {/* Gold shimmer sweep */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(242,201,76,0.22) 50%, transparent 70%)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "160%" }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.9 }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(0,200,255,0.10) 50%, transparent 70%)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "160%" }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#F2C94C]"
            style={{ left: `${p.x}%`, bottom: "35%", width: p.size, height: p.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -90, opacity: [0, 0.9, 0] }}
            transition={{
              duration: p.duration,
              delay: 1.0 + p.delay,
              ease: "easeOut",
              repeat: 1,
              repeatDelay: 0.3,
            }}
          />
        ))}
      </div>

      {/* Enter CTA */}
      <AnimatePresence>
        {shimmerDone && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={onEnter}
            className="group mt-8 flex flex-col items-center gap-3"
          >
            <motion.span
              className="text-sm font-semibold tracking-[0.2em] text-[#E0AA3E] uppercase"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Enter the Bots &amp; Bourbon Experience
            </motion.span>
            <motion.div
              className="h-px w-48 bg-gradient-to-r from-transparent via-[#E0AA3E]/60 to-transparent"
              animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function CheckInScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Optional ?name= param for personalised badge — defaults to "Valued Guest"
  const rawName = searchParams.get("name");
  const guestName = rawName
    ? decodeURIComponent(rawName).trim() || "Valued Guest"
    : "Valued Guest";

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_var(--gradient-stops))] from-[#04080f] via-[#020202] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_40%_at_50%_80%,_rgba(224,170,62,0.04),_transparent)]" />

      <Badge
        guestName={guestName}
        onEnter={() => router.push("/home")}
      />
    </div>
  );
}
