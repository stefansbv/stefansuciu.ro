// Include Gulp
var gulp = require('gulp');

// Include plugins
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var imagemin   = require('gulp-imagemin');
var cache      = require('gulp-cache');
var minifyCSS  = require('gulp-minify-css');
const pngquant = require('imagemin-pngquant');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});

// Minify CSSs
gulp.task('minify-css', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/css'));
});

// Minify PNG, JPEG, GIF and SVG images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('static/images'));
});

// Default Task
gulp.task('default', gulp.parallel('scripts', 'minify-css', 'images'));
