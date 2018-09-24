var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css');

var paths = {
    sass: './sass/**/*.scss',
    scripts : ['./node_modules/popper.js/dist/umd/popper.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'],
    styles: [
        './node_modules/bootstrap/dist/css/bootstrap.min.css', 
        './node_modules/@fortawesome/fontawesome-free/css/all.min.css'
    ]
}

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./app/styles/'));
});

gulp.task('styles', () => {
    gulp.src(paths.styles)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./app/styles/'));
})

gulp.task('vendor', ()=> {
    gulp.src(paths.scripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./app/scripts/'));
});

gulp.task('default', ['sass', 'styles', 'vendor']);

gulp.task('watch', function(){
    gulp.watch(paths.sass, ['sass']);
});