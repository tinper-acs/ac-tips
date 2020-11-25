const path = require('path');
const gulp = require('gulp')
const less = require('gulp-less')
const concat = require('gulp-concat')
const remember             = require('gulp-remember');
const cached               = require('gulp-cached');
const sourcemaps           = require('gulp-sourcemaps');
const using                = require('gulp-using');
const progeny              = require('gulp-progeny');
const lessPluginCleanCSS   = require('less-plugin-clean-css');
const lessPluginAutoprefix = require('less-plugin-autoprefix');

const targetPath = process.env.MDF_DEBUG_TARGET || path.join(__dirname, '../../yonyou-mdf/yonyou-mdf-framework/packages/mdf-app')
const targetPackage = path.join(targetPath, 'node_modules/yonui-ys/lib')
const targetLib = path.resolve('.', targetPackage);

const autoprefix = new lessPluginAutoprefix({browsers: browsers});
const cleancss = new lessPluginCleanCSS();
var browsers = [
	'Android >= 2.3',
	'Chrome >= 20',
	'Firefox >= 24', // Firefox 24 is the latest ESR
	'Explorer >= 8',
	'iOS >= 6',
	'Opera >= 12',
	'Safari >= 6'
];
gulp.task('style', function () {
	return gulp.src(['src/**/*.less'])
		.pipe(cached('less'))
		.pipe(using({prefix: 'less'}))
		.pipe(progeny({
            regexp: /^\s*@import\s*(?:\(\w+\)\s*)?['"]([^'"]+)['"]/
        }))
		.pipe(sourcemaps.init())
		.pipe(less({plugins:[autoprefix, cleancss]}))
		.on('error', function (err) { console.log(err); })
		.pipe(using())
		.pipe(remember('css'))
		.pipe(concat('AcTips.css'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build'))
});

// gulp.task('clean', (done) => {
//   rimraf('./lib', done)
// })

gulp.task('build', gulp.series(['style'], (done) => {
  done()
}))

gulp.task('debug', (done) => {
  gulp.src(['./build/**'])
    .pipe(gulp.dest(targetLib))

  done()
})
