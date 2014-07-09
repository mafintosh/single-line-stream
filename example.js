var log = require('single-line-stream')
var fs = require('fs')

fs.createReadStream('/dev/urandom', {highWaterMark:16, encoding:'hex'})
  .pipe(log())
  .pipe(process.stdout)
