const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

exports.default = function() {
    return src(['assets/js/modules/*.js', 'assets/js/modules/player/*.js'])
        .pipe(src('assets/js/index.js'))
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('assets/js/dist/'))
}
