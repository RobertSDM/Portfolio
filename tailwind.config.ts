import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                'bg-light': '#F5F5F5',
                'alt-bg-light': "#ececec",
                'bg-dark': '#060B17',
                'light-green': '#2DC183',
                'text-dark': '#fff',
                'text-light': '#171717',
                "banner-dark": "#000",
                "banner-light": "#fff"
            },
        },
    },
    plugins: [],
};
export default config;
