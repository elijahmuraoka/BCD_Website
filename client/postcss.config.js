/* FOR APP npm run dev */
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};

/* FOR TAILWIND npm run watch */
// module.exports = {
//     plugins: ['tailwindcss', 'postcss-nested', 'autoprefixer', 'cssnano'],
// };
