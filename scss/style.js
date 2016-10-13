var sass = require("node-sass");
var fs = require("fs");

var Scss = sass.render({
  file: 'scss/style.scss',
  outFile: 'public/css/style.min.css',
  outputStyle: 'compressed'
}, function(err, result) {
  if (!err){
    fs.writeFile('public/css/style.min.css', result.css, function(err){
      console.log((err)? {"err": err} : {"success": "css compiled and written on disk"});
    });
  } else {
    console.log({"err": err});
  }
});

module.exports = Scss;
