const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  'node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.min.js',
  'node_modules/filepond/dist/filepond.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp
        .src(vendorsScripts)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/static/js/'))
    : cb();
};
