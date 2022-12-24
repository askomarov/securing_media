/* eslint-disable */
import gulp from "gulp";
import purgecss from "gulp-purgecss";
import rename from "gulp-rename";
import csso from "gulp-csso";
import sourcemap from "gulp-sourcemaps";

export const cleanCss = () => {
  return gulp
    .src("dist/css/style.css")
    .pipe(
      purgecss({
        content: ["dist/**/*.html"],
      })
    )
    .pipe(
      rename({
        suffix: ".clean",
      })
    )
    .pipe(gulp.dest("dist/css"))
    .pipe(csso())
    .pipe(rename("style.clean.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("dist/css"));
};
