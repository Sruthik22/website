/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#6955EA',
        secondary: '#E2E6FF',
        tertiary: '#D6DCFF',
        darker: '#352D66',
        button: '#5B48D0',
        backgroundDiv: '#AEA2FF',
        lighterBackgroundDiv: '#F5F3FE',
        icon: '#A698FF',
        footer: '#F7F8FD',
        usecasesBackground: '#F4F1FF',
        gradientEnd: '#EFF3FF',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Manrope as the default sans-serif font
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li::marker': {
              color: theme('colors.black'), // Change bullet points to black
            },
            'ol > li::marker': {
              color: theme('colors.black'), // Change ordered list numbers to black
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'), // For the `prose` class
    function ({ addBase }) {
      addBase({
        'button:focus': {
          '@apply outline-none': {},
        },
      });
    },
  ],
};
