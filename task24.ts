/*
24)
Дан массив чисел. Необходимо отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.

Примеры:
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function mySort(arr:number[]) : number[]{

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {

            if (arr[i]%2 !==0 && arr[j]%2 !==0 && arr[i]>arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j]=tmp;
            }
        }
    }

    return arr;
}

console.log(mySort([5, 8, 6, 3, 4]))