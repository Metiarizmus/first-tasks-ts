/*
15)
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
*/

function sumTo(n: number): number {
    let sum: number = 0;

    try {
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
    } catch (e) {
        console.error("the number must be positive");
    }

    return sum;
}

console.log(sumTo(-1));