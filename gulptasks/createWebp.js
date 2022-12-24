import gulp from "gulp";
import webp from "gulp-webp";

export const createWebp = () => {
  const pathToSrc = "source/img/";
  // const pathToPublic = "public/img/";

  return gulp
    .src(`${pathToSrc}/**/*.{png,jpg}`)
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(`${pathToSrc}`));
};
