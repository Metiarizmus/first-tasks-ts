/*
12)
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

function camelize(name: string): string {

    return name.split("-").map((s, index) => {
        if (index != 0) {
            s = s[0].toUpperCase() + s.slice(1);
            return s;
        }
        return s;
    }).filter(s => s!='').join('')

}

console.log(camelize("background-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition")); //== 'WebkitTransition';