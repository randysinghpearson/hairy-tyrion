var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('run-server', function() {
	require("./index.js")
})

gulp.task('serve', ['run-server'], function () {
	bs.init({
	    server: "./app"
	});

	gulp.watch('app/**/*', function() {
		console.log("Change!");
		bs.reload();
	})
});
