// @ts-check
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    isProduction && require('cssnano')({
      preset: 'default',
    }),
  ].filter(Boolean),
};

module.exports = config;
