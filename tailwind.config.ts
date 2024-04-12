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
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		},
	],
} satisfies Config;
