/*
3)
Реализовать функцию forEachRight
Первый аргумент - массив, второй - функция, применяется на массив в обратном порядке

Пример:
    Результатом работы функции forEachRight,
    будет вывод элементов массива в обратном порядке в консоль.
    Одно значение - один вывод (построчно)

forEachRight([1, 2, 3, 4], val => console.log(val)); -> в консоль 4 3 2 1
 */

function forEachRight(arr: Array<any>, fun: (val:any) => any):Array<any> {

    return arr.reverse().map(fun);
}

forEachRight([1, 2, 3, 4], val => console.log(val));

