var   	gulp = 		require('gulp'),
		browserSync = require('browser-sync').create(),
		less = 		require("gulp-less"),
		notify = 	require('gulp-notify'),
		plumber = 	require('gulp-plumber'),
		pug = 		require('gulp-pug'),
		htmlbeautify = require('gulp-html-beautify'),
		autoprefixer = require('gulp-autoprefixer');


gulp.task("server", ['less','pug'],function () {
	browserSync.init({
		server: { baseDir: './docs' }
	});
	gulp.watch('./docs**/*.html').on('change', browserSync.reload);
	gulp.watch('js/**/*.js').on('change', browserSync.reload);
	gulp.watch('less/**/*.less', ['less'] );
	gulp.watch('pug/**/*.pug', ['pug'] );
});



gulp.task('pug', () => {
				return gulp.src('./pug/*.pug')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Pug',
				message: err.message
			}
		})
	}))
	.pipe(pug())
	.pipe(htmlbeautify(htmlbeautifyOptions))
	.pipe(gulp.dest('./docs'))
	.pipe(browserSync.stream());
});

var htmlbeautifyOptions = {
	"indent_size": 1, 
	"indent_char": "	",     
	"eol": "\n",
	"indent_level": 0,
	"indent_with_tabs": true,
	"preserve_newlines": true,
	"max_preserve_newlines": 10,
	"jslint_happy": false,
	"space_after_anon_function": false,
	"brace_style": "collapse",
	"keep_array_indentation": false,
	"keep_function_indentation": false,
	"space_before_conditional": true,
	"break_chained_methods": false,
	"eval_code": false,
	"unescape_strings": false,
	"wrap_line_length": 0,
	"wrap_attributes": "auto",
	"wrap_attributes_indent_size": 4,
	"end_with_newline": false
};

gulp.task('less', () => {
				return gulp.src('./less/**/main.less')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Styles',
				message: err.message
			}
		})
	}))
	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./docs/css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ["server"]);