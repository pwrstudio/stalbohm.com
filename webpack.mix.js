let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('dist')
    // .js('resources/js/app.js', 'js/app.js')
    .sass('resources/sass/app.scss', 'css/app.css')
    .options({
        processCssUrls: false
    })
    .version()
