/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				pink: '#ff1f57',
				blue: '#0d0e16',
				clay: '#04060f',
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,
				stone: colors.warmGray,
				sky: colors.lightBlue,
				neutral: colors.trueGray,
				gray: colors.coolGray,
				slate: colors.blueGray,
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				aware: 'Aware',
				anonymous: 'Anonymous',
				anonymousBold: 'AnonymousBold',
			},
			keyframes: {
				slide: {
					'0%': { marginRight: '50%', opacity: '0' },
					'100%': { marginRight: '0%', opacity: '1' },
				},
				fade: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			},
			animation: {
				slide: 'slide 0.8s cubic-bezier(0.8, 0.6, 0.8, 1)',
				fade: 'fade 1s ease-in-out',
			},
			screens: {
				'sm': '640px',
				// => @media (min-width: 640px) { ... }
		
				'md': '768px',
				// => @media (min-width: 768px) { ... }
		
				'lg': '1024px',
				// => @media (min-width: 1024px) { ... }
		
				'xl': '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '2000px',
				// => @media (min-width: 1280px) { ... }
			}  
		},
	},
	plugins: [],
}
