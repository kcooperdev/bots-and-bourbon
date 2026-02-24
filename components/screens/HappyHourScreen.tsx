"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Clock, Calendar, Beer, Wine, Martini, Utensils, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HappyHourScreen() {
    const router = useRouter();

    const sections = [
        {
            title: "Happy Hour",
            subtitle: "Monday - Friday • 4-7PM",
            icon: Clock,
            items: [
                { name: "Domestic Beer", price: "3.50" },
                { name: "Import Beer", price: "4.50" },
                { name: "Red Sangria", price: "5" },
                { name: "Wine", price: "5" },
                { name: "Rail", price: "6" },
                { name: "Lemon Drop", price: "7" },
                { name: "Margarita", price: "7" },
                { name: "Luna Azul", price: "8" },
                { name: "Hennessy", price: "8" },
                { name: "Casamigos Blanco", price: "9" },
            ],
            food: [
                { name: "Wings (6)", price: "10" },
                { name: "Sweet & Spicy Shrimp (4)", price: "10" },
                { name: "Cheeseburger Sliders (2)", price: "10" },
            ]
        },
        {
            title: "Daily Specials",
            subtitle: "Monday - Thursday • 4-7PM",
            icon: Calendar,
            days: [
                {
                    day: "Monday",
                    items: [
                        { name: "Steak & 2 Sides", price: "22" },
                        { name: "1/2 Price Bottle of Wine", price: "" },
                    ]
                },
                {
                    day: "Taco Tuesday",
                    items: [
                        { name: "(1) Oxtail", price: "7" },
                        { name: "(3) Oxtail", price: "18" },
                        { name: "(1) Taco", price: "5" },
                        { name: "(3) Salmon", price: "14" },
                        { name: "(3) Shrimp", price: "13" },
                        { name: "(3) Chicken", price: "12" },
                    ]
                },
                {
                    day: "Wednesday",
                    items: [
                        { name: "Catfish & 2 Sides", price: "19" },
                        { name: "1/2 Price Bottle of Prosecco", price: "" },
                    ]
                },
                {
                    day: "Thursday",
                    items: [
                        { name: "Burger and Fries", price: "19" },
                    ]
                }
            ]
        }
    ];

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
                    Specials
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
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gold">Happy Hour</h1>
                    <p className="text-neutral-400 text-sm tracking-wider uppercase">The Best Hours of the Day</p>
                </div>

                {/* Happy Hour Menu */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-surface rounded-3xl p-6 border border-white/5 relative overflow-hidden"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-gold/10 text-gold">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Drinks & Eats</h2>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">Mon-Fri • 4-7PM</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Beverages */}
                        <div>
                            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Martini className="w-4 h-4" /> Beverage
                            </h3>
                            <div className="space-y-2">
                                {sections[0].items?.map((item, i) => (
                                    <div key={i} className="flex justify-between items-baseline text-sm">
                                        <span className="text-neutral-300">{item.name}</span>
                                        <span className="text-white font-bold">${item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Food */}
                        <div className="pt-4 border-t border-white/5">
                            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Utensils className="w-4 h-4" /> Food
                            </h3>
                            <div className="space-y-2">
                                {sections[0].food?.map((item, i) => (
                                    <div key={i} className="flex justify-between items-baseline text-sm">
                                        <span className="text-neutral-300">{item.name}</span>
                                        <span className="text-white font-bold">${item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Daily Specials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-surface rounded-3xl p-6 border border-white/5 relative overflow-hidden"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-gold/10 text-gold">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Daily Specials</h2>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">Mon-Thu • 4-7PM</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {sections[1].days?.map((daySpec, i) => (
                            <div key={i} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{daySpec.day}</h3>
                                <div className="space-y-2">
                                    {daySpec.items.map((item, j) => (
                                        <div key={j} className="flex justify-between items-baseline text-sm">
                                            <span className="text-neutral-400">{item.name}</span>
                                            {item.price && <span className="text-gold font-bold">${item.price}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <p className="text-center text-sm font-bold text-white uppercase tracking-wide pb-8">
                    %18 gratuity added to all checks
                </p>
            </main>
        </div>
    );
}
