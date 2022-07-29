/*
Функция принимает 2 массива.
    Возвращает новый массив, который состоит только из тех элементов,
    которые встретились в одном массиве, но не встретились в другом

console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']
 */

function arrayDiff<T>(arr1: T[], arr2: T[]): T[] {

    let map = new Map<any, number>();

    arr1.concat(arr2).forEach(x => {
        map.has(x) ? map.set(x, (map.get(x) + 1)) : map.set(x, 1);
    })

    let result: T[] = [];
    map.forEach(((value, key) => {
        if (value === 1) {
            result.push(key);
        }
    }))
    return result;
}

console.log(arrayDiff<number>([1, 2, 3], [1, 2, 4])); //-> [3, 4]
console.log(arrayDiff<any>([1, 3, 3, 4], [1, 3, '4'])); //-> [4, '4']
