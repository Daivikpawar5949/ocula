"use client"

import { useEffect, useState } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Responsive values for parallax
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  const x1 = useTransform(mouseX, [0, windowSize.width || 1000], [-20, 20])
  const y1 = useTransform(mouseY, [0, windowSize.height || 1000], [-20, 20])
  const x2 = useTransform(mouseX, [0, windowSize.width || 1000], [30, -30])
  const y2 = useTransform(mouseY, [0, windowSize.height || 1000], [30, -30])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const revealItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  } as const

  return (
    <div className="w-full relative overflow-hidden bg-page min-h-screen flex items-center border-b-3 border-main">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0" />

      {/* Shapes - Neo Brutalism with Parallax */}
      <motion.div style={{ x: x1, y: y1 }} className="absolute top-20 left-10 w-32 h-32 bg-neo-yellow border-3 border-main shadow-neo rotate-12 z-0 hidden md:block" />
      <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-20 right-10 w-40 h-40 bg-neo-pink border-3 border-main shadow-neo -rotate-6 z-0 hidden md:block" />
      <motion.div style={{ x: x1, y: y2 }} className="absolute top-40 right-20 w-24 h-24 bg-neo-blue border-3 border-main shadow-neo rotate-45 z-0 hidden md:block rounded-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8 px-6 py-3 bg-card border-3 border-main shadow-neo"
        >
          <span className="text-main font-black text-sm uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> AI-Powered Content Creation
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-main mb-6 leading-tight uppercase tracking-tighter text-shadow-neo"
        >
          Create Videos
          <br />
          <span className="text-neo-blue px-4 bg-card border-3 border-main inline-block transform -rotate-2 mt-2 shadow-neo">
            Instantly
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-main mb-12 max-w-2xl mx-auto font-bold"
        >
          Generate professional videos in seconds with <span className="text-neo-pink underline decoration-4 decoration-main">AI magic</span>.
          Perfect scripts, stunning visuals, and vial potential.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto"
        >
          <motion.div variants={revealItem} className="bg-neo-yellow border-3 border-main shadow-neo p-6 card-neo-hover">
            <div className="text-4xl font-black text-inverse">10M+</div>
            <div className="text-inverse font-bold mt-2 uppercase">Videos Generated</div>
          </motion.div>
          <motion.div variants={revealItem} className="bg-neo-green border-3 border-main shadow-neo p-6 card-neo-hover">
            <div className="text-4xl font-black text-inverse">50K+</div>
            <div className="text-inverse font-bold mt-2 uppercase">Active Creators</div>
          </motion.div>
          <motion.div variants={revealItem} className="bg-neo-orange border-3 border-main shadow-neo p-6 card-neo-hover">
            <div className="text-4xl font-black text-inverse">99%</div>
            <div className="text-inverse font-bold mt-2 uppercase">Success Rate</div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }} // Increased delay
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neo-primary"
            title="Start Creating Free"
          >
            Start Creating <ArrowRight className="w-6 h-6 border-2 border-black rounded-full" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neo-secondary bg-card text-main"
            title="Watch Demo"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Trust Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-main font-black text-sm uppercase tracking-wider"
        >
          Trusted by 50,000+ creators worldwide
        </motion.p>
      </div>
    </div>
  )
}

export { Hero }
