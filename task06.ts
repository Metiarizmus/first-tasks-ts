/*
6)
Реализовать функцию indexOfAll.
    Первый аргумент - массив, второй - значение

Функция возвращает массив со всеми индексами, которые соответствуют переданному значению

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); -> []
 */

function indexOfAll<T>(arr: T[], val: T): T[] {

    return arr.reduce((acc:any, el,index) => {
        if (el === val){
            acc.push(index);
        }
        return acc;
    }, [])
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); //-> [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); //-> []
