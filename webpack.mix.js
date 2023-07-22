const mix = require('laravel-mix')

mix
  .sass('wp-content/themes/limitless/src/styles/index.scss', '')
  .js('wp-content/themes/limitless/src/scripts/index.js', '')
  .setPublicPath('wp-content/themes/limitless/build')
  .browserSync({
    server: './wp-content/themes/limitless/build',
    files: './wp-content/themes/limitless/src'
  })
