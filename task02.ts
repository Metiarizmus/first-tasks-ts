/*
Функция принимает 2 массива.
    Возвращает новый массив, который состоит только из тех элементов,
    которые встретились в одном массиве, но не встретились в другом

console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']
 */

function arrayDiff(arr1: Array<any>, arr2: Array<any>):Array<any> {

    let newArr: Array<any> = arr1.concat(arr2);

    newArr.sort()

    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] === newArr[i-1]) {
            newArr = newArr.filter(x => (x!==i && x!==(i+1)))
        }
    }

    return newArr;
}

//console.log(arrayDiff([1, 2, 3], [1, 2, 4])); //-> [3, 4]
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); //-> [4, '4']
