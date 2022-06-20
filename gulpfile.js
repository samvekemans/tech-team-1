// variabelen
const { src, dest } = require('gulp');
const webp = require('gulp-webp');

// importeren van gulp
import gulp from 'gulp';

// importeren van imagemin en standaard custom plugins van gulp-imagemin
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

// importeren imageminWebp
import imageminWebp from 'imagemin-webp';

// minifying van de afbeeldingen die in /public/images staan en sturen naar /dist/images
export default () => (
    gulp.src('public/images/*')
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
        .pipe(dest('public/images'))
);

// omzetten van images in /dist/images naar webp format en sturen naar dezelfde folder
exports.default = () => (
	gulp.src('public/images/*')
		.pipe(webp())
		.pipe(dest('public/images'))   
);