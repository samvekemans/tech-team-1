// variabelen
const { src, dest } = require('gulp');

// importeren van gulp
import gulp from 'gulp';

// importeren van gulp-imagemin
import imagemin from 'gulp-imagemin';

// importeren standaard custom plugins van gulp-imagemin
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

export default () => (
    gulp.src('./public/images/*')
        .pipe(imagemin([
            gifsicle({interlaced: true}),
            mozjpeg({quality: 75, progressive: true}),
            optipng({optimizationLevel: 5}),
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
        .pipe(gulp.dest('dist/images'))
);