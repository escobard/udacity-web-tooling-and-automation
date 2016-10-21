var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',function(){
	console.log('Hello World');
});

gulp.task('styles',function (){
	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});