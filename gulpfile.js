var gulp = require('gulp')
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');
    

function processJs() {
    return gulp.src(['src/**/*.module.js', 'src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('js', processJs);
gulp.task('build', ['js']);