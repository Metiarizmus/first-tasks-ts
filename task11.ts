/*
11)
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

    Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

    Функция getMaxSubSum(arr) должна возвращать эту сумму.

    Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»
*/

function getMaxSubSum(arr: number[]): number {

    let maxSum:number = 0;
    let sum:number = 0;

    for (let q of arr) {
        sum += q;
        maxSum = Math.max(maxSum, sum);
        if (sum < 0 ) sum = 0;
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); //= 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) //= 6
getMaxSubSum([-1, 2, 3, -9, 11]) //= 11
console.log(getMaxSubSum([-2, -1, 1, 2])); //= 3
getMaxSubSum([100, -9, 2, -3, 5]) //= 100
getMaxSubSum([1, 2, 3]) //= 6 (берём все)