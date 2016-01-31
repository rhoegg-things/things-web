var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var runSequence = require('run-sequence');
var useref = require('useref');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('app/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('clean', function() {
  return del.sync('dist');
});

gulp.task('build-styles', ['sass'], function() {
  return gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('build-scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('build-html', ['build-scripts', 'build-styles'], function() {
  return gulp.src('app/*.html')
    .pipe(useref({
      searchPath: ['dist', '.']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', function(callback) {
  runSequence('clean', ['build-html', 'build-styles', 'build-scripts'], callback);
});

gulp.task('serve-reload', ['build'], function() {
  browserSync.reload();
});

// watch files for changes and reload
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'app'}, ['serve-reload']);
});
