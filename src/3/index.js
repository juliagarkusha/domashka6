// 3. Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

const stringHandler = (string = '', symbolsArr = []) => {
    return symbolsArr.reduce((acc, item) => acc.replaceAll(item, ''), string)
}

console.log('debug stringHandler ', stringHandler('hello world', ['l', 'd']))
