const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const movements = input.split('\n')

console.log(`There are ${movements.length} movements.`)

let horizontal = 0
let depth = 0

movements.forEach(movement => {
    const [direction, units] = movement.split(' ')

    switch (direction) {
        case 'forward':
            horizontal += parseInt(units)
            break
        case 'up':
            depth -= parseInt(units)
            break
        case 'down':
            depth += parseInt(units)
            break
    }
})

console.log(`The horizontal distance is ${horizontal}.`)
console.log(`The depth is ${depth}.`)

console.log(`The multipled distance is ${horizontal * depth}.`)
