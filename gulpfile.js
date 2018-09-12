var gulp = require("gulp");
var plumber = require('gulp-plumber');
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");

var server = require("browser-sync");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var image = require("gulp-image");
var del = require("del");
var run = require("run-sequence");

var jsmin = require('gulp-jsmin');
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var inject = require('gulp-inject');

var concat = require("gulp-concat");
var header = require('gulp-header');

function fileContents (filePath, file) {
  return file.contents.toString();
}

gulp.task("styles", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions",
        "IE 11"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    //.pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/styles"))
    .pipe(server.reload({stream: true}));
  gulp.src("source/less/plugins/*.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions",
        "IE 11"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("build/styles/plugins"))
    .pipe(server.reload({stream: true}));
});

gulp.task("jscript", function () {
  gulp.src("source/script/*.js")
    .pipe(plumber())
    .pipe(concat("main.js"))
    .pipe(header(' \'use strict\'; '))
    .pipe(gulp.dest("build/script/"))
    .pipe(server.reload({stream: true}));
});

gulp.task("jplugins", function(){
  gulp.src("source/script/plugins/*.js")
    .pipe(plumber())
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("build/script/plugins"));
});

gulp.task("serve", function() {
  server.init({
    server: "build",
    open: false
  });
  gulp.watch("source/{less,components}/**/*.less", ["styles"]);
  gulp.watch("source/*.html", ["copyhtml"]);
  gulp.watch("source/script/*.js", ["jscript"]);
  gulp.watch("source/script/plugins/*.js", ["jplugins"]);
});

gulp.task("images", function() {
  gulp.src("build/images/**/*.{png,jpg,gif}")
    .pipe(image({
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: false
    }))
  .pipe(gulp.dest("build/images"));
  gulp.src("build/images/upload/**/*.{png,jpg,gif}")
    .pipe(image({
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: false
    }))
    .pipe(gulp.dest("build/images/upload"));
});

gulp.task("svgs", function () {
  gulp.src("build/images/**/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("build/images"));
  gulp.src("build/images/upload/**/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("build/images/upload"));
});

gulp.task("symbols", function() {
  var cleanSymbols = del("build/icons/sprite.svg");
  var svgs = gulp
    .src("source/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/icons"));

  return gulp
    .src('build/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/images/**/*",
    "source/data/**/*",
    "source/*.html",
    "source/lib/**/*"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("copyhtml", function() {
  return gulp.src([
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("debug", function(fn) {
  run(
    "clean",
    "copy",
    "symbols",
    "styles",
    "jscript",
    "jplugins",
    fn
  );
});

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "symbols",
    "images",
    "svgs",
    "styles",
    "jscript",
    "jplugins",
    fn
  );
});
