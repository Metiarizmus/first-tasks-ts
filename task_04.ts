/*
4)
Функция принимает 2 массива, и возвращает массив объединенных значений,
    без дублирования

console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */

function union(arr1: Array<any>, arr2: Array<any>): Set<any> {

    let newArr: Array<any> = arr1.concat(arr2);

    return new Set<any>([...newArr]);
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); //-> [5, 1, 2, 3, 4]
console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); //-> [5, 1, 3, 4]