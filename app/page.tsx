"use client" 

import { Hero } from "@/components/ui/animated-hero"
import { SplineSceneBasic } from "@/components/ui/spline-demo"
import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Star, Zap, Camera, Mic, Sparkles, ArrowRight, Check, Flame } from "lucide-react"

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
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const runId = Math.random().toString(36).substring(2, 12).toUpperCase()
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
      image: "�️",
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
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      icon: "⭐",
      features: ["30 videos/month", "4K quality", "Premium templates", "Priority support", "Custom branding"],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      icon: "🏆",
      features: ["Unlimited videos", "8K quality", "Custom AI training", "Dedicated manager", "API access"],
      cta: "Contact Sales",
    },
  ]

  const useCases = [
    { title: "YouTube Videos", desc: "From scripting to final edit, create complete YouTube videos in minutes", emoji: "▶️" },
    { title: "TikTok & Reels", desc: "Generate viral-ready short-form content optimized for each platform", emoji: "�" },
    { title: "Educational Content", desc: "Create tutorials, courses, and educational videos with professional quality", emoji: "�" },
    { title: "Social Media Posts", desc: "Instagram, Facebook, LinkedIn - optimized content for every platform", emoji: "�" },
    { title: "Product Demos", desc: "Showcase your products with engaging, professional demo videos", emoji: "�" },
    { title: "Vlogs & Lifestyle", desc: "Daily vlogs, lifestyle content, and personal brand videos made easy", emoji: "🎬" },
  ]

  return (
    <div className="w-full bg-background">
      {/* ========== ANIMATED HERO ========== */}
      <Hero />

      {/* ========== WHY CONTENT CREATORS LOVE OCULA ========== */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-dark-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-foreground mb-6"
            >
              Why Creators Love <span className="text-primary">OCULA</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              Designed for content creators who want to publish more, faster, without sacrificing quality
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((Feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`p-8 rounded-lg border-2 border-primary/20 cursor-pointer transition-all duration-300 ${
                  hoveredFeature === idx
                    ? "border-primary bg-primary/10 transform scale-105"
                    : "bg-dark-gray/50 hover:bg-dark-gray"
                }`}
              >
                <div className="mb-4">
                  <Feature.icon className={`w-12 h-12 transition-all duration-300 ${hoveredFeature === idx ? "text-primary scale-125" : "text-secondary"}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{Feature.title}</h3>
                <p className="text-foreground/70">{Feature.desc}</p>
                {hoveredFeature === idx && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setExpandedFeature(idx)}
                    className="mt-4 pt-4 border-t border-primary/30 flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURE DETAIL MODAL ========== */}
      {expandedFeature !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedFeature(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-gray border-2 border-primary rounded-lg p-10 max-w-2xl w-full"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                {expandedFeature !== null && features[expandedFeature] && (() => {
                  const FeatureIcon = features[expandedFeature].icon
                  return <FeatureIcon className="w-16 h-16 text-primary" />
                })()}
              </div>
              <div>
                <h3 className="text-4xl font-bold text-foreground mb-2">
                  {expandedFeature !== null && features[expandedFeature]?.title}
                </h3>
                <p className="text-xl text-foreground/70">
                  {expandedFeature !== null && features[expandedFeature]?.desc}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8 bg-dark-gray/50 p-6 rounded-lg border-l-4 border-secondary">
              {expandedFeature !== null && features[expandedFeature]?.fullDesc}
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" }) || setExpandedFeature(null)}
                className="flex-1 py-3 bg-primary text-black font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Try It Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpandedFeature(null)}
                className="flex-1 py-3 bg-medium-gray text-foreground font-bold rounded-lg hover:bg-primary/20 transition-all"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ========== USE CASES ========== */}
      <section className="py-32 px-6 bg-dark-gray/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground"
          >
            Perfect For Every <span className="text-secondary">Content Type</span>
          </motion.h2>
          <p className="text-center text-foreground/70 text-xl mb-16 max-w-2xl mx-auto">
            Whether you're creating YouTube videos, TikToks, or Instagram content, OCULA works for every platform and style
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 bg-dark-gray border-2 border-medium-gray hover:border-primary rounded-lg cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{useCase.emoji}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{useCase.title}</h3>
                <p className="text-foreground/70">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground"
          >
            3 Steps to <span className="text-accent">Professional Content</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Upload Your Scene", desc: "Record your monologue or scene using your phone", icon: Camera },
              { step: 2, title: "AI Enhancement", desc: "Our AI enhances audio, lighting, and adds professional effects", icon: Zap },
              { step: 3, title: "Download & Share", desc: "Get 4K video ready for auditions or social media", icon: ArrowRight },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 cursor-pointer"
                  >
                    <item.icon className="w-10 h-10 text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
                {idx < 2 && <div className="hidden md:block absolute top-10 -right-4 text-primary/30 text-4xl">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-32 px-6 bg-dark-gray/40">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground"
          >
            Loved by <span className="text-primary">Creators Everywhere</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-dark-gray border-2 border-primary/20 hover:border-primary p-8 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CREATE VIDEO FORM ========== */}
      <section id="form-section" className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Start Creating <span className="text-primary">Today</span>
            </h2>
            <p className="text-xl text-foreground/70">Generate your first professional video in minutes</p>
          </motion.div>

          {!output ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-foreground font-semibold mb-3">Video Idea/Topic</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  placeholder="e.g., Top 10 productivity tips, Workout routine, Product review"
                  required
                  className="w-full px-6 py-4 bg-medium-gray border-2 border-primary text-foreground placeholder-foreground/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 rounded-lg transition-all"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-3">Content Style/Tone</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.videoStyle}
                  onChange={(e) => setFormData({ ...formData, videoStyle: e.target.value })}
                  placeholder="e.g., Casual & fun, Professional, Energetic, Educational, Storytelling"
                  rows={3}
                  className="w-full px-6 py-4 bg-medium-gray border-2 border-accent text-foreground placeholder-foreground/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-accent/20 rounded-lg transition-all"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-3">Video Duration</label>
                <div className="grid grid-cols-3 gap-4">
                  {["15", "30", "60"].map((dur) => (
                    <motion.button
                      key={dur}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({ ...formData, duration: dur })}
                      className={`py-3 rounded-lg font-semibold transition-all ${
                        formData.duration === dur
                          ? "bg-primary text-black border-2 border-primary"
                          : "bg-medium-gray text-foreground border-2 border-medium-gray hover:border-primary"
                      }`}
                    >
                      {dur}s
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 51, 51, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-black font-bold text-lg rounded-lg transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                Generate My Video
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-dark-gray border-2 border-primary rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-secondary" />
                  <p className="text-foreground/70 font-semibold">Video Generated Successfully!</p>
                </div>
                <p className="text-foreground/70 text-sm">Run ID</p>
                <p className="text-primary font-mono text-2xl mb-4">{output.runId}</p>
              </div>

              <div className="bg-dark-gray border-2 border-secondary rounded-lg p-8">
                <p className="text-foreground/70 text-sm mb-2">Download Link</p>
                <a
                  href={output.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors break-all text-lg font-semibold flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {output.videoUrl}
                </a>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={resetForm}
                className="w-full py-4 bg-secondary text-black font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Create Another Video
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="py-32 px-6 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Simple, Transparent <span className="text-accent">Pricing</span>
            </h2>
            <p className="text-xl text-foreground/70">Choose the plan that fits your acting career</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  plan.featured ? "border-4 border-primary md:scale-105" : "border-2 border-primary/30"
                } bg-dark-gray`}
              >
                {plan.featured && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-black py-3 text-center font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-foreground/70">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-bold transition-all ${
                      plan.featured
                        ? "bg-gradient-to-r from-primary to-secondary text-black hover:shadow-lg hover:shadow-primary/50"
                        : "bg-medium-gray text-foreground hover:bg-primary hover:text-black"
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
      <section className="py-32 px-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Ready to <span className="text-primary">Scale Your Content?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-foreground/70 mb-12"
          >
            Join thousands of creators producing more content, faster. Publish 5x more videos without the editing headache.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 51, 51, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-6 bg-primary text-black font-bold text-lg rounded-lg transition-all cursor-pointer flex items-center gap-3 mx-auto"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* ========== INTERACTIVE 3D SPLINE SECTION ========== */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Explore <span className="text-primary">Interactive 3D</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Experience immersive 3D visualization of your content creation journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SplineSceneBasic />
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-16 px-6 border-t border-medium-gray bg-dark-gray/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">OCULA</h3>
              <p className="text-foreground/70">Professional video creation for content creators.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:text-primary cursor-pointer">Features</li>
                <li className="hover:text-primary cursor-pointer">Pricing</li>
                <li className="hover:text-primary cursor-pointer">For Creators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:text-primary cursor-pointer">About</li>
                <li className="hover:text-primary cursor-pointer">Blog</li>
                <li className="hover:text-primary cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="hover:text-primary cursor-pointer">Privacy</li>
                <li className="hover:text-primary cursor-pointer">Terms</li>
                <li className="hover:text-primary cursor-pointer">Support</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-medium-gray pt-8">
            <p className="text-center text-foreground/60">
              &copy; 2024 OCULA. Empowering creators everywhere. Made with ❤️ for content creators.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
