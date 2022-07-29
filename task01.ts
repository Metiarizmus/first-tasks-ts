/*
1)
Первый аргумент - массив, второй - колбек-функция, которая применяется на массив
Колбек-функция применяется на каждый элемент массива и проверяет условие
Если хотя бы один раз колбек-функция вернула true, то any возвращает true
Иначе - false

Если колбек-функция не была передана, то из any возвращаем true,
    если в массиве есть хотя бы один элемент, который дает true,
    если все значения в массиве дают false, то возвращаем false

console.log(any([0, 1, 2, 0], x => x >= 2)); -> true
console.log(any([0, 0, 1, 0])); -> true
console.log(any([0, 0, 0, 0])); -> false
*/

function any<T>(arr: T[], fun: (x: T) => boolean = (x: T) => Boolean(x)): boolean {
    return arr.some(fun);
}

console.log(any<number>([0, 1, 2, 0], x => x >= 2)); //true
console.log(any<string>(['1', '2', '3', ''], x => x === '4')) //false
console.log(any<number>([0, 0, 1, 0])); //true
console.log(any<any>([0, 0, ' ', 0])); //true