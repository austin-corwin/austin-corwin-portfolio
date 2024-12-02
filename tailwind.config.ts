import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				kanit: ['Kanit', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif'],
				bangers: ['Bangers', 'cursive'],
				lobster: ['Lobster', 'cursive'],
				primary: ['Montserrat', 'sans-serif'],
				secondary: ['Kanit', 'sans-serif'],
				tertiary: ['Mulish', 'sans-serif']
			},
			colors: {
				dark: '#061a1e',
				// darkOld: '#071E22',
				light: '#E0DDCF',
				plat: '#EAE1DF',
				highlight: '#EF6F6C'
				// highlightOne: '#DF2935',
				// highlightTwo: '#23967F',
				// highlightThree: '#c5fffd',
				// highlightFour: '#EF6F6C'
			},
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			},
			backgroundImage: {
				staticTexture: "url('/src/static/images/staticTexture.png')"
			}
		}
	},
	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
