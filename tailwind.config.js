// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        button: {
          bg: 'var(--button-bg)',
          text: 'var(--button-text)',
        },
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
        },
        secondary: {
          1: 'var(--secondary-1)',
          2: 'var(--secondary-2)',
        },
        tertiary: {
          1: 'var(--tertiary-1)',
          2: 'var(--tertiary-2)',
        },
        yellow: 'var(--yellow)',
        blue: 'var(--blue)',

        dark: {
          blue: 'var(--dark-blue)',
          darkest: 'var(--darkest-blue)',
        },
        black: 'var(--black)',
        purple: 'var(--purple)',
        pink: 'var(--pink)',
        green: 'var(--green)',
        gray: 'var(--gray)',
      },
      backgroundImage: {
        'yellow-blue-gradient': 'var(--yellow-blue-gradient)',
        'yellow-blue-stroke': 'var(--yellow-blue-stroke-gradient)',
        'fading-yellow': 'var(--fading-yellow-gradient)',
      },
    },
  },
  plugins: [],
};