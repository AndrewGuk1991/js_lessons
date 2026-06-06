

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//
//     startEngine() {
//         console.log(`${this.brand} started`)
//     }
//
//     stopEngine = () => {
//         console.log(`${this.brand} stopped`)
//     }
// }
//
// const car1 = new Car('opel', 180)
// const car2 = new Car('opel', 180)
//
// console.log(car1 === car2)
// console.log(car1.brand === car2.brand)
// console.log(car1.stopEngine === car1.stopEngine)
// console.log(car1.startEngine === car2.startEngine)
//
// console.log(car1.__proto__ === Car.prototype)

// const str = new String()
//
// console.log(str.__proto__ === String.prototype)
//
// const a  = new Number()
//
// console.log(a.__proto__ === Number.prototype)

// const str2 = '123'
//
// console.log(str2.__proto__ === String.prototype)
//
// console.log(typeof str2)
//
// const b = 5
//
// console.log(b.__proto__ === Number.prototype)
//
// console.log(typeof b)
//
const arr = []
const arr2 = new Array([])

console.log(arr.__proto__ === Array.prototype)
console.log(arr2.__proto__ === Array.prototype)
console.log(arr.__proto__ === arr2.__proto__)

