

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
// const arr = []
// const arr2 = new Array([])
//
// console.log(arr.__proto__ === Array.prototype)
// console.log(arr2.__proto__ === Array.prototype)
// console.log(arr.__proto__ === arr2.__proto__)

// console.log(Car.prototype.__proto__ === Object.prototype)

// const foo = () => {}
// function foo2() {}
// const foo3 = function() {}

// console.log(foo.__proto__ === Function.prototype)
// console.log(foo2.__proto__ === Function.prototype)
// console.log(foo3.__proto__ === Function.prototype)

// console.log(Function.prototype.__proto__ === Object.prototype)

// console.log(Car.__proto__ === Function.prototype)
// console.log(Number.__proto__ === Function.prototype)
// console.log(Array.__proto__ === Function.prototype)
// console.log(Object.__proto__ === Function.prototype)


// console.log(Function.__proto__ === Function.prototype)
//
// console.log(Object.prototype.__proto__ === null)

// const car1 = new Car('bmw', 200)
// console.log(car1.__proto__ === Car.prototype)
// console.log(car1.__proto__.__proto__ === Object.prototype)
// console.log(car1.__proto__.__proto__.__proto__ === null)
// console.log(Function.__proto__ === Function.prototype)



// class Car {
//     constructor(brand, color, speed) {
//         this.brand = brand
//     }
//
//     startEngine() {
//         console.log(`${this.brand} started`)
//     }
//
//     static compareCars(car1, car2) {
//         car1.speed > car2.speed
//             ? console.log(`${car1.brand} is faster`)
//             : console.log(`${car2.brand} is faster`)
//     }
// }
//
// class SuperCar extends Car {
//     constructor(brand, canFly) {
//         super(brand)
//         this.canFly = canFly
//     }
//     fly() {
//         console.log(`${this.brand} flying`)
//     }
// }
//
//
// const car1 = new Car('opel', 180)
// const car2 = new Car('bmw', 200)
//
// const superCar = new SuperCar('super-opel', true)
//
// console.log(superCar.__proto__ === SuperCar.prototype)

// console.log(car1.__proto__.__proto__ === Object.prototype)
// console.log(car1.__proto__.__proto__.__proto__ === null)


// console.log(superCar.__proto__ === SuperCar.prototype)
// console.log(SuperCar.prototype.__proto__ === Car.prototype)
// console.log(SuperCar.__proto__.__proto__ === Function.prototype)
// console.log(superCar.__proto__.__proto__ === Car.prototype)
// console.log(superCar.__proto__.__proto__.__proto__.__proto__ === null)

// console.log(superCar.__proto__.__proto__ === Car.prototype)


function CarCreator (brand, maxSpeed)  {
    this.brand = brand
    this.maxSpeed = maxSpeed

}

CarCreator.prototype = {
    startEngine () {
        console.log(`${this.brand} started`)
    }
}

CarCreator.compareCars = function (car1, car2) {
    if (!car1?.maxSpeed || !car2?.maxSpeed) {
        console.log("Error: Invalid car objects");
        return;
    }

    if (car1.maxSpeed > car2.maxSpeed) {
        console.log(`${car1.brand} is faster`);
    } else if (car1.maxSpeed < car2.maxSpeed) {
        console.log(`${car2.brand} is faster`);
    } else {
        console.log(`${car1.brand} and ${car2.brand} speeds are equal`);
    }
}

const bmw = new CarCreator('bmw', 200)
// bmw.startEngine()

function SuperCarCreator (brand, maxSpeed, canFly)  {
    CarCreator.call(this, brand, maxSpeed)
    this.canFly = canFly
}

SuperCarCreator.__proto__ = CarCreator
SuperCarCreator.prototype.__proto__ = CarCreator.prototype

const superBmw = new SuperCarCreator('superBmw', 200, true)
const superOPel = new SuperCarCreator('superOPel', 250, true)

SuperCarCreator.compareCars(superBmw, superOPel)




