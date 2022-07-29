/*
12)
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

function camelize(name: string): string {
    let in2:number;

    return name.split('')
        .map((x, index, array) => {
            if (x==='-') {
                in2 = index;
                return x = array[index+1].toUpperCase()
            }else{
                if (in2+1 != index)
                return x;
            }
        })
        .filter(x => x !== '-')
        .join("")
}

console.log(camelize("background-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition")); //== 'WebkitTransition';