const {
    src,
    series,
    dest,
    watch,
    parallel
} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");

const eslint = require("eslint");
const concat = require("gulp-concat");
const sourceMaps = require("gulp-sourcemaps");

const uglify = require("gulp-uglify");

var paths = {
    styles: {
        src: "./src/scss/*.scss",
        dest: "./public/dist/css",
    },
    scripts: {
        src: "./public/scripts/*.js",
        dest: "./public/dist/scripts",
    },
};

// source map // compress
function style() {
    return src(paths.styles.src)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(prefix("last 2 versions"))
        .pipe(minify())
        .pipe(sourceMaps.write())
        .pipe(concat("test.css"))
        .pipe(dest(paths.styles.dest));
}

function script() {
    return src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(uglify())
        .pipe(concat("main.min.js"))
        .pipe(dest(paths.scripts.dest));
}

async function watchTask() {
    watch(["src/scss/*.scss"], style);
    watch(["public/scripts/*.js"], script);
}

exports.watch = watchTask;

exports.default = parallel(style, script, watchTask);