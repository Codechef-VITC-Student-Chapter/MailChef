/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      customBg: "#303031",
      customBg2: "#60606078",
      textC: "#FFFFFF75",
    },
  },
  screens: {
    "max-w-600px": { max: "600px" },
    "min-w-600px": { min: "600px" },
    "927px": "927px",
    "741px": "741px",
    "custom-xs": "400px",
    sm: "640px",
    "custom-xss": "200px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  fontFamily: {
    bebas: ['"Bebas Neue"', "sans-serif"],
  },
};
export const plugins = [];
