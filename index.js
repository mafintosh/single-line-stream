var through = require('through2')

var MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString()
var MOVE_UP = new Buffer('1b5b3141', 'hex').toString()
var CLEAR_LINE = new Buffer('1b5b304b', 'hex').toString()

module.exports = function() {
  var prev
  return through(function(data, enc, cb) {
    var prefix

    if (prev) {
      var reset = ''
      var newlines = 0

      for (var i = 0; i < prev.length; i++) {
        if (prev[i] === 10) newlines++
      }

      for (var i = 0; i < newlines+1; i++) {
        reset += MOVE_LEFT + CLEAR_LINE + (i < newlines ? MOVE_UP : '')
      }

      prefix = new Buffer(reset)
    }

    prev = data
    cb(null, prefix ? Buffer.concat([prefix, data]) : data)
  })
}
