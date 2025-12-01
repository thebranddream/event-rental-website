/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "royal-gold": "#c9a363",
        "maroon-royale": "#5b1f28",
        "ivory-luxe": "#f7f3ed",
        "muted-rose": "#d8b5a1",
        charcoal: "#1e1e1e",
        "celebration-saffron": "#f1b23b",
        maroon: "#6b0f0f",
        saffron: "#f59e0b",
        peacock: "#0f4c6b",
        "soft-gold": "#f2c94c",
        cream: "#fffaf7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "tent-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "tent-pan": "tent-pan 12s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "Hind", "Noto Sans", "sans-serif"],
      },
    },
  },
  safelist: [
    "bg-royal-gold",
    "bg-maroon-royale",
    "bg-ivory-luxe",
    "bg-muted-rose",
    "bg-charcoal",
    "bg-celebration-saffron",
    "text-royal-gold",
    "text-maroon-royale",
    "text-charcoal",
    "text-celebration-saffron",
    "border-royal-gold",
    "border-muted-rose",
    "hover:bg-maroon-royale",
    "hover:bg-royal-gold",
    "focus:ring-royal-gold",
    "focus:ring-maroon-royale",
  ],
  plugins: [require("tailwindcss-animate")],
}
