//const as = require('async')
const fs = require('fs')
const freq = require('wordfrequenter')

fs.readFile('content.txt', 'UTF-8', (error, data) => {
    console.log(data)

    // const sample = "Hello hello, world wrld! this is a string world test!"

    // const wf = new freq(sample.split(' '));
    // wf.set('string')

    // console.log(wf.list())

    const wf = new freq(data.split(' '))

    wf.set('string')

    console.log(wf.get('is'))
    console.log(wf.list())
});