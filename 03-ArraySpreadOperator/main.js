// Array Spread Operator

const arr = [1, 2]

const add = (a,b) => a+b

const result = add(...arr)

console.log(result)

// La idea de esta instrucción es crear una copia de arr, la cual no mutará su muta arr
const arr2 = [...arr]

// arr3 crea una copia de arr la cual mutará junto con arr
const arr3 = arr

// Aquí muta arr
arr.push(5);

console.log(arr,arr2, arr3)