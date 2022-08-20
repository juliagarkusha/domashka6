// 4. Написать функцию, принимающую один параметр. При первом вызове она его запоминает, при втором - суммирует переданный параметр с тем,
// что передали впервые и т.д. Все это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
// На каждом вызове возвращает текущую сумму

const getSumFunc = () => {
    let total = 0;

    return (number) => {
        total += number;
        return total;
    }
};

const sum = getSumFunc();

console.log('debug sum(2)', sum(3));
console.log('debug sum(5)', sum(5));
console.log('debug sum(20)', sum(20));
