/*
14)
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

    Например:

let strings = [‘aaa', ‘aaa', ‘zzz', ‘xxx', ‘aaa', ‘bbb', ‘aaa',  ‘xxx', ‘ccc'];

alert( unique(strings) ); // [‘aaa', ‘zzz', ‘xxx', ‘bbb', ‘ccc']
*/


function unique<T>(arr: T[]): Set<T>{
    return new Set<T>([...arr]);
}

let strings = ['aaa', 'aaa', 'zzz', 'xxx', 'aaa', 'bbb', 'aaa',  'xxx', 'ccc'];
let bools = [true, true, false]
console.log(unique(bools))