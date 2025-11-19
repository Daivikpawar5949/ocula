import type { Metadata } from "next"
import "./globals.css"

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
        {children}
      </body>
    </html>
  )
}
