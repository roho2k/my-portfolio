import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'deep-sea-green': '#006557',
				'pastel-green': '#CDE5D4',
			},
		},
	},
	plugins: [],
} satisfies Config;
