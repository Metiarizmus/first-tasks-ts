/*
5)
Реализовать функцию without.
    Первый аргумент - массив, второй и последующие - значения

Функция возвращает новый массив, который наполнен теми значениями,
    которые не передавались как второй и последующие аргументы функции

console.log(without([2, 1, 2, 3], 1, 2)) -> [3]
console.log(without([2, 1, 10, 20, 5], 1, 2, 5)) -> [10, 20]
 */


function without(arr: Array<any>, ...args: any): Array<any> {

    for (let q of args) {
        arr = arr.filter(x => x !== q)
    }

    return arr;
}

console.log(without([2, 1, 2, 3], 1, 2))// -> [3]
console.log(without(['a', 'b', 'c'], 'c'))// -> [a, b]
console.log(without([2, 1, 10, 20, 5], 1, 2, 5))// -> [10, 20]
console.log(without([2, 1, 10, 20, 5]))// -> [2, 1, 10, 20, 5]