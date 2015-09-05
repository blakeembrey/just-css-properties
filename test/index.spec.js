var test = require('blue-tape')
var properties = require('../')

test('just css properties', function (t) {
  t.plan(1)
  t.equal(Array.isArray(properties), true)
  t.end()
})
