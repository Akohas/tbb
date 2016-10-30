var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  uglify = require('gulp-uglify'),
  watchify = require('watchify'),
  data = require('gulp-data'),
  browserify = require('browserify'),
  fs = require('fs');



var staticStylesheet = './static/stylesheets';
var styleCss = '../static/stylesheets/dist/style.css';
var staticStylesheetJade = '../static';
var viewsFolder = './views';

gulp.task('jade', function(){
  gulp.src('./views/*.jade')
  .pipe(data(function(file) {
      return {
        stylecss: styleCss,
        news: [
          {
            new:{
              img: 'https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-0.3.5&q=80&fm=jpg',
              title: 'Title of new1',
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, corrupti voluptates iusto, quae doloremque consequuntur nulla ratione odio corporis enim culpa eius, fugit, beatae temporibus expedita laboriosam et perspiciatis facilis ex minus odit consequatur. Accusantium rem, ratione velit et amet eligendi quidem sint, cupiditate minus esse totam magni autem ipsam cum distinctio enim fugit id, alias recusandae consequuntur dolores repellendus veniam est rerum! Cumque temporibus nisi ad itaque rem ut provident beatae quisquam facilis saepe ratione, rerum, vitae eligendi eaque asperiores minima reprehenderit iste id blanditiis aperiam, ea possimus alias illo atque! Qui illum eius maiores quis accusantium sit."
            }
          },
          {
            new:{
              img: 'https://images.unsplash.com/photo-1470617522248-ace6e93315a5?ixlib=rb-0.3.5&q=80&fm=jpg',
              title: 'Title of new2',
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, corrupti voluptates iusto, quae doloremque consequuntur nulla ratione odio corporis enim culpa eius, fugit, beatae temporibus expedita laboriosam et perspiciatis facilis ex minus odit consequatur. Accusantium rem, ratione velit et amet eligendi quidem sint, cupiditate minus esse totam magni autem ipsam cum distinctio enim fugit id, alias recusandae consequuntur dolores repellendus veniam est rerum! Cumque temporibus nisi ad itaque rem ut provident beatae quisquam facilis saepe ratione, rerum, vitae eligendi eaque asperiores minima reprehenderit iste id blanditiis aperiam, ea possimus alias illo atque! Qui illum eius maiores quis accusantium sit."
            }  
          },
          {
            new:{
              img: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-0.3.5&q=80&fm=jpg',
              title: 'Title of new3',
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, corrupti voluptates iusto, quae doloremque consequuntur nulla ratione odio corporis enim culpa eius, fugit, beatae temporibus expedita laboriosam et perspiciatis facilis ex minus odit consequatur. Accusantium rem, ratione velit et amet eligendi quidem sint, cupiditate minus esse totam magni autem ipsam cum distinctio enim fugit id, alias recusandae consequuntur dolores repellendus veniam est rerum! Cumque temporibus nisi ad itaque rem ut provident beatae quisquam facilis saepe ratione, rerum, vitae eligendi eaque asperiores minima reprehenderit iste id blanditiis aperiam, ea possimus alias illo atque! Qui illum eius maiores quis accusantium sit."
            }  
          },
          {
            new:{
              img: 'https://images.unsplash.com/photo-1471459756805-2fef3588424b?ixlib=rb-0.3.5&q=80&fm=jpg',
              title: 'Title of new4',
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, corrupti voluptates iusto, quae doloremque consequuntur nulla ratione odio corporis enim culpa eius, fugit, beatae temporibus expedita laboriosam et perspiciatis facilis ex minus odit consequatur. Accusantium rem, ratione velit et amet eligendi quidem sint, cupiditate minus esse totam magni autem ipsam cum distinctio enim fugit id, alias recusandae consequuntur dolores repellendus veniam est rerum! Cumque temporibus nisi ad itaque rem ut provident beatae quisquam facilis saepe ratione, rerum, vitae eligendi eaque asperiores minima reprehenderit iste id blanditiis aperiam, ea possimus alias illo atque! Qui illum eius maiores quis accusantium sit."
            }  
          },
          {
            new:{
              img: 'https://images.unsplash.com/photo-1455287278107-115faab3eafa?ixlib=rb-0.3.5&q=80&fm=jpg',
              title: 'Title of new5',
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, corrupti voluptates iusto, quae doloremque consequuntur nulla ratione odio corporis enim culpa eius, fugit, beatae temporibus expedita laboriosam et perspiciatis facilis ex minus odit consequatur. Accusantium rem, ratione velit et amet eligendi quidem sint, cupiditate minus esse totam magni autem ipsam cum distinctio enim fugit id, alias recusandae consequuntur dolores repellendus veniam est rerum! Cumque temporibus nisi ad itaque rem ut provident beatae quisquam facilis saepe ratione, rerum, vitae eligendi eaque asperiores minima reprehenderit iste id blanditiis aperiam, ea possimus alias illo atque! Qui illum eius maiores quis accusantium sit."
            }
          },
          {
            new:{
              img: 'https://images.unsplash.com/photo-1468345096048-fdb10393b472?ixlib=rb-0.3.5&q=80&fm=jpg',
              title: 'Title of new6',
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, corrupti voluptates iusto, quae doloremque consequuntur nulla ratione odio corporis enim culpa eius, fugit, beatae temporibus expedita laboriosam et perspiciatis facilis ex minus odit consequatur. Accusantium rem, ratione velit et amet eligendi quidem sint, cupiditate minus esse totam magni autem ipsam cum distinctio enim fugit id, alias recusandae consequuntur dolores repellendus veniam est rerum! Cumque temporibus nisi ad itaque rem ut provident beatae quisquam facilis saepe ratione, rerum, vitae eligendi eaque asperiores minima reprehenderit iste id blanditiis aperiam, ea possimus alias illo atque! Qui illum eius maiores quis accusantium sit."
            }
          }
        ]
      }
    }))
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
      root: './',
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
