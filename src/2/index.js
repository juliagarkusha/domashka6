// 2. Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.

const arithmeticMeanCalc = (arr) => {
    const arrSum = arr.reduce((acc, item) => {
        acc += item;
        return acc
    }, 0)

    return arrSum / arr.length;
}

console.log('debug arithmeticMeanCalc', arithmeticMeanCalc([1, 2, 3, 4, 5]))
