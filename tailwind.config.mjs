/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita modo escuro baseado em classe
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Cores para tema claro
        light: {
          primary: "#e2e2e2",
          secondary: "#f3f4f6",
          accent: "#8184d3",
          text: {
            primary: "#1f2937",
            secondary: "#4b5563",
            accent: "#2563eb",
          },
          border: "#e5e7eb",
          divider: "#d1d5db",
        },
        // Cores para tema escuro
        dark: {
          primary: "#111827",
          secondary: "#1f2937",
          accent: "#3b82f6",
          text: {
            primary: "#f9fafb",
            secondary: "#d1d5db",
            accent: "#60a5fa",
          },
          border: "#374151",
          divider: "#4b5563",
        },
      },
      boxShadow: {
        // Sombras para tema claro
        "light-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        light:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "light-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        "light-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        // Sombras para tema escuro
        "dark-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
        dark: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)",
        "dark-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)",
        "dark-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
