var fs = require('fs')
var join = require('path').join

var VENDOR_DIR = join(__dirname, '../vendor')

var properties = fs
  .readdirSync(VENDOR_DIR)
  .map(function (filename) {
    return JSON.parse(fs.readFileSync(join(VENDOR_DIR, filename)))
  })
  .reduce(function (all, props) {
    props.forEach(function (prop) {
      if (all.indexOf(prop) === -1) {
        all.push(prop)
      }
    })

    return all
  }, [])
  .sort()

fs.writeFileSync(join(VENDOR_DIR, 'all.json'), JSON.stringify(properties))
