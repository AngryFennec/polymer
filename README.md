https://www.figma.com/file/UmPag9ZKgi4DGuxGA7CgZVN5/SteelAvto-%D0%BF%D0%BE%D0%BB%D0%B8%D0%BC%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B5%D1%80%D0%B0%D0%BC%D0%B8%D0%BA%D0%B0?node-id=0%3A1
"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var del = require("del");
var runSequence = require('run-sequence');

gulp.task("style", function () {
  gulp.src("source/sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
  autoprefixer()
  ]))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"))
  .pipe(server.reload({stream: true}));
});

gulp.task("serve", function () {
  server.init({
    server: "build/"
  });
  gulp.watch("source/sass/**/*.scss", ["style"]);
  gulp.watch("source/*.html", ["html"]);
});

gulp.task("clean", function () {
 return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
    ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("images", function () {
  return gulp.src("build/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"))
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}));
});

gulp.series
gulp.task("build", function (done) {
  runSequence(
    "clean",
    "copy",
    "style",
    "images",
    "html",
    done
  );
});
