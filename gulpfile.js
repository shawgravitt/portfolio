var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var shell = require('gulp-shell');
var bs = require('browser-sync').create();
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

var coffeeStream = coffee({bare: true});

var paths = {
    'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
    'style': {
        all: './public/styles/**/*.scss',
        output: './public/styles/'
    }
};

// gulp lint
gulp.task('lint', function(){
    gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintReporter));
});

// gulp watcher for lint
gulp.task('watch:lint', function () {
    gulp.src(paths.src)
        .pipe(watch())
        .pipe(jshint())
        .pipe(jshint.reporter(jshintReporter));
});

coffeeStream.on('error', gutil.log);

gulp.task('coffee', function() {
    gulp.src('./public/js/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch:coffee', function () {
    gulp.watch('./public/js/*.coffee', ['coffee']);
});

gulp.task('sass', function(){
    gulp.src(paths.style.all)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.style.output))
    .pipe(bs.stream());
});

gulp.task('watch:sass', function () {
    gulp.watch(paths.style.all, ['sass']);
});

gulp.task('browser-sync', function(){
  bs.init({
    proxy: 'http://localhost:3000',
    port: '4000'
  });
});

gulp.task('runKeystone', shell.task('node keystone'));

gulp.task('watch', ['watch:sass', 'watch:coffee', 'watch:lint']);
gulp.task('default', ['watch', 'runKeystone', 'browser-sync']);