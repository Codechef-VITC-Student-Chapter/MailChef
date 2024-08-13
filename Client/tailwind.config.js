/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
  screens: {
    'max-w-600px': { max: '600px' },
    'min-w-600px': { min: '600px' },
    '927px': '927px',
    '741px': '741px',
    'custom-xs': '400px',
    'sm': '640px',
    'custom-xss': '200px',
    // => @media (min-width: 640px) { ... }
    'md': '768px',
    // => @media (min-width: 768px) { ... }
    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
};
export const plugins = [];
