import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-page)",
        foreground: "var(--text-main)",
        page: "var(--bg-page)",
        card: "var(--bg-card)",
        main: "var(--text-main)",
        inverse: "var(--text-inverse)",
        "border-main": "var(--border-main)",
        muted: "var(--muted)",

        primary: "#FF4D4D",    // Bright red
        secondary: "#FFD700",  // Bright yellow
        accent: "#3385FF",     // Bright blue
        "neo-yellow": "var(--neo-yellow)",
        "neo-pink": "var(--neo-pink)",
        "neo-blue": "var(--neo-blue)",
        "neo-green": "var(--neo-green)",
        "neo-purple": "var(--neo-purple)",
        "neo-orange": "var(--neo-orange)",
        "off-white": "var(--off-white)",
        "dark-gray": "#0A0A0A",
        "medium-gray": "#333333",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px var(--shadow-color)',
        'neo-lg': '8px 8px 0px 0px var(--shadow-color)',
        'neo-xl': '12px 12px 0px 0px var(--shadow-color)',
        'neo-sm': '2px 2px 0px 0px var(--shadow-color)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}

export default config
