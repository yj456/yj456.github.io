var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass',function() {
	sass('./sass/*.*').pipe(gulp.dest('css'))

})