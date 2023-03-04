// module.exports = {
//     plugins: [
//         require('tailwindcss'),
//         require('postcss-nested'),
//         require('autoprefixer'),
//         require('cssnano')({
//             preset: 'default',
//         }),
//     ],
// };

module.exports = {
    plugins: ['tailwindcss', 'postcss-nested', 'autoprefixer', 'cssnano'],
};
