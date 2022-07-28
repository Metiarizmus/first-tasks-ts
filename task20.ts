/*
20)
Создать функцию с именем divisors / Divisors, которая принимает целое число n> 1 и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа),
от наименьшего до наибольшего. Если число простое, вернуть строку '(integer) is prime'.

Примеры:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/

function divisors(num:number): Array<number> | string {

    let arr: Array<number> = [];

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    if (arr.length === 0) {
        return num + ' is prime';
    }

    return arr;
}

console.log(divisors(12))
console.log(divisors(25))
console.log(divisors(11))