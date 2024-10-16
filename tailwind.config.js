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
      "red": "#FF5555",
      "green": "#00BB8F",
      "blue": "#1125D6",
      "yellow": "#FFB21E",
      "dark-navy": "#303B59",
      "light-blue": "#CAC9FF",
      "very-light-blue": "#ECF2FF",
      "neon-blue": "#6943FF",
      "han-purple": "#2F2CE9",
      "purple-heart": "#4d21c9",
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
        '8.5': '35px',
        '9': '38px',
        '13': '54px',
      },
      maxWidth: {
        '2.5xl': '736px'
      }
    },
  },
  plugins: [],
};
