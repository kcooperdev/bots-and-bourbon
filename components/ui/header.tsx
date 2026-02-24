"use client";

import { Menu, User } from "lucide-react";

export default function Header({
    title = "BOTS & BOURBON",
    showBack = false,
    onBack,
}: {
    title?: string;
    showBack?: boolean;
    onBack?: () => void;
}) {
    return (
        <header className="fixed top-0 z-50 flex w-full items-center justify-center px-6 py-4 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                {title}
            </span>
        </header>
    );
}
