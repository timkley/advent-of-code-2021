const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const readings = input.split('\n')

console.log(`There are ${readings.length} diagnostic readings.`)

function oxygenRating (readings, index = 0) {
    if (readings.length === 1) {
        return readings[0]
    }

    const zeroes = readings.filter(reading => reading.charAt(index) === '0')
    const ones = readings.filter(reading => reading.charAt(index) === '1')

    return oxygenRating(ones.length >= zeroes.length ? ones : zeroes, index + 1)
}

function co2rating (readings, index = 0) {
    if (readings.length === 1) {
        return readings[0]
    }

    const zeroes = readings.filter(reading => reading.charAt(index) === '0')
    const ones = readings.filter(reading => reading.charAt(index) === '1')

    return co2rating(zeroes.length <= ones.length ? zeroes : ones, index + 1)
}

console.log(`Oxygen rating: ${oxygenRating(readings)}`)
console.log(`CO2 rating: ${co2rating(readings)}`)
console.log(`Total rating: ${parseInt(oxygenRating(readings), 2) * parseInt(co2rating(readings), 2)}`)