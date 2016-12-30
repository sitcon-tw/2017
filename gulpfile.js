/*====================================
=            Dependencies            =
====================================*/

const fs = require('fs')
const clc = require('cli-color') // https://github.com/medikoo/cli-color
const moment = require('moment') // https://github.com/moment/moment/

// gulp

const gulp = require('gulp') // https://github.com/gulpjs/gulp
const gulpif = require('gulp-if') // https://github.com/robrich/gulp-if
const rename = require('gulp-rename') // https://github.com/hparra/gulp-rename
const sourcemaps = require('gulp-sourcemaps') // https://github.com/floridoo/gulp-sourcemaps
const cssmin = require('gulp-cssmin') // https://github.com/chilijung/gulp-cssmin
const uglify = require('gulp-uglify') // https://github.com/terinjokes/gulp-uglify
const concat = require('gulp-concat') // https://github.com/contra/gulp-concat

// tasks

const del = require('del') // https://github.com/sindresorhus/del

const sass = require('gulp-sass') // https://github.com/dlmanning/gulp-sass
const autoprefixer = require('gulp-autoprefixer') // https://github.com/sindresorhus/gulp-autoprefixer

const browserify = require('browserify') // https://github.com/substack/node-browserify
const watchify = require('watchify') // https://github.com/substack/watchify
const source = require('vinyl-source-stream') // https://github.com/hughsk/vinyl-source-stream
const buffer = require('vinyl-buffer') // https://github.com/hughsk/vinyl-buffer
const babelify = require('babelify') // https://github.com/babel/babelify

const browserSync = require('browser-sync') // https://github.com/Browsersync/browser-sync



/*===============================
=            Utility            =
===============================*/

let env = process.env.NODE_ENV || 'development'

function colorLog(color, message) {
	console.log(`[${ clc.blackBright(moment().format('HH:mm:ss')) }] ${ clc[color](message) }`)
}

function errorLog(err) {
	colorLog('redBright', err.stack)
}

gulp.task('default', ['move', 'sass', 'react'])
gulp.task('watch', ['browser-sync'])



/*=============================
=            Clean            =
=============================*/

gulp.task('clean', () => del([
	'./public/**',
	'!./public',
]))



/*============================
=            Move            =
============================*/

gulp.task('move', () => gulp.src('./assets/**/*')
	.pipe(gulp.dest('./public/'))
	.pipe(browserSync.stream())
)

gulp.task('move:watch', ['move'], () => {
	gulp.watch(['./assets/**/*'], (event) => {
		gulp.src(event.path)
			.pipe(gulp.dest('./public/'))
	})
})



/*============================
=            Sass            =
============================*/

gulp.task('sass', () => gulp.src('./src/sass/*.scss')
	.pipe(gulpif(env === 'development', sourcemaps.init()))
	.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulpif(env === 'development', sourcemaps.write('./')))
	.pipe(gulp.dest('./public/css/'))
)

gulp.task('sass:watch', ['sass'], () => {
	gulp.watch('./src/sass/**/*.scss', ['sass'])
})



/*=============================
=            React            =
=============================*/

let dependencies = Object.keys(require('./package.json').dependencies)
let lib_bundler, app_bundler

let bundle = (b, output, mangle) => {
	b.bundle()
		.on('error', errorLog)
		.pipe(source(output))
		.pipe(buffer())
		.pipe(gulpif(env === 'production', uglify({ mangle: mangle })))
		.on('error', errorLog)
		.pipe(gulp.dest('./public/js/'))
}

gulp.task('react', () => {
	lib_bundler = browserify({
		debug: (env === 'development'),
		paths: ['./node_modules/']
	})

	app_bundler = browserify('./src/react/main.jsx', {
		cache: {},
		packageCache: {},
		debug: (env === 'development'),
		paths: ['./node_modules/'],
		transform: [
			['babelify', { presets: ['es2015', 'react'] }]
		]
	})

	dependencies.forEach((v) => {
		lib_bundler.require(v)
		app_bundler.external(v)
	})

	bundle(lib_bundler, 'lib.min.js', false)
	bundle(app_bundler, 'main.min.js', true)
})

gulp.task('react:watch', ['react'], () => {
	app_bundler.plugin(watchify)
	app_bundler.on('log', (msg) => { colorLog('yellowBright', msg) })
	app_bundler.on('update', (ids) => { bundle(app_bundler, 'main.min.js', true) })
})



/*====================================
=            Browser Sync            =
====================================*/

gulp.task('browser-sync', ['move:watch', 'sass:watch', 'react:watch'], () => {
	browserSync({
		files: [
			'./public/index.html',
			'./public/css/**/*.css',
			'./public/img/**/*',
			'./public/js/**/*.js'
		],
		server: {
			baseDir: './public/'
		}
	})
})
