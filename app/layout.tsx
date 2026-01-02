import type { Metadata } from "next"
import "./globals.css"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { Preloader } from "@/components/ui/preloader"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import { BackToTop } from "@/components/ui/back-to-top"

export const metadata: Metadata = {
  title: "OCULA - AI Video Creation Engine",
  description: "Create viral video content with AI-powered automation for actors and content creators",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  )
}
