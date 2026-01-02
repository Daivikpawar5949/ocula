"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="fixed top-0 left-0 right-0 h-4 bg-muted z-[9999] border-b-2 border-black">
            <motion.div
                className="h-full bg-neo-green origin-left border-r-2 border-black"
                style={{ scaleX }}
            />
        </div>
    )
}
