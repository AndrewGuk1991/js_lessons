

























// const sqr = (num: number) => {
//     console.log('call')
//     return num * num
// }
//
// const memoizedSqr = memoize(sqr)
//
// console.log(memoizedSqr(5))
// console.log(memoizedSqr(5))
// console.log(memoizedSqr(6))
// console.log(memoizedSqr(5))
//
// function memoize(inerFunc: any) {
//     const cache = {}
//
//     return (num) => {
//         return cache[num] ? cache[num] : cache[num] = inerFunc(num)
//     }
// }