/*
12)
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

function camelize(name: string): string {

    let arr: Array<string> = name.split("");

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] === '-') {
            arr[i - 1] = '';
            arr[i] = arr[i].toUpperCase();
        }
    }

    // @ts-ignore
    return arr.join("").replaceAll("-", "");
}


console.log(camelize("background-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition---")); //== 'WebkitTransition';