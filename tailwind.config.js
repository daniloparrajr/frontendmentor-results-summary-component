/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffffff",
      "red": "#303B59",
      "green": "#00BB8F",
      "blue": "#1125D6",
      "yellow": "#FFB21E",
      "dark-navy": "#303B59",
      "light-blue": "#CAC9FF",
      "very-light-blue": "#ECF2FF",
      "neon-blue": "#6943FF",
      "han-purple": "#2F2CE9",
    },
    gradientColorStopPositions: {
      33: '33%',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-hanken-grotesk)'],
      },
      fontSize: {
        "3xl": "32px",
      },
      borderRadius: {
        '4xl': '32px',
      },
      spacing: {
        'pl-9': '38px',
      }
    },
  },
  plugins: [],
};
