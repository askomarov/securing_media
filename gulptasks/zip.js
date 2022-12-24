import gulp from "gulp";
import del from "del";
import zipPlugin from "gulp-zip";

let id = Date.now();
export const zip = () => {
  del(`./build.zip`);

  return gulp
    .src(`dist/**/*.*`, {})
    .pipe(zipPlugin(`dist-${id}.zip`))
    .pipe(gulp.dest("./"));
};
