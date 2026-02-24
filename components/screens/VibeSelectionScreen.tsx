"use client";

import { motion } from "framer-motion";
import { Compass, Flame, Snowflake, Users, ChevronLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VibeSelectionScreen() {
    const router = useRouter();
    const [selectedVibe, setSelectedVibe] = useState<string | null>(null);

    const vibes = [
        { id: "bold", label: "Bold", icon: Flame, color: "text-orange-500" },
        { id: "chill", label: "Chill", icon: Snowflake, color: "text-blue-400" },
        { id: "social", label: "Social", icon: Users, color: "text-yellow-400" },
        { id: "adventurous", label: "Adventurous", icon: Compass, color: "text-purple-400" },
    ];

    const handleContinue = () => {
        if (selectedVibe) {
            router.push(`/recommendation?vibe=${selectedVibe}`);
        }
    };

    return (
        <div className="min-h-screen bg-black pb-24 pt-24 px-6 text-white font-sans flex flex-col">
            {/* Custom Header inline for back button logic */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center p-6 backdrop-blur-md">
                <button
                    onClick={() => router.back()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white active:scale-95"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex-1 text-center">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                        Select Your Vibe
                    </span>
                </div>
                <button
                    onClick={() => router.push("/home")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white active:scale-95"
                >
                    <Home className="h-4 w-4" />
                </button>
            </header>

            <main className="flex-1 flex flex-col gap-6">
                <div className="text-center space-y-2 mt-4">
                    <h1 className="text-2xl font-bold">What's the energy <br /><span className="text-gold">tonight?</span></h1>
                    <p className="text-[10px] tracking-widest text-neutral-500 uppercase">Premium Bourbon Selection</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    {vibes.map((vibe) => {
                        const isSelected = selectedVibe === vibe.id;
                        return (
                            <motion.button
                                key={vibe.id}
                                onClick={() => setSelectedVibe(vibe.id)}
                                whileTap={{ scale: 0.95 }}
                                className={`relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border transition-all duration-300 ${isSelected
                                    ? "border-gold bg-gold/10 shadow-[0_0_20px_rgba(224,170,62,0.2)]"
                                    : "border-white/10 bg-surface text-neutral-400 hover:bg-white/5"
                                    }`}
                            >
                                <div className={`rounded-full bg-black/30 p-3 ${isSelected ? vibe.color : "text-neutral-500"}`}>
                                    <vibe.icon className="h-6 w-6" />
                                </div>
                                <span className={`text-sm font-medium ${isSelected ? "text-white" : "text-neutral-400"}`}>
                                    {vibe.label}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Full width option */}

            </main>

            {/* Footer Button */}
            <div className="fixed bottom-8 left-0 right-0 px-6">
                <button
                    onClick={handleContinue}
                    disabled={!selectedVibe}
                    className={`w-full rounded-full py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg transition-all ${selectedVibe
                        ? "bg-gold hover:bg-gold-light opacity-100"
                        : "bg-neutral-800 text-neutral-500 opacity-50 cursor-not-allowed"
                        }`}
                >
                    Continue Selection
                </button>
            </div>
        </div>
    );
}
