const gulp = import('gulp');
const imagemin = import('gulp-imagemin');
const { src, dest } = require('gulp');
const {gifsicle, mozjpeg, optipng, svgo} = import('gulp-imagemin');
const webp = require('gulp-webp');

const paths = {
    images: {
        src: './public/images/*',
        dest: './public/dist/images',
        webp: './public/dist/images/webp'
    }
}

exports.default = () => {
    return src(paths.images.src)
    .pipe(imagemin([
        gifsicle({interlaced: true}),
        mozjpeg({quality: 75, progressive: true}),
        optipng({optimizationLevel: 5}),
        imageminWebp({quality: 75, method: 3}),
        svgo({
            plugins: [
                {
                    name: 'removeViewbox',
                    active: true
                },
                {
                    name: 'cleanupIDs',
                    active: false
                }
            ]
        })
    ]))
    .pipe(dest(paths.images.dest))
};

exports.default = () => {
    return src(paths.images.src)
        .pipe(webp())
        .pipe(dest(paths.images.webp)) 
};