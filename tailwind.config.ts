import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'sea-green': '#009883',
				'deep-sea-green': '#006557',
				'deep-sea-green-hover': '#004C41',
				'faded-sea-green': '#C7DBDC',
				'pastel-green': '#CDE5D4',
				'cloud-gray': '#F8F9FD',
				'dark-gray': '#94A3B8',
				'bright-yellow': '#FEFE7C',
				plum: '#7C4060',
			},
			lineHeight: {
				'11': '2.75rem',
				'12': '3rem',
			},
		},
		fontFamily: {
			nunito: ['nunito', ...defaultTheme.fontFamily.sans],
			'nunito-sans': ['nunito-sans', ...defaultTheme.fontFamily.sans],
		},
		dropShadow: {
			figma: '0 4px 4px rgba(0, 0, 0, 0.25)',
		},
		animation: {
			'slide-out': 'slide-out 500ms ease-in-out forwards',
			'slide-right': 'slide-right 400ms ease-in-out forwards',
			'slide-left': 'slide-left 400ms ease-in-out forwards',
			'scale-into': 'scale-into 700ms ease forwards',
		},
		keyframes: {
			'slide-out': {
				'0%': { transform: 'translate3d(-101%, 0, 0)' },
				'100%': { transform: 'translate3d(101%, 0 ,0)' },
			},
			'slide-right': {
				'0%': { transform: 'translate3d(-50%, 0, 0)', opacity: '0' },
				'100%': { transform: 'translate3d(0)', opacity: '1' },
			},
			'slide-left': {
				'0%': { transform: 'translate3d(50%, 0, 0)', opacity: '0' },
				'100%': { transform: 'translate3d(0)', opacity: '1' },
			},
			'scale-into': {
				'0%': {
					transform: 'scale(0.6) translate3d(100px, 0, 0)',
					opacity: '0',
				},
				'100%': { transform: 'scale(1) translate3d(0)', opacity: '1' },
			},
		},
	},

	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		},

		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('tailwind-scrollbar')({
			nocompatible: true,
			preferredStrategy: 'pseudoelements',
		}),
		require('tailwindcss-animated'),
	],
} satisfies Config;
