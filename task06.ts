/*
6)
Реализовать функцию indexOfAll.
    Первый аргумент - массив, второй - значение

Функция возвращает массив со всеми индексами, которые соответствуют переданному значению

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); -> []
 */

function indexOfAll(arr: Array<any>, val: any): Array<any> {
    let newArr: Array<any> = []

    arr.forEach((x, index) => {
        if (x === val) {
            newArr.push(index)
        }
    })

    return newArr;
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); //-> [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); //-> []
