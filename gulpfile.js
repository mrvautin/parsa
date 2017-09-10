const gulp = require('gulp');
const minify = require('gulp-minify');
const runSequence = require('run-sequence');
const fs = require('fs');
const path = require('path');

gulp.task('build', function(){
    gulp.src('parsa.js')
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('docs', function(callback){
    const formats = require('./parsa.js').dateFormats;
    let formatsString = "";

    // loop our date formats
    Object.keys(formats).forEach((value) => {
        formatsString += "- `" + value +"`\r\n";
    });

    // read src markdown
    let readmeFile = fs.readFileSync(path.join('src', 'READMESRC.md'), 'utf-8');

    // inject custom data
    readmeFile = readmeFile.replace("{{supported_formats}}", formatsString);

    // write out markdown file
    fs.writeFileSync('README.md', readmeFile);
    callback();
});

gulp.task('deploy', function(callback){
    runSequence('docs', ['build'], callback);
});

gulp.task("default", ["deploy"]);
