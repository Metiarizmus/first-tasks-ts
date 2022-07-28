/*
14)
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

    Например:

let strings = [‘aaa', ‘aaa', ‘zzz', ‘xxx', ‘aaa', ‘bbb', ‘aaa',  ‘xxx', ‘ccc'];

alert( unique(strings) ); // [‘aaa', ‘zzz', ‘xxx', ‘bbb', ‘ccc']
*/


function unique(arr: Array<any>): Set<any>{
    let set = new Set<any>();
    arr.forEach(x=> set.add(x));
    return set;
}

let strings = ['aaa', 'aaa', 'zzz', 'xxx', 'aaa', 'bbb', 'aaa',  'xxx', 'ccc'];
let bools = [true, true, false]
console.log(unique(bools))