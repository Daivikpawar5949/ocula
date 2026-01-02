'use client'

import { SplineScene } from "@/components/ui/spline";

export function SplineSceneBasic() {
  return (
    <div className="w-full h-[500px] bg-neo-yellow relative overflow-hidden border-3 border-black shadow-neo-xl flex flex-col md:flex-row">
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-20" />

      <div className="flex-1 p-8 relative z-10 flex flex-col justify-center bg-white border-r-3 border-black">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-black mb-4">
          Interactive <span className="text-neo-blue">3D</span>
        </h1>
        <p className="text-xl font-bold text-black max-w-lg">
          Bring your UI to life with beautiful 3D scenes. Create immersive experiences
          that capture attention.
        </p>
        <div className="mt-8">
          <div className="w-32 h-6 bg-black opacity-20 rounded-full blur-[10px]" />
        </div>
      </div>

      <div className="flex-1 relative bg-neo-purple border-l-3 border-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay z-10 pointer-events-none" />
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
