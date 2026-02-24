"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Home, DoorOpen, Mic2, Cpu, Gift, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const schedule = [
  {
    time: "6:00 PM",
    title: "Doors Open & Arrivals",
    desc: "Warm welcome, settle into the vibe.",
    icon: DoorOpen,
    color: "bg-[#00C8FF]/10 text-[#00C8FF]",
    dot: "#00C8FF",
  },
  {
    time: "6:45 PM",
    title: "Welcome & Introductions",
    desc: "Kickoff + community energy.",
    icon: Mic2,
    color: "bg-[#E0AA3E]/10 text-[#E0AA3E]",
    dot: "#E0AA3E",
  },
  {
    time: "7:00 PM",
    title: "Tech Talk",
    desc: "UMD researcher Troi Williams breaks down Bots in a fun, accessible way.",
    icon: Cpu,
    color: "bg-purple-500/10 text-purple-400",
    dot: "#a855f7",
  },
  {
    time: "7:30 PM",
    title: "Giveaways",
    desc: "Two tickets to the DiversiTech Conference in Philly (March 19–21).",
    icon: Gift,
    color: "bg-rose-500/10 text-rose-400",
    dot: "#f43f5e",
  },
  {
    time: "7:30 – 8:30 PM",
    title: "Networking & Final Vibes",
    desc: "Connect, sip, meet someone new, and close the night strong.",
    icon: Users,
    color: "bg-emerald-500/10 text-emerald-400",
    dot: "#10b981",
  },
];

export default function TonightsFlowScreen() {
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
          Tonight&apos;s Flow
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
          <h1 className="text-3xl font-bold text-gold">Tonight&apos;s Flow</h1>
          <p className="text-neutral-400 text-sm tracking-wider uppercase">
            Bots &amp; Bourbon Experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-[#00C8FF]/30 via-[#E0AA3E]/20 to-transparent" />

          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {/* Dot */}
              <div
                className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: `${item.dot}33`,
                  backgroundColor: `${item.dot}12`,
                }}
              >
                <item.icon className="h-4.5 w-4.5" style={{ color: item.dot }} size={18} />
              </div>

              {/* Content */}
              <div className="flex-1 rounded-2xl border border-white/5 bg-surface p-4">
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1"
                  style={{ color: item.dot }}
                >
                  {item.time}
                </p>
                <h3 className="font-bold text-white leading-snug">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-neutral-600 pb-4"
        >
          Schedule may shift slightly — go with the flow.
        </motion.p>
      </main>
    </div>
  );
}
