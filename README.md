# single-line-stream

Basically [single-line-log](https://github.com/freeall/single-line-log) by @freeall except this is a through stream

```
npm install single-line-stream
```

## Usage

``` js
var log = require('single-line-stream')
var fs = require('fs')

fs.createReadStream('/dev/urandom', {highWaterMark:16, encoding:'hex'})
  .pipe(log())
  .pipe(process.stdout)
```

The above example will print out a random hex string that updates inplace in your
terminal.

## License

MIT
