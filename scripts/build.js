var browserRun = require('browser-run')
var fs = require('fs')
var join = require('path').join

var GET_STYLES = 'console.log(JSON.stringify(Array.prototype.slice.call(document.defaultView.getComputedStyle(document.body, ""))));window.close();'

var VENDOR_DIR = join(__dirname, '../vendor')

function run (browser) {
  var b = browserRun({ browser: browser })
  var w = fs.createWriteStream(join(VENDOR_DIR, browser + '.json'))

  b.pipe(w)
  b.write(GET_STYLES)
  b.end()
}

;[
  'phantom',
  'chrome',
  // 'ie',
  // 'firefox', // Damn you Firefox, why you no work?
  'safari'
].map(run)
