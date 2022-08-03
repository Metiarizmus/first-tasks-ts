/*
13)
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

    Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1
*/


function filterRange<T>(arr: T[], a: T, b: T): T[] {
    return arr.filter(x => x >= a && x <= b);
}

let arrStr = ['a', 'b', 'c', 'd']
console.log(filterRange(arrStr, 'a', 'c'));
