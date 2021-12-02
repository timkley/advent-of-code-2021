const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const depths = input.split('\n')

console.log(`There where ${depths.length} depth measurements.`)

let lastDepth = 0
let increases = 0

depths.map(depth => {
    if (lastDepth < depth && lastDepth !== 0) {
        increases++
    }

    lastDepth = depth
})

console.log(`There where ${increases} increases.`)
