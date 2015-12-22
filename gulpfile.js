var gulp          = require('gulp'),
    jade          = require('gulp-jade'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifyCss     = require('gulp-minify-css'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    livereload    = require('gulp-livereload');


gulp.task('html', function() {
  gulp.src('./src/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./dist/'))
      .pipe(livereload());
});

gulp.task('css', function() {
  gulp.src([
        './src/css/base.scss',
        './src/css/layout.scss'
      ])
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./.build/'));

  gulp.src([
        './bower_components/normalize.css/normalize.css',
        './.build/style.css'
      ])
      .pipe(concat('main.css'))
      .pipe(minifyCss({
        compatibility: 'ie8'
      }))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(livereload());
});

gulp.task('js', function() {
  gulp.src([
        './src/js/main.js'
      ])
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'))
      .pipe(livereload());
});

gulp.task('img', function() {
  gulp.src('./src/img/*')
      .pipe(gulp.dest('./dist/img/'));
});

gulp.task('font', function() {
  gulp.src('./src/font/*')
      .pipe(gulp.dest('./dist/font/'));
});

gulp.task('default', ['html', 'css', 'js', 'img', 'font']);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/*jade', ['html']);
  gulp.watch('./src/css/*scss', ['css']);
  gulp.watch('./src/js/*js', ['js']);
});
