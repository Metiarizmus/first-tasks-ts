/*
19)
Написать функцию persistence, которая принимает положительный параметр num и возвращает число, которое нужно умножить цифры в num, пока не дойдете до единственной цифры.

Примеры:
 persistence(39) === 3 	// because 3*9 = 27, 2*7 = 14, 1*4=4
                       			// and 4 has only one digit

 persistence(999) === 4 	// because 9*9*9 = 729, 7*2*9 = 126,
                        		// 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 		// because 4 is already a one-digit number
*/

let count: number = 0;

function persistence(num: number): number {

    if (("" + num).split("").length === 1) {
        return count;
    } else {

        let arr: Array<string> = ("" + num).split("");

        let um: number = 1;

        for (let i = 0; i < arr.length; i++) {
            um *= parseInt(arr[i])
        }

        count++;
        return persistence(um);
    }
}

console.log(persistence(999))
