"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

interface ListItem {
    title: string
    subtitle: string
    image: string
}

interface HoverImageRevealProps {
    items: ListItem[]
    className?: string
}

export function HoverImageReveal({ items, className = "" }: HoverImageRevealProps) {
    const [activeIdx, setActiveIdx] = useState<number | null>(null)

    // Use motion values for performant updates without re-renders
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring physics for the cursor follower
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const xSpring = useSpring(x, springConfig)
    const ySpring = useSpring(y, springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
    }

    return (
        <div
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveIdx(null)}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className="flex items-center justify-between py-8 border-b-2 border-dashed border-main/30 cursor-pointer group transition-all hover:bg-main/5 hover:px-4"
                >
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-main uppercase italic group-hover:translate-x-2 transition-transform">
                            {item.title}
                        </span>
                        <span className="text-main/60 font-bold mt-1 group-hover:translate-x-2 transition-transform delay-75">
                            {item.subtitle}
                        </span>
                    </div>
                    <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                    </div>
                </div>
            ))}

            <AnimatePresence>
                {activeIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        style={{
                            position: "absolute",
                            left: xSpring,
                            top: ySpring,
                            x: 20, // Offset
                            y: -100, // Offset
                            pointerEvents: "none"
                        }}
                        className="z-50 w-64 h-40 border-3 border-main shadow-neo bg-cover bg-center hidden md:block"
                    >
                        {items[activeIdx].image.includes('placehold') ? (
                            <div className="w-full h-full bg-neo-yellow pattern-cross opacity-100 flex items-center justify-center text-4xl font-black text-main">
                                {activeIdx + 1}
                            </div>
                        ) : (
                            <img
                                src={items[activeIdx].image}
                                alt={items[activeIdx].title}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {/* Fallback/Overlay just in case */}
                        {(!items[activeIdx].image || items[activeIdx].image.includes('placehold')) && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                {/* Helper content if needed */}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
