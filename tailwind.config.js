/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'brand': {
          'bg': '#E3F1CE',
          'bg-secondary': '#e8f2e8',
          'accent': '#5a8a5a',
          'accent-light': '#8fb88f',
          'accent-dark': '#4a6f4a',
          'heading': '#4a6f4a',
          'text': '#5a8a5a',
          'text-light': '#6a9a6a',
          'warm': {
            'terracotta': '#6a9a6a',
            'terracotta-light': '#7aaa7a',
            'terracotta-dark': '#5a8a5a',
            'cream': '#f0f7f0',
            'beige': '#e8f2e8',
          },
          'purple': {
            'soft': '#7aaa7a',
            'soft-light': '#8fb88f',
            'soft-dark': '#6a9a6a',
          },
          'earth': {
            'brown': '#5a8a5a',
            'brown-light': '#6a9a6a',
          }
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Merriweather', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'heading': ['Merriweather', 'serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}




