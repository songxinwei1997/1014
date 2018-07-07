var gulp = require ('gulp');
var server = require('gulp-webserver');
var url = require ('url');
var fs = require('fs');
var path = require('path');
var sass = require ('gulp-sass');
gulp.task("server", function () {
    gulp.src('src')
    .pipe(server({
        port:9090,
        // fallback:'demo.html',// z指定默认打开文件
        // livereload: true, //自动刷新浏览器
        // open: true //自动打开浏览器
        host: '169.254.240.25',
        middleware:function (req, res, next) {
            var pathname = url.parse(req.url).pathname;
            if(pathname === "/favicon.ico") {
                return false;
            }
           pathname = pathname === '/' ? '/index.html' : pathname;
           console.log(pathname)
           res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
        }
    }))
})
// var server = require("gulp-webserver");
// gulp.task("server", function () {
//     gulp.src("src")
//     .pipe(server({
//         port:9090
//     }))
// });
gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
})