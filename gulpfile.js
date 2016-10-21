var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixed = require('gulp-autoprefixer');

gulp.task('default',function(){
	console.log('Hello World');
});

gulp.task('styles',function (){
	gulp.src('sass/**/*.scss')
		.pipe(sass()on.('error',sass.logError))
		.pipe(gulp.dest('./css'));
});