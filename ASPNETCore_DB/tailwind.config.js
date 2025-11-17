/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Pages/**/*.{cshtml,razor}',
        './Views/**/*.{cshtml,razor}',
        './Areas/**/*.{cshtml,razor}',
        './wwwroot/**/*.html'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}