fs = require('fs')

module.exports.minify = (file) => {
  code = fs.readFileSync(file, 'utf-8');
  code_min = code.replace(/(\s|\n)/g,'');
  fs.writeFileSync(file + '_min.js', code_min);
}