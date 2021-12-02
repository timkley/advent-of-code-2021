const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const movements = input.split('\n')

console.log(`There are ${movements.length} movements.`)

let horizontal = 0
let depth = 0
let aim = 0

movements.forEach(movement => {
    const [direction, units] = movement.split(' ')

    switch (direction) {
        case 'down':
            aim += parseInt(units)
            break
        case 'up':
            aim -= parseInt(units)
            break
        case 'forward':
            horizontal += parseInt(units)
            depth += aim * parseInt(units)
            break
    }
})

console.log(`The horizontal distance is ${horizontal}.`)
console.log(`The depth is ${depth}.`)
console.log(`The aim is ${aim}.`)

console.log(`The multipled distance is ${horizontal * depth}.`)
