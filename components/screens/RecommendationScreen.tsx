"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Share2, RefreshCcw, Droplets, Martini, Citrus, Home } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import { drinksData } from "@/lib/drinks";
import { cn } from "@/lib/utils";

// Helper to cycle images consistently
const DRINK_IMAGES = ["/old-fashioned.png", "/golden-sour.png", "/maple-smash.png"];
const getDrinkImage = (id: string) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
    const index = Math.abs(hash) % DRINK_IMAGES.length;
    return DRINK_IMAGES[index];
};

export default function RecommendationScreen() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentVibe = searchParams.get("vibe");

    const filteredDrinks = useMemo(() => {
        if (!currentVibe) return drinksData;
        return drinksData.filter(d => d.category === currentVibe);
    }, [currentVibe]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fallback if no drinks found (shouldn't happen with correct data)
    const activeDrinks = filteredDrinks.length > 0 ? filteredDrinks : drinksData;
    const currentDrink = activeDrinks[currentIndex % activeDrinks.length];

    const handleNextDrink = () => {
        setCurrentIndex((prev) => (prev + 1));
    };

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
                    Your Vibe {currentVibe && `• ${currentVibe}`}
                </span>
                <button
                    onClick={() => router.push("/home")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-white active:scale-95"
                >
                    <Home className="h-4 w-4" />
                </button>
            </header>

            {/* Product Card */}
            <motion.div
                key={currentDrink.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-sm rounded-[2rem] bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 p-1 border border-white/5 relative overflow-hidden"
            >
                {/* Glow behind */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative rounded-[1.8rem] bg-[#0A0A0A] p-6 flex flex-col gap-6 overflow-hidden">

                    {/* Image Area */}
                    <div className="relative h-64 w-full rounded-2xl bg-neutral-800 overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url('${getDrinkImage(currentDrink.id)}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        <div className="absolute top-4 left-4 rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold text-black uppercase tracking-wider">
                            Recommended For You
                        </div>
                    </div>

                    {/* Title & Stats */}
                    <div>
                        <h1 className="text-3xl font-bold leading-tight">{currentDrink.name}</h1>
                        <p className="text-gold font-medium mt-1 capitalize">{currentDrink.category} Collection</p>

                        {/* Tags */}
                        <div className="flex gap-2 mt-4 flex-wrap">
                            {currentDrink.vibe_keywords.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-neutral-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-y-4 text-sm mt-2 border-t border-white/5 pt-4">
                        <div className="space-y-3">
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Ingredients</span>
                            {currentDrink.ingredients.map((ing, i) => (
                                <div key={i} className="flex items-center gap-2 text-neutral-300">
                                    <Droplets className="h-4 w-4 text-gold shrink-0" />
                                    <span className="capitalize">{ing}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description (Quote style) */}
                    <p className="text-sm italic text-neutral-500 border-l-2 border-gold/50 pl-3">
                        "{currentDrink.description}"
                    </p>
                </div>
            </motion.div>

            {/* Secondary Action */}
            <button
                onClick={handleNextDrink}
                className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-white transition-colors cursor-pointer active:scale-95"
            >
                <RefreshCcw className="h-3 w-3" />
                Show me something else
            </button>

        </div>
    );
}
