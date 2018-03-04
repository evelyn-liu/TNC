(function (r) {
    "use strict";
    var scss = r("gulp-scss");
    var gulp = r("gulp");
    const sourcemaps = require('gulp-sourcemaps');
    const babel = require('gulp-babel');
    const concat = require('gulp-concat');
    const swig = require('gulp-swig');
    const watch = require

    gulp.task('default', () =>
        gulp.src('tnc/src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        // .pipe(concat('all.js'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('tnc/dist/js'))
    );
    gulp.task("scss", function () {
        gulp.src(
            "tnc/src/scss/**/*.scss"
        ).pipe(scss()).pipe(gulp.dest("tnc/dist/css"));
    });

    gulp.task('swig', function () {
        gulp.src('tnc/src/html/**/*.html')
            .pipe(swig({
                defaults: {
                    cache: false
                }
            }))
            .pipe(gulp.dest('tnc/dist/html'))
    });

    gulp.task('dev', ['default', 'scss', 'swig']);
    gulp.task('watch', function () {
        gulp.watch('tnc/src/js/**/*.js', ['default']);
        gulp.watch('tnc/src/scss/**/*.scss', ['scss']);
        gulp.watch('tnc/src/html/**/*.html', ['swig']);

    });

}(require));