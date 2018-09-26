const freq = require('wordfrequenter')

const sample = "this is is a a a a a sample string!"

const wf = new freq(sample.split(' '))

wf.set('string')

console.log(wf.get('is'))
console.log(wf.list())