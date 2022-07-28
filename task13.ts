/*
13)
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

    Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1
*/


function filterRange(arr: Array<number | string>, a: number | string, b: number | string): Array<number | string> {
    let newArr: Array<number | string> = [];
    for (let q of arr) {
        if (q >= a && q <= b) {
            newArr.push(q);
        }
    }
    return newArr;
}

let arr = [5, 3, 8, 1];
let arrStr = ['a', 'b', 'c', 'd']
let filtered = filterRange(arrStr, 'a', 'c');
console.log(filtered)