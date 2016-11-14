// sets the variables for the gulp function 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

 browserSync.init({
     server: "index.html"
 });
 browserSync.stream();

gulp.task('default',function(){
	console.log('Hello World');
	gulp.watch ('sass/**/.scss', ['styles']);
});

gulp.task('styles',function (){
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
});

