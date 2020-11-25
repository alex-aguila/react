// Object Spread Operator
/*
* Permite hacer una copia de un objeto sin que éste mute, aún cuando el objeto original lo haga
 */

const obj1 = {
    a: 1,
    b: 2,
}

const obj2 = {
    ...obj1,
}

obj1['c']=3

console.log(obj1, obj2)