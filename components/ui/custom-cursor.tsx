"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Optimized hover detection
            const isInteractive = target.matches('a, button, input, textarea, [data-hover]') ||
                target.closest('a, button, input, textarea, [data-hover]') !== null

            // Only update state if it changed
            setIsHovered((prev) => (!!isInteractive !== prev ? !!isInteractive : prev))
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", checkHover)
        // We might want mouseout too to reset if leaving window or similar, 
        // but mouseover bubbles so it captures entering elements.

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", checkHover)
        }
    }, [cursorX, cursorY, isVisible])

    return (
        <>
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-neo-yellow mix-blend-difference pointer-events-none z-[9999]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neo-yellow mix-blend-difference pointer-events-none z-[9998]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    scale: { duration: 0.15 },
                    opacity: { duration: 0.2 }
                }}
            />
        </>
    )
}
