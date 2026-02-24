"use client";

import { motion } from "framer-motion";
import { ChevronDown, Wine } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
    const router = useRouter();

    const handleStart = () => {
        router.push("/home");
    };

    return (
        <div
            onClick={handleStart}
            className="relative flex h-screen w-full flex-col items-center justify-center bg-black overflow-hidden cursor-pointer"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gradient-stops))] from-[#2a2010] via-black to-black opacity-60" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="z-10 flex flex-col items-center gap-6"
            >
                {/* Logo Icon */}
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-gold/20 bg-surface/50 shadow-[0_0_30px_rgba(224,170,62,0.1)] backdrop-blur-md">
                    <Wine className="h-10 w-10 text-gold shadow-gold drop-shadow-lg" />
                </div>

                {/* Text */}
                <div className="text-center">
                    <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                        BLK Tech Connect Presents
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-md">
                        Bots <span className="text-gold">&</span> Bourbon
                    </h1>
                    <p className="mt-2 text-xs font-medium tracking-[0.2em] text-gold/80 uppercase">
                        The Bourbon Recommender
                    </p>
                </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 z-10 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
                    Tap to Begin
                </span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <ChevronDown className="h-4 w-4 text-gold" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
