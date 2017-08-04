var gulp = require("gulp");
gulp.task("移动",function(){
	gulp.src("./css.js")
		.pipe(gulp.dest("./rikao3/js"))
})
gulp.task("default",["移动"])