var gulp = require('gulp');
var shell = require('gulp-shell');
var elixir = require('laravel-elixir');
var del = require('del');
var themeInfo = require('./theme.json');

process.env.DISABLE_NOTIFIER = true;

elixir.config.publicPath = 'assets';

var publicPath = '../../public';
var themePath = publicPath + '/themes/ceylin';
var cssPath = themePath + '/css';
var jsPath =  themePath + '/js';

var Task = elixir.Task;

elixir.extend('del', function(path) {
    new Task('del', function() {
        return del(path, {force:true});
    });
});

elixir.extend('stylistPublish', function() {
    new Task('stylistPublish', function() {
        return gulp.src("").pipe(shell("php ../../artisan stylist:publish " + themeInfo.name));
    });
});

elixir(function (mix) {

    mix.del(['assets/css', 'assets/js']);
    mix.del(themePath+'/**');

    mix.sass('bootstrap.scss', 'resources/assets/css/bootstrap.min.css')
         .sass('theme/theme.scss', 'resources/assets/css/theme.min.css');

    mix.copy('resources/assets', 'assets');

    // mix.sass('bootstrap.scss', 'resources/assets/css/bootstrap.css')
    //     .sass('plugins.scss', 'resources/assets/css/base/plugins.css')
    //     .sass('components.scss', 'resources/assets/css/base/components.css')
    //     .sass('themes/blue2.scss', 'resources/assets/css/base/themes/blue2.css')
    //     .sass('custom.scss', 'resources/assets/css/base/custom.css')
    //     .less(['semantic.less'], 'resources/assets/css/plugins/semantic-ui/semantic.css', 'assets/vendor/semantic/src');
    //
    // mix.copy('assets/vendor/jquery/dist/jquery.min.js', 'assets/js')
    //     .copy('assets/vendor/semantic-ui-sass/app/assets/javascripts', 'assets/js/plugins/semantic-ui')
    //     .copy('resources/assets/css/bootstrap.css', 'assets/css/bootstrap.css')
    //     .copy('resources/assets/css/base/plugins.css', 'assets/css/base')
    //     .copy('resources/assets/css/base/components.css', 'assets/css/base')
    //     .copy('resources/assets/css/base/themes/default.css', 'assets/css/base/themes')
    //     .copy('resources/assets/css/base/custom.css', 'assets/css/base')
    //     .copy('resources/assets/css', 'assets/css')
    //     .copy('resources/assets/js', 'assets/js')
    //     .copy('resources/assets/img', 'assets/img');

    // mix.styles([
    //     'bootstrap.css',
    //     'plugins/semantic-ui/semantic.css',
    //     'base/plugins.css',
    //     'base/components.css',
    //     'base/themes/default.css',
    //     'base/custom.css'
    // ], 'assets/css/base/all.css');

    // mix.scripts([
    //     'jquery.min.js'
    // ]);
    //
    // mix.version([
    //     'css/bootstrap.css',
    //     'css/plugins/semantic-ui/semantic.css',
    //     'css/base/plugins.css',
    //     'css/base/components.css',
    //     'css/base/themes/blue2.css',
    //     'css/base/custom.css',
    //     'css/base/all.css',
    //     'js/jquery.min.js'
    // ], 'assets');

    mix.stylistPublish();

});