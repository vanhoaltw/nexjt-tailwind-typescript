module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        'primary-3': 'var(--primary-3)',

        gray: 'var(--secondary-gray)',
        green: 'var(--secondary-green)',
        blue: 'var(--secondary-blue)',
        white: 'var(--secondary-white)',

        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',

        'line-primary': 'var(--lines)',

        'gradient-blue': 'var(--gradient-blue)',
        'gradient-green': 'var(--gradient-green)',

        'font-primary': 'var(--font-primary)',
        'font-link': 'var(--font-link)',

        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',

        'dark-theme': 'var(--dark-theme)',
        'light-theme': 'var(--light-theme)',
      },
    },
  },
  plugins: [],
};
