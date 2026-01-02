"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [complete, setComplete] = useState(false)
    const [text, setText] = useState("READY?")

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 600))
            setText("SET")
            await new Promise(r => setTimeout(r, 600))
            setText("CREATE")
            await new Promise(r => setTimeout(r, 600))
            setComplete(true)
        }
        sequence()
    }, [])

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[10000] bg-neo-yellow flex items-center justify-center flex-col border-b-3 border-main"
                >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                    <motion.div
                        key={text}
                        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                        animate={{ scale: 1.2, opacity: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-8xl md:text-9xl font-black text-black uppercase tracking-tighter"
                    >
                        {text}
                    </motion.div>

                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.6, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-4 bg-black"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
