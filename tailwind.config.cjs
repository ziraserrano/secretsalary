/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			blue: "#79c5edff",
			green: "#90cc90ff",
			blush: "#daa98dff",
			gray: "#4f4f4fff",
			lightgray: "#666b6cff",
			black: "#191e28ff",
			white: "#e5e5e5",
		},
		spacing: {
			'1': '8px',
			'2': '12px',
			'3': '16px',
			'4': '24px',
			'5': '32px',
			'6': '48px',
		  },
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
