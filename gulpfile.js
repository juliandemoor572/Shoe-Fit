var gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('./sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      'outputStyle': 'compressed', 
      includePaths: ['node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});


gulp.task('scripts', function (callback) {
  return gulp.src([
    'js/vendors/jquery.fitvids.js', // Volgorde is belangrijk. Voeg eerst deze toe in scripts.js ...
    'js/init.js'                    // ... daarna pas deze
  ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify().on('error', function (uglify) {
      console.error(uglify.message);
      this.emit('end');
    }))
    .pipe(gulp.dest('js'));
});

gulp.task("watch", function() {
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
  gulp.watch("js/init.js", gulp.series("scripts"));
 });