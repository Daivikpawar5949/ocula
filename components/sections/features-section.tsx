"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Camera, Zap, Mic, Star, Flame, ArrowRight } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"
import { TextScramble } from "@/components/ui/text-scramble"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function FeaturesSection() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
    const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

    const features = [
        {
            icon: Sparkles,
            title: "AI Script Generation",
            desc: "Let AI write engaging scripts for your videos",
            fullDesc: "Our AI generates compelling scripts tailored to your content style. Perfect for YouTube, TikTok, Instagram, and blog videos. Save hours of brainstorming and get fresh ideas instantly."
        },
        {
            icon: Camera,
            title: "Professional Quality",
            desc: "4K video output in seconds",
            fullDesc: "Create stunning 4K videos that stand out on any platform. Auto-enhance colors, lighting, and composition. Your content will look like it was produced by professionals."
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            desc: "Generate complete videos in minutes",
            fullDesc: "Go from idea to published video in under 5 minutes. Our AI works instantly so you can scale your content production and publish more frequently."
        },
        {
            icon: Mic,
            title: "Voice Enhancement",
            desc: "Professional voiceover and audio editing",
            fullDesc: "AI-powered voice enhancement removes background noise, improves clarity, and adds professional effects. Or use our library of natural-sounding AI voices in 50+ languages."
        },
        {
            icon: Star,
            title: "Smart Editing",
            desc: "Automatic cuts, transitions, and pacing",
            fullDesc: "Our AI analyzes your content and applies perfect cuts, transitions, and pacing. No manual editing needed. Adjust settings with one click if you want to customize."
        },
        {
            icon: Flame,
            title: "Trending Effects",
            desc: "Stay current with latest effects & music",
            fullDesc: "Access trending effects, filters, and royalty-free music updated daily. Keep your content fresh and relevant. Platform-specific optimization for YouTube, TikTok, Instagram, and more."
        },
    ]

    return (
        <>
            {/* ========== WHY CONTENT CREATORS LOVE OCULA ========== */}
            <section className="py-24 px-6 bg-card border-b-3 border-main">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 animate-pulse">
                        <TextScramble className="text-5xl md:text-7xl font-black text-main mb-6 uppercase tracking-tight text-shadow-neo">
                            Why Creators Love 3RD CREW
                        </TextScramble>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-main max-w-2xl mx-auto font-bold"
                        >
                            Designed for content creators who want to publish more, faster, without sacrificing quality
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((Feature, idx) => (
                            <TiltCard key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    onMouseEnter={() => setHoveredFeature(idx)}
                                    onMouseLeave={() => setHoveredFeature(null)}
                                    className={`p-8 border-3 border-main shadow-neo h-full ${hoveredFeature === idx
                                        ? "bg-neo-yellow"
                                        : "bg-card hover:bg-page"
                                        }`}
                                >
                                    <div className="mb-4 bg-inverse text-main w-16 h-16 flex items-center justify-center border-3 border-main rounded-none">
                                        <Feature.icon className="w-8 h-8 filter invert" />
                                    </div>
                                    <h3 className="text-2xl font-black text-main mb-3 uppercase">{Feature.title}</h3>
                                    <p className="text-main font-medium">{Feature.desc}</p>
                                    {hoveredFeature === idx && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => setExpandedFeature(idx)}
                                            className="mt-4 flex items-center text-black font-black uppercase text-sm border-b-2 border-black"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.button>
                                    )}
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURE DETAIL MODAL ========== */}
            <AnimatePresence>
                {expandedFeature !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setExpandedFeature(null)}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card border-3 border-main shadow-neo-xl p-10 max-w-2xl w-full relative"
                        >
                            <button
                                onClick={() => setExpandedFeature(null)}
                                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-neo-pink border-3 border-main shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-black text-xl text-black"
                            >
                                ✕
                            </button>

                            <div className="flex items-start gap-6 mb-8 mt-2">
                                <div className="flex-shrink-0 bg-neo-yellow border-3 border-main p-4 shadow-neo">
                                    {expandedFeature !== null && features[expandedFeature] && (() => {
                                        const FeatureIcon = features[expandedFeature].icon
                                        return <FeatureIcon className="w-10 h-10 text-black" />
                                    })()}
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-main mb-2 uppercase break-words">
                                        {expandedFeature !== null && features[expandedFeature]?.title}
                                    </h3>
                                    <p className="text-xl text-main/80 font-bold">
                                        {expandedFeature !== null && features[expandedFeature]?.desc}
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg text-main leading-relaxed mb-8 bg-page p-6 border-3 border-main shadow-neo-sm">
                                {expandedFeature !== null && features[expandedFeature]?.fullDesc}
                            </p>

                            <div className="flex gap-4 justify-center">
                                <MagneticButton className="w-full">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" }) || setExpandedFeature(null)}
                                        className="btn-neo-primary w-full"
                                    >
                                        Try It Now
                                    </motion.button>
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
