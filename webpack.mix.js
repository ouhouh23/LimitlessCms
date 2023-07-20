const mix = require('laravel-mix')

mix
  .sass('wp-content/themes/limitless/src/styles/style.scss', '')
  .setPublicPath('wp-content/themes/limitless')
  .browserSync({
    server: './wp-content/themes/limitless',
    files: './wp-content/themes/limitless/src'
  })
