"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
    items: string[]
    direction?: "left" | "right"
    speed?: number
    className?: string
    separator?: string
}

export function Marquee({
    items,
    direction = "left",
    speed = 20,
    className = "",
    separator = "•"
}: MarqueeProps) {
    return (
        <div className={`flex overflow-hidden whitespace-nowrap bg-neo-yellow border-y-3 border-main py-3 ${className}`}>
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex gap-8 items-center"
            >
                {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-8">
                        <span className="text-2xl font-black text-black uppercase tracking-widest">{item}</span>
                        <span className="text-xl font-bold text-black">{separator}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
