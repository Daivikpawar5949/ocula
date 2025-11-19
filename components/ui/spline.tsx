'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/50">
          <div className="text-center">
            <div className="inline-block animate-spin">
              <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
            <p className="mt-4 text-foreground/60">Loading 3D Scene...</p>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
