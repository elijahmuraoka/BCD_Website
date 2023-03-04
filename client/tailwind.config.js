/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                gRedStart: '#ff5858',
                gRedEnd: '#ffc8c8',
            },
        },
    },
    plugins: [],
};
