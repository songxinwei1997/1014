var gulp = require('gulp');
gulp.task('default', function () {
    // gulp.src('./src/img/*.{jpg,png}')
    gulp.src(["./src/js/*.js","!./src/js/*.min.js"],{base:'src'})
    .pipe(gulp.dest('bulid'))
})
var gulp = require ('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var css = require('gulp-clean-css');
var uglify = require ("gulp-uglify");
gulp.task('test', function () {
    gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Android >= 4']
    }))
    .pipe(gulp.dest('./src/css'))
});
gulp.task('js', function () {
    gulp.src(["./src/js/*.js","!./src/js/*.min.js"])
    .pipe(uglify())
    .pipe(gulp.src("bulid/js"))
})
gulp.task('cssmin', function() {
    gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Android >= 4']
    }))
    .pipe(css())
    .pipe(gulp.src("src/css"))
})