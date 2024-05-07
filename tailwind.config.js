/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-button": "#ff561e"
      },
    },
    boxShadow : {
      navbar : "0 10px 8px 0 rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    }
  },
  plugins: [
    
  ],
}

