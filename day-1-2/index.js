const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const depths = input.split('\n')

console.log(`There are ${depths.length} depth measurements.`)

let increases = 0
let lastDepth = 0

depths.forEach((depth, i) => {
    const threes = depths.slice(i, i + 3)

    const reduce = threes.reduce((a, b) => parseInt(a) + parseInt(b));

    if (threes.length < 3) {
        console.log(`Not enough measurements for ${threes}`)

        console.log(`There where ${increases} increases.`)
        process.exit()
    }

    if (reduce > lastDepth && lastDepth !== 0) {
        increases++
    }

    lastDepth = reduce
})
