var fs = require('fs');
var UglifyJS = require('uglify-js');

/**
 * Minifies JS
 */
desc('Minify the src and copy into dest directory');
task('minify', {async: true}, function () {
  compressed = UglifyJS.minify('src/leaflet.featuregroup.subgroup-src.js')
  fs.writeFile('dist/leaflet.featuregroup.subgroup.js', compressed.code, function (err) {
    if (err) throw new Error();
    console.log('√ Minify success');
    complete();
  });
});

desc('Copy the un-minified src into the dest directory')
task('copy', {async: true}, function() {
  jake.cpR('src/leaflet.featuregroup.subgroup-src.js', 'dist/leaflet.featuregroup.subgroup-src.js');
  console.log('√ Copy success');
})

task('default', ['minify', 'copy']);