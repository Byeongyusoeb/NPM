const _ = require('lodash')

const defaults = _.defaults({'a': 1}, {'a': 3, 'b': 2})
const partition = _.partition([1, 2, 3, 4], n => n % 2)

console.log(defaults, partition)
