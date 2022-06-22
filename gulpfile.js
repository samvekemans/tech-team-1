// variabelen voor aanroepen gebruikte packages
const gulp = import('gulp');
const imagemin = import('gulp-imagemin');
const { src, dest } = require('gulp');
const {gifsicle, mozjpeg, optipng, svgo} = import('gulp-imagemin');
const webp = require('gulp-webp');

// variabele voor de paden
const paths = {
    images: {
        src: './public/images/*',
        dest: './public/dist/images',
        webp: './public/dist/images/webp'
    }
}

// imagemin gebruiken op de images in de folder te minifyen en te sturen naar een nieuwe map
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

// webp gebruiken om de images om te zetten naar webp die in een nieuwe map worden gezet
exports.default = () => {
    return src(paths.images.src)
        .pipe(webp())
        .pipe(dest(paths.images.webp)) 
};