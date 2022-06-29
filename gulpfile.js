const { src, series, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const leec = require('gulp-line-ending-corrector');

const concat = require('gulp-concat');
const sourceMaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');

// Gulp image-min
const imagemin = async () => await import('gulp-imagemin');

// const { gifsicle, mozjpeg, optipng, svgo } = import("gulp-imagemin");
const webp = require('gulp-webp');

const paths = {
  styles: {
    src: './src/scss/*.scss',
    css: './src/css',
    file: './src/css/*',
    dest: './public/dist/css',
  },
  scripts: {
    src: './public/scripts/*.js',
    dest: './public/dist/scripts',
  },
  images: {
    src: './public/images/*',
    dest: './public/dist/images',
    webp: './public/dist/images/webp',
  },
  uploads: {
    src: './public/uploads/*',
    dest: './public/dist/uploads',
    webp: './public/dist/uploads/webp',
  },
};

// source map compress
function style() {
  return src(paths.styles.src)
    .pipe(
      sourceMaps.init({
        loadMaps: true,
      })
    )
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(sourceMaps.write())
    .pipe(leec())
    .pipe(dest(paths.styles.css));
}

function concatCss() {
  return src(paths.styles.file)
    .pipe(
      sourceMaps.init({
        loadMaps: true,
        largeFile: true,
      })
    )
    .pipe(concat('all.css'))
    .pipe(minify())
    .pipe(sourceMaps.write('./maps/'))
    .pipe(leec())
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

// Images
function makeWebp() {
  return src(paths.images.src).pipe(webp()).pipe(dest(paths.images.webp));
}

// Uploads
function uploadWebp() {
  return src(paths.uploads.src).pipe(webp()).pipe(dest(paths.uploads.webp));
}

async function watchTask() {
  watch(['public/images/*'], makeWebp);
  watch(['public/uploads/*'], uploadWebp);
  watch(['src/scss/*.scss'], series(style, concatCss));
  watch(['public/scripts/*.js'], script);
}

exports.watch = watchTask;
// exports.imagemin = imageMin;

exports.default = parallel(
  series(style, concatCss),
  script,
  makeWebp,
  uploadWebp,
  watchTask
);
