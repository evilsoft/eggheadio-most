const logger = require('./lib/logger')
const most = require('most')
const { from, just } = most

const array =
  [ 1, 2, 3 ]

from(array)
  .observe(logger.bind(null, 'from array'))

just(array)
  .observe(logger.bind(null, 'just array'))

const string =
  'ice cream'

from(string)
  .observe(logger.bind(null, 'from string'))

just(string)
  .observe(logger.bind(null, 'just string'))

function *life() {
  const data =
    [ 'eat', 'sleep', 'code' ]

  for(let i=0 ;; ++i) {
    yield data[ i % data.length ]
  }
}

from(life())
  .take(3 * 5)
  .observe(logger.bind(null, 'from life'))

// Bonus Bits
function bonusBits() {
  from(array)
    .take(2)
    .observe(logger.bind(null, 'from array-take-2'))

  from(string)
    .take(3)
    .observe(logger.bind(null, 'from string-take-3'))

  const alphabet = {
    [Symbol.iterator]: function() {
      let start = 97
      let end = 122
      let index = start

      return {
        next: function() {
          return {
            value: String.fromCharCode(index > end ? index = start : index++),
            done: false
          }
        }
      }
    }
  }

  from(alphabet)
    .take(10)
    .observe(logger.bind(null, 'alphabet'))
}

// extra credit: run `bonusBits` outside of `setTimeout`,
//               see if you can figure out what is going on!

// bonusBits()

setTimeout(bonusBits, 0)
