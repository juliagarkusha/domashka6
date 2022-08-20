// 5. (не обязательно) Написать функцию, которая получает 3 аргумента: два числа и функцию.
// Совершить вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power);
// в ответе должны получить 8 как 2 в степени 3.

const power = (a, b) => Math.pow(a, b);

const doFunction = (a, b, power) => {
    return power(a, b);
}

console.log('debug doFunction', doFunction(2, 3, power));
