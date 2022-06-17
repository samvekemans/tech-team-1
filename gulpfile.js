// importeren van gulp
import gulp from 'gulp';

// importeren van gulp-imagemin
import imagemin from 'gulp-imagemin';

export default () => (
    gulp.src()
        .pipe(imagemin())
        .pipe(gulp.dest())
);