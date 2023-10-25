/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#A02A34",
				textPrimary: "#333333",
				textSecondary: "#666666",
				textLight: "#999999",
				blue: "#2B3589",
				servicesBg: "#E6E7EE",
			},
		},
	},
	plugins: [],
};
