/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                custom: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                boxShadowProductCard: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            },
        },
    },
    plugins: [],
};
