
// function createCar (brand, maxSpeed) {
//     return {
//         brand: brand,
//         maxSpeed: maxSpeed,
//         startEngine() {
//             console.log(`${this.brand} engine is started`);
//         }
//     }
// }
//
// const bmw = createCar('bmw', 200)
// const opel = createCar('opel', 150)
//
//
// console.log(opel.startEngine === bmw.startEngine)

// function CarCreator (brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
//     this.startEngine = function () {
//         console.log(`${this.brand} engine is started`)
//     }
// }
//
// CarCreator.prototype.startEngine = function () {
//     console.log(`${this.brand} engine is started`)
// }
//
// const bmw = new CarCreator('bmw', 200)
// const opel = new CarCreator('opel', 150)
//
//
// console.log(opel.startEngine === bmw.startEngine)


//
// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//
//     startEngine () {
//         console.log(`${this.brand} started`)
//     }
//     // stopEngine = function () {
//     //     console.log(`${this.brand} stopped`)
//     // }
//
// }
//
// const bmw = new Car('bmw', 200)
// const opel = new Car('opel', 180)
// // console.log(opel.stopEngine === bmw.stopEngine)


// class Car {
//     #wheels = 4
//
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//
//     startEngine () {
//         console.log(`${this.brand} started`)
//     }
//
//     setWheels (value) {
//         if (value > 5) {
//             throw Error(`Value should be <= 5`)
//         }
//         this.#wheels = value
//     }
//
//     getWheels () {
//         return this.#wheels
//     }
//
// }
//
// const bmw = new Car('bmw', 200)
// console.log(bmw.getWheels())
// bmw.setWheels(5)
// console.log(bmw.getWheels())
// bmw.setWheels(6)

class Car {
    #wheels = 4

    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
    }

    startEngine () {
        console.log(`${this.brand} started`)
    }

    set wheels (value) {
        if (value > 5) {
            throw Error(`Value should be <= 5`)
        }
        this.#wheels = value
    }

    get wheels () {
        return this.#wheels
    }

    static compareCars(car1, car2) {
        car1.maxSpeed === car2.maxSpeed
            ? console.log(`Cars have same speed`)
                : car1.maxSpeed > car2.maxSpeed
                    ? console.log(`${car1.brand} is faster`)
                        : console.log(`${car2.brand} is faster`)
    }
}

// const bmw = new Car('bmw', 200)
// console.log(bmw.wheels)
// bmw.wheels = 5
// console.log(bmw.wheels)

const bmw = new Car('bmw', 200)
const kia = new Car('kia', 150)
Car.compareCars(bmw, kia)
