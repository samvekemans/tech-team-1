const {
  src,
  series,
  dest,
  watch,
  parallel
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const concat = require('gulp-concat');
const sourceMaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');

const paths = {
  styles: {
    src: './src/scss/*.scss',
    dest: './public/dist/css',
  },
  scripts: {
    src: './public/scripts/*.js',
    dest: './public/dist/scripts',
  },
};

// source map // compress
function style() {
  return src(paths.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(sourceMaps.write())
    .pipe(concat('all.css'))
    .pipe(dest(paths.styles.dest));
}

function script() {
  return src(paths.scripts.src)
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write())
    .pipe(concat('all.js'))
    .pipe(dest(paths.scripts.dest));
}

async function watchTask() {
  watch(['src/scss/*.scss'], style);
  watch(['public/scripts/*.js'], script);
}

exports.watch = watchTask;

exports.default = parallel(style, script, watchTask);