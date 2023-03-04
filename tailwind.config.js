/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1310px',
			},
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '2rem',
			},
		},
		extend: {
			colors: {
				primary: {
					500: 'rgb(var(--color-primary) / <alpha-value>)',
				},
				secondary: {
					500: 'rgb(var(--color-secondary) / <alpha-value>)',
				},
			},
			height: {
				'mobile-nav': 'calc(100vh - 96px)',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};
