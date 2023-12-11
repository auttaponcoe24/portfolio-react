/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#1f242d",
				secondary: "#323946",
				third: "#0ef",
			},
			textColor: {
				primary: "#fff",
				secondary: "#0ef",
				third: "#1f242d",
			},
			borderColor: {
				primary: "#fff",
				secondary: "#0ef",
			},
		},
		fontFamily: {
			kanit: ["Kanit", "sans-serif"],
		},
		screens: {
			xs: "320px",
			sm: "578px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
});
