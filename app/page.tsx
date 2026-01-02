"use client"

import { Hero } from "@/components/ui/animated-hero"
import dynamic from "next/dynamic"

const SplineSceneBasic = dynamic(() => import("@/components/ui/spline-demo").then(mod => mod.SplineSceneBasic), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] flex items-center justify-center bg-card text-main/50 font-bold">Loading 3D Scene...</div>
})
import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Star, Sparkles, ArrowRight, Check } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Marquee } from "@/components/ui/marquee"
import { HoverImageReveal } from "@/components/ui/hover-image-reveal"
import { StaticNoise } from "@/components/ui/static-noise"
import { TiltCard } from "@/components/ui/tilt-card"
import { TextScramble } from "@/components/ui/text-scramble"
import confetti from "canvas-confetti"
import { FeaturesSection } from "@/components/sections/features-section"

export default function Home() {
  const [formData, setFormData] = useState({
    topic: "",
    videoStyle: "",
    duration: "30",
  })
  const [output, setOutput] = useState<{
    runId: string
    videoUrl: string
    sources: string[]
  } | null>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const runId = Math.random().toString(36).substring(2, 12).toUpperCase()
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FF69B4', '#3385FF']
    })
    const videoUrl = `https://cdn.ocula.ai/videos/${runId}.mp4`
    const sources = [
      `https://source1.com/article-about-${formData.topic.replace(/\s+/g, "-")}`,
      `https://source2.com/research-${formData.topic.replace(/\s+/g, "-")}`,
      `https://source3.com/trending-${formData.topic.replace(/\s+/g, "-")}`,
    ]

    setOutput({ runId, videoUrl, sources })
  }

  const resetForm = () => {
    setFormData({ topic: "", videoStyle: "", duration: "30" })
    setOutput(null)
  }

  const testimonials = [
    {
      name: "Alex Park",
      role: "YouTube Content Creator",
      image: "▶️",
      text: "OCULA cut my video production time in half. I can now publish 3 videos per week instead of 1. My channel growth exploded!",
      rating: 5,
    },
    {
      name: "Jessica Miller",
      role: "TikTok Creator",
      image: "📱",
      text: "The trending effects and auto-editing are game-changers. My videos get way more engagement now, and I barely touch the editing.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Podcast & YouTube Creator",
      image: "️",
      text: "Best investment for my content business. The AI voice enhancement makes my audio sound professional. No more expensive studio time needed.",
      rating: 5,
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      icon: "🎯",
      features: ["5 videos/month", "720p quality", "Basic templates", "Community support"],
      cta: "Get Started",
      color: "bg-white",
      buttonColor: "btn-neo-primary"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      icon: "⭐",
      features: ["30 videos/month", "4K quality", "Premium templates", "Priority support", "Custom branding"],
      cta: "Start Free Trial",
      featured: true,
      color: "bg-neo-yellow",
      buttonColor: "btn-neo-secondary"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      icon: "🏆",
      features: ["Unlimited videos", "8K quality", "Custom AI training", "Dedicated manager", "API access"],
      cta: "Contact Sales",
      color: "bg-white",
      buttonColor: "btn-neo-primary"
    },
  ]

  const useCases = [
    { title: "YouTube Videos", desc: "From scripting to final edit, create complete YouTube videos in minutes", emoji: "▶️", color: "bg-neo-blue" },
    { title: "TikTok & Reels", desc: "Generate viral-ready short-form content optimized for each platform", emoji: "", color: "bg-neo-pink" },
    { title: "Educational Content", desc: "Create tutorials, courses, and educational videos with professional quality", emoji: "", color: "bg-neo-green" },
    { title: "Social Media Posts", desc: "Instagram, Facebook, LinkedIn - optimized content for every platform", emoji: "", color: "bg-neo-yellow" },
    { title: "Product Demos", desc: "Showcase your products with engaging, professional demo videos", emoji: "", color: "bg-neo-orange" },
    { title: "Vlogs & Lifestyle", desc: "Daily vlogs, lifestyle content, and personal brand videos made easy", emoji: "🎬", color: "bg-neo-purple" },
  ];

  return (
    <div className="w-full bg-page min-h-screen font-sans text-main">
      {/* ========== ANIMATED HERO ========== */}
      <Hero />

      <Marquee items={["CREATE", "EDIT", "PUBLISH", "VIRAL", "AI POWERED", "GROWTH"]} speed={15} />

      <FeaturesSection />

      {/* ========== USE CASES ========== */}
      <section className="py-24 px-6 bg-neo-blue border-b-3 border-black">
        <div className="max-w-7xl mx-auto">
          <TextScramble className="text-5xl md:text-6xl font-black text-center mb-4 text-white uppercase text-shadow-neo">
            Perfect For Every Content Type
          </TextScramble>
          <p className="text-center text-white text-xl mb-16 max-w-2xl mx-auto font-bold border-2 border-main inline-block p-2 bg-inverse">
            Whether you're creating YouTube videos, TikToks, or Instagram content
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group p-8 border-3 border-main shadow-neo card-neo-hover ${useCase.color}`}
              >
                <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{useCase.emoji}</div>
                <h3 className="text-2xl font-black text-black mb-3 uppercase">{useCase.title}</h3>
                <p className="text-black font-medium">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-24 px-6 bg-card border-b-3 border-main">
        <div className="max-w-7xl mx-auto">
          <TextScramble className="text-5xl md:text-6xl font-black text-center mb-20 text-main uppercase text-shadow-neo">
            3 Steps to Professional Content
          </TextScramble>

          <HoverImageReveal
            items={[
              { title: "Connect Source", subtitle: "Paste any URL (YouTube, Blog, Notion)", image: "https://placehold.co/600x400/FFD700/000000/png?text=Step+1" },
              { title: "AI Generation", subtitle: "Our engine writes the script & gathers visuals", image: "https://placehold.co/600x400/3385FF/000000/png?text=Step+2" },
              { title: "Customize & Publish", subtitle: "Tweak the style and export in 4K", image: "https://placehold.co/600x400/FF69B4/000000/png?text=Step+3" },
            ]}
          />
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-24 px-6 bg-neo-yellow border-b-3 border-main">
        <div className="max-w-7xl mx-auto">
          <TextScramble className="text-5xl md:text-6xl font-black text-center mb-20 text-black uppercase text-shadow-neo">
            Loved by Creators
          </TextScramble>

          <div className="flex flex-col items-center gap-12 relative">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="sticky md:sticky top-32 w-full max-w-2xl md:-mt-24 first:mt-0" style={{ zIndex: idx }}>
                <TiltCard>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border-3 border-main p-8 shadow-neo h-full min-h-[300px]"
                  >
                    <div className="flex items-center mb-6 border-b-3 border-main pb-4">
                      <div className="text-4xl mr-4 bg-page border-3 border-main p-2 shadow-neo-sm">{testimonial.image}</div>
                      <div>
                        <h4 className="text-lg font-black text-main uppercase">{testimonial.name}</h4>
                        <p className="text-sm text-main/70 font-bold">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4 gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-neo-yellow text-black" />
                      ))}
                    </div>
                    <p className="text-main font-medium text-lg">"{testimonial.text}"</p>
                  </motion.div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CREATE VIDEO FORM ========== */}
      <section id="form-section" className="py-24 px-6 bg-page border-b-3 border-main relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-black text-main mb-4 uppercase text-shadow-neo">
              Start Creating <span className="text-neo-blue">Today</span>
            </h2>
            <p className="text-xl text-main font-bold">Generate your first professional video in minutes</p>
          </motion.div>

          {!output ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleFormSubmit}
              className="space-y-8 bg-card p-8 border-3 border-main shadow-neo-lg"
            >
              <div>
                <label className="block text-main font-black uppercase mb-3 text-lg">Video Idea/Topic</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  placeholder="e.g., Top 10 productivity tips..."
                  required
                  className="input-neo"
                />
              </div>

              <div>
                <label className="block text-main font-black uppercase mb-3 text-lg">Content Style</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  value={formData.videoStyle}
                  onChange={(e) => setFormData({ ...formData, videoStyle: e.target.value })}
                  placeholder="e.g., Casual & fun, Professional..."
                  rows={3}
                  className="input-neo"
                />
              </div>

              <div>
                <label className="block text-black font-black uppercase mb-3 text-lg">Duration</label>
                <div className="flex gap-4">
                  {["15", "30", "60"].map((dur) => (
                    <motion.button
                      key={dur}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({ ...formData, duration: dur })}
                      className={`flex-1 h-14 font-black transition-all border-3 border-black shadow-neo flex items-center justify-center text-lg ${formData.duration === dur
                        ? "bg-neo-yellow translate-x-[2px] translate-y-[2px] shadow-neo-sm"
                        : "bg-white hover:bg-off-white"
                        }`}
                    >
                      {dur}s
                    </motion.button>
                  ))}
                </div>
              </div>

              <MagneticButton className="w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-20 bg-inverse text-main font-black text-2xl transition-all cursor-pointer flex items-center justify-center shadow-neo border-3 border-main hover:bg-inverse/90 uppercase tracking-widest gap-3"
                >
                  <Sparkles className="w-6 h-6 text-neo-yellow" /> Generate Video
                </motion.button>
              </MagneticButton>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-neo-green border-3 border-main shadow-neo-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-inverse text-main p-2 border-2 border-main rounded-none">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-black font-black text-xl uppercase">Video Generated Successfully!</p>
                </div>
                <p className="text-black font-bold text-sm uppercase">Run ID</p>
                <p className="text-black font-mono text-3xl mb-4 bg-white/50 p-2 border-2 border-black inline-block">{output.runId}</p>
              </div>

              <div className="bg-card border-3 border-main shadow-neo p-8">
                <p className="text-main font-bold text-sm uppercase mb-2">Download Link</p>
                <a
                  href={output.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neo-blue hover:text-main hover:underline decoration-4 text-xl font-black flex items-center gap-2 break-all"
                >
                  <Play className="w-5 h-5 fill-current" />
                  {output.videoUrl}
                </a>
              </div>

              <MagneticButton className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="btn-neo-secondary w-full"
                >
                  <Sparkles className="w-5 h-5" /> Create Another Video
                </motion.button>
              </MagneticButton>
            </motion.div>
          )}
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="py-24 px-6 bg-card border-b-3 border-main">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-main mb-4 uppercase text-shadow-neo">
              Simple <span className="bg-neo-green px-2 border-3 border-main shadow-neo transform -rotate-1 inline-block text-black">Pricing</span>
            </h2>
            <p className="text-xl text-main font-bold">Choose the plan that fits your acting career</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`transition-all duration-300 border-3 border-black shadow-neo overflow-visible ${plan.color} ${plan.featured ? 'transform md:-translate-y-4 z-10' : ''}`}
              >
                {plan.featured && (
                  <div className="bg-black text-white py-3 text-center font-black text-sm uppercase tracking-widest border-b-3 border-black">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-5xl mb-6">{plan.icon}</div>
                  <h3 className="text-3xl font-black text-black mb-2 uppercase">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-black text-black">{plan.price}</span>
                    <span className="text-gray-600 font-bold">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-black font-medium">
                        <Check className="w-6 h-6 text-black border-2 border-black p-0.5 bg-neo-green flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full h-16 font-black transition-all border-3 border-black shadow-neo flex items-center justify-center text-lg uppercase tracking-wider ${plan.featured
                      ? "bg-black text-white hover:bg-gray-900"
                      : "bg-neo-blue text-white hover:bg-blue-600"
                      }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 px-6 bg-neo-pink border-b-3 border-main flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-card border-3 border-main shadow-neo-xl p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-black mb-6 uppercase leading-tight"
          >
            Ready to <span className="text-neo-blue underline decoration-4 decoration-black">Scale?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-black mb-12 font-bold"
          >
            Join thousands of creators producing more content, faster.
          </motion.p>

          <MagneticButton>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neo-primary text-2xl h-20 w-auto px-12 mx-auto"
            >
              Start Free <ArrowRight className="w-8 h-8 ml-2" />
            </motion.button>
          </MagneticButton>
        </div>
      </section>

      {/* ========== INTERACTIVE 3D SPLINE SECTION ========== */}
      <section className="py-24 px-6 bg-card border-b-3 border-main">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <Marquee direction="right" items={["CINEMATIC", "PROFESSIONAL", "4K QUALITY", "INSTANT", "MAGIC", "EDITING"]} speed={15} separator="✦" className="border-x-3 border-main -mx-6 mb-8 rotate-1" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-main mb-4 uppercase text-shadow-neo">
              Explore <span className="bg-neo-purple px-2 text-white border-3 border-main shadow-neo transform rotate-2 inline-block">3D World</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-3 border-main shadow-neo-xl"
          >
            <SplineSceneBasic />
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-black text-white py-16 px-6 border-t-4 border-main relative overflow-hidden">
        <StaticNoise opacity={0.07} />
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
          <div>
            <h3 className="text-3xl font-black text-neo-yellow mb-4 uppercase">OCULA</h3>
            <p className="text-gray-400 font-bold">Professional video creation for content creators.</p>
          </div>
          <div>
            <h4 className="font-black text-white mb-4 uppercase text-lg">Product</h4>
            <ul className="space-y-2 text-gray-400 font-bold">
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Features</li>
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">For Creators</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-4 uppercase text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400 font-bold">
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">About</li>
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-4 uppercase text-lg">Legal</h4>
            <ul className="space-y-2 text-gray-400 font-bold">
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-neo-yellow cursor-pointer transition-colors">Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 z-10 relative">
          <p className="text-gray-500 font-bold">
            &copy; 2024 OCULA. Empowering creators everywhere.
          </p>
          <div className="bg-neo-blue text-black font-black px-4 py-1 skew-x-[-10deg]">
            Made with ❤️
          </div>
        </div>
      </footer>
    </div>
  )
}
