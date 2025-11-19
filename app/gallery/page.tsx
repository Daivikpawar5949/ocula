"use client"

import SphereImageGrid, { ImageData } from "@/components/ui/sphere-image-grid"

export default function SphereGalleryPage() {
  // Sample images from Unsplash (free high-quality images)
  const images: ImageData[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1494145904049-0dca7b0589b0?w=400&h=400&fit=crop",
      alt: "Purple gradient",
      title: "Digital Art",
      description: "Beautiful purple digital artwork"
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1501632066482-f202a081d88e?w=400&h=400&fit=crop",
      alt: "Ocean waves",
      title: "Nature",
      description: "Serene ocean landscape"
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop",
      alt: "Mountain sunset",
      title: "Landscape",
      description: "Golden hour in the mountains"
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
      alt: "Concert lights",
      title: "Events",
      description: "Vibrant concert atmosphere"
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      alt: "Mountain landscape",
      title: "Adventure",
      description: "Majestic mountain views"
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1506704720897-c6b0b8ef6dba?w=400&h=400&fit=crop",
      alt: "Aurora borealis",
      title: "Sky",
      description: "Northern lights dancing"
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1500829243541-e9155a60c02d?w=400&h=400&fit=crop",
      alt: "Forest",
      title: "Nature",
      description: "Dense forest atmosphere"
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1495854035989-cebdf8d41ef6?w=400&h=400&fit=crop",
      alt: "Computer desk",
      title: "Tech",
      description: "Modern workspace setup"
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      alt: "Snowy mountains",
      title: "Winter",
      description: "Snow-covered peaks"
    },
    {
      id: "10",
      src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      alt: "Blue water",
      title: "Water",
      description: "Crystal clear waters"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-dark-gray">
      {/* Fixed Bouncing Balls Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,51,51,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-auto">
        {/* Header */}
        <div className="py-12 px-6 text-center border-b border-medium-gray">
          <h1 className="text-5xl font-bold text-primary mb-4">Interactive 3D Image Sphere</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Drag to rotate the sphere, explore images in 3D space. Click any image to view details.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="py-16 px-6 flex justify-center">
          <div className="bg-dark-gray/50 backdrop-blur-sm border-2 border-medium-gray rounded-lg p-8">
            <SphereImageGrid
              images={images}
              containerSize={700}
              sphereRadius={280}
              dragSensitivity={0.8}
              momentumDecay={0.92}
              baseImageScale={0.1}
              autoRotate={true}
              autoRotateSpeed={0.2}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="py-12 px-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-bold text-primary mb-3">🎮 Drag to Rotate</h3>
              <p className="text-foreground/80">
                Click and drag on the sphere to rotate it in any direction. The sphere has smooth momentum physics.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-secondary mb-3">🎯 Click to View</h3>
              <p className="text-foreground/80">
                Click any image to see a larger preview with title and description in a modal.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-accent mb-3">🔄 Auto Rotate</h3>
              <p className="text-foreground/80">
                The sphere automatically rotates slowly. Stop it by dragging, and it will resume rotating.
              </p>
            </div>
          </div>
        </div>

        {/* Configuration Info */}
        <div className="py-12 px-6 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="text-2xl font-bold text-primary mb-6">Component Configuration</h3>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/80">
              <div>
                <h4 className="font-bold text-secondary mb-2">Visual Settings</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Container Size: 700px</li>
                  <li>• Sphere Radius: 280px</li>
                  <li>• Base Image Scale: 10% of container</li>
                  <li>• Images: 10 sample images</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">Physics Settings</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Drag Sensitivity: 0.8</li>
                  <li>• Momentum Decay: 0.92</li>
                  <li>• Auto Rotate: Enabled</li>
                  <li>• Rotation Speed: 0.2°/frame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 px-6 text-center border-t border-medium-gray">
          <p className="text-foreground/60">
            This is an interactive 3D image gallery using Fibonacci sphere distribution for optimal image placement.
          </p>
        </div>
      </div>
    </div>
  )
}
