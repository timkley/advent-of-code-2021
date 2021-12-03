const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const readings = input.split('\n')

console.log(`There are ${readings.length} diagnostic readings.`)

let bitArrays = []

readings.forEach(reading => {
    let bits = reading.split('')

    bits.forEach((bit, index) => {
        bitArrays[index] = bitArrays[index] || []
        bitArrays[index].push(bit)
    })
})

let gammaRateBinary = ''
let epsilonRateBinary = ''

bitArrays.forEach(bitArray => {
    const bitArraySum = bitArray.reduce((a, b) => parseInt(a) + parseInt(b))
    if (bitArraySum === bitArray.length / 2) {
        console.error('bitArraySum should never be the same as half of its length')
        process.exit()
    }
    gammaRateBinary += bitArraySum > bitArray.length / 2 ? '1' : '0'
    epsilonRateBinary += bitArraySum > bitArray.length / 2 ? '0' : '1'
})

let gammaRate = parseInt(gammaRateBinary, 2)
let epsilonRate = parseInt(epsilonRateBinary, 2)

console.log(`The power consumption is ${gammaRate * epsilonRate}`)
