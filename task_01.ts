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

// npx ts-node task_01.ts
function any(arr: Array<any>, fun?: (x: any) => boolean): boolean {

    for (let q of arr) {
        if (fun !== undefined) {
            if (fun(q)) {
                return true;
            }
        } else {
            if (Boolean(q)) {
                return true;
            }
        }
    }

    return false;
}

console.log(any([0, 1, 2, 0], x => x >= 2));
console.log(any(['1', '2', '3',''], x => x === '4'))
console.log(any([0, 0, 1, 0]));
console.log(any([0, 0, ' ', 0]));