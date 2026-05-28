
//
// const getFirstElement = <T>(array: T[]): T => {
//     return array[0]
// }
//

// console.log(getFirstElement(words))
// console.log(getFirstElement(numbers))

const numbers = [1, 2, 3, 4, 5]
const words = ['hello', 'world', 'type']
//
// const isEven = (num: number) => num % 2 === 0
//
// const startsWithT = (word: string) => word.startsWith('t')
//
// const filterArray = <T>(arr: T[], predicate: (el: T) => boolean): T[] => {
//     return arr.filter(predicate)
// }
//
// console.log(filterArray(numbers, isEven))
// console.log(filterArray(words, startsWithT))

// const mapArray = (arr: number[], transformer: (num: number) => string): string[] => {
//     return arr.map(transformer)
// }

// const mapArray = <T, B>(arr: T[], transform: (el: T) => B): B[] => {
//     return arr.map(transform)
// }
//
// const transformNumberToString = (num: number) => `Number: ${num}`
//
// const transformStringToNumber = (word: string) => word.length
//
// console.log(mapArray(numbers, transformNumberToString))
// console.log(mapArray(words, transformStringToNumber))

const updateArray = <T>(arr: T[], value: T): T[] => {
    if(arr.includes(value)) return arr
    return [...arr, value]
}

// Строки
const stringArray = ["apple", "banana", "cherry"]
console.log(updateArray(stringArray, "banana")) // ['apple', 'banana', 'cherry']
console.log(updateArray(stringArray, "strawberry")) // ['apple', 'banana', 'cherry', 'strawberry']

// Числа
const numberArray = [1, 2, 3]
console.log(updateArray(numberArray, 2)) // [1, 2, 3]
console.log(updateArray(numberArray, 4)) // [1, 2, 3, 4]
