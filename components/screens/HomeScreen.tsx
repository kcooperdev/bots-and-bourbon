"use client";

import { motion } from "framer-motion";
import { ChevronRight, Disc, Clock, Zap, CreditCard, Music2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/header";

export default function HomeScreen() {
    const router = useRouter();

    const menuItems = [
        {
            id: "happy-hour",
            title: "Happy Hour Specials",
            desc: "Daily deals on drinks and food",
            icon: Clock,
            color: "bg-purple-500/10 text-purple-400",
            path: "/happy-hour",
        },
        {
            id: "vibe",
            title: "Vibe Pick",
            desc: "Match the energy of the nightlife",
            icon: Disc,
            color: "bg-orange-500/10 text-orange-400",
            path: "/vibe",
        },
        {
            id: "flow",
            title: "Tonight's Flow",
            desc: "The full event schedule",
            icon: Zap,
            color: "bg-[#00C8FF]/10 text-[#00C8FF]",
            path: "/flow",
        },
        {
            id: "badge",
            title: "Virtual Card",
            desc: "Your animated access badge",
            icon: CreditCard,
            color: "bg-[#E0AA3E]/10 text-[#E0AA3E]",
            path: "/check-in",
        },
        {
            id: "playlist",
            title: "The Playlist",
            desc: "Bots & Bourbon vibes on Spotify",
            icon: Music2,
            color: "bg-emerald-500/10 text-emerald-400",
            path: "/playlist",
        },
    ];

    return (
        <div className="min-h-screen bg-black pb-20 pt-24 px-6 text-white font-sans">
            <Header />

            <main className="flex flex-col gap-8">
                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                >
                    <h1 className="text-3xl font-bold leading-tight">
                        Find Your <br />
                        <span className="text-gold italic">Perfect Pour</span>
                    </h1>
                    <p className="text-sm text-neutral-400">
                        I'm looking for a drink and need a good bourbon recommendation...
                    </p>
                </motion.div>

                {/* Menu Grid */}
                <div className="flex flex-col gap-4">
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => router.push(item.path)}
                            className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-surface p-5 transition-all active:scale-[0.98]"
                        >
                            {/* Icon */}
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                                <item.icon className="h-6 w-6" />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-white">{item.title}</h3>
                                <p className="text-xs text-neutral-500">{item.desc}</p>
                            </div>

                            {/* Arrow */}
                            <ChevronRight className="h-5 w-5 text-neutral-600 transition-transform group-hover:translate-x-1" />

                            {/* Glow Effect */}
                            <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>

                {/* Featured Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => router.push("/recommendation?vibe=bold")}
                    className="relative mt-4 h-48 w-full overflow-hidden rounded-3xl border border-white/10 cursor-pointer active:scale-[0.98] transition-all"
                >
                    {/* Placeholder for Featured Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                    <div className="absolute inset-0 bg-[url('/old-fashioned.png')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-black/40" /> {/* Dim overlay */}

                    <div className="absolute top-0 right-0 p-10 bg-gold/20 blur-[60px] rounded-full" />

                    <div className="absolute bottom-5 left-5 z-20">
                        <span className="text-[10px] font-bold tracking-widest text-gold mb-1 block">FEATURED TONIGHT</span>
                        <p className="font-bold text-white">The Midnight Old Fashioned</p>
                        <p className="text-[10px] text-neutral-400">Smokey, Oak, Caramel notes</p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
