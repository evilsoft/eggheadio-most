const logger = require('./lib/logger')
const most = require('most')

const { just } = most

const log =
  label => value => logger(label, value)

const stream =
  most.of('anything')

console.log(stream)

most.of('anything')
  .observe(log('string'))

just('anything')
  .observe(log('string'))

just(23)
  .observe(log('number'))

// Bonus Bits
just(true)
  .observe(log('boolean'))

just({ a: 1, b: 2 })
  .observe(log('object'))

just([ 1, 2, 3])
  .observe(log('array'))

just(x => x)
  .observe(log('function'))

just(undefined)
  .observe(log('undefined'))
