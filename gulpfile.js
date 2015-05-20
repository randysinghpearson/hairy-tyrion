var gulp = require('gulp');
var sass = require('gulp-sass');

var bs = require('browser-sync').create();

gulp.task('run-server', function() {
	require("./index.js")
})

gulp.task('serve', ['run-server'], function () {
	bs.init({
	    proxy: "localhost:8080"
	});

	gulp.watch('./app/**/*', function() {
		bs.reload();
	})

	gulp.watch('./app/css/*.scss', ['sass']);
});

gulp.task('sass', function() {
	gulp.src('./app/css/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));

});