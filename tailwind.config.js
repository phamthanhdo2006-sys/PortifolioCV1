/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Palette
        canvas: {
          light: "#FAFAFA",
          dark: "#0A0A0A",
        },
        surface: {
          light: "#FFFFFF",
          lightElevated: "#F8FAFC",
          dark: "#141414",
          darkElevated: "#1C1C1E",
        },
        border: {
          light: "#E2E8F0",
          lightHover: "#CBD5E1",
          dark: "#27272A",
          darkHover: "#3F3F46",
        },
        textPrimary: {
          light: "#0F172A",
          dark: "#F8FAFC",
        },
        textSecondary: {
          light: "#475569",
          dark: "#CBD5E1",
        },
        textMuted: {
          light: "#64748B",
          dark: "#94A3B8",
        },
        // Personal Brand Palette: Smart Logistics & IT
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ["'Be Vietnam Pro'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        editorial: ["'Times New Roman'", "Times", "serif"],
      },
      boxShadow: {
        'subtle-emerald': '0 4px 20px -2px rgba(5, 150, 105, 0.15)',
        'subtle-amber': '0 4px 20px -2px rgba(217, 119, 6, 0.15)',
        'editorial': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'editorial-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 8px 30px -10px rgba(0, 0, 0, 0.8), 0 0 15px -3px rgba(5, 150, 105, 0.08)',
      },
    },
  },
  plugins: [],
}
