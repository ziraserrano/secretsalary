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
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
