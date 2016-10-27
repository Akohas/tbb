var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  uglify = require('gulp-uglify'),
  watchify = require('watchify'),
  browserify = require('browserify');
  fs = require('fs');

var staticStylesheet = './static/stylesheets';
var staticStylesheetJade = '../static';
var viewsFolder = './views';


gulp.task('jade', function(){
  gulp.src('./views/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./views'))
  .pipe(connect.reload());
});

  gulp.task('sass', function(){
    gulp.src(staticStylesheet + '/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(staticStylesheet + '/dist'))
    .pipe(connect.reload());
  });

  gulp.task('connect', function(){
    connect.server({
      root: './views/',
      livereload: true,
      port: 8000
    });
  });

  gulp.task('watch', function(){
    gulp.watch([staticStylesheet + '/*.scss'], ['sass']);
    gulp.watch([viewsFolder + '/*.jade'], ['jade']);
  });

  gulp.task('watchify', function(){
    var source = './js/main.js',
      dist =  './js/dist/common.js';

    var b = browserify({
      entries: [source],
      cache: {},
      packageCache: {},
      plugin: [watchify]
    });

    b.on('update', bundle);
    bundle();

    b.on('log', function (msg) {
      var log = [];
      if(msg){
        console.log('js was written from ' + source + ' to ' + dist);
      }
    });

    function bundle() {
      b.bundle().pipe(fs.createWriteStream(dist));
    }
  });


gulp.task('default',['watchify','sass','jade','watch','connect']);
