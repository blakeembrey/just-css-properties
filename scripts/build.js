var run = require('browser-run')
var fs = require('fs')
var join = require('path').join
var arrify = require('arrify')
var minimist = require('minimist')

var GET_STYLES = 'console.log(JSON.stringify(Array.prototype.slice.call(document.defaultView.getComputedStyle(document.body, ""))));window.close();'

var VENDOR_DIR = join(__dirname, '../vendor')

function build (browser) {
  var b = run({ browser: browser })
  var f = fs.createWriteStream(join(VENDOR_DIR, browser + '.json'))

  b.pipe(f)
  b.end(GET_STYLES)
}

var browsers = minimist(process.argv.slice(2), {
  defaults: {
    browser: [
      'electron',
      'phantom',
      'chrome',
      // 'ie',
      // 'firefox',
      'safari'
    ]
  }
}).browser

arrify(browsers).map(build)
