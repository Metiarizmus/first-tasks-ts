/*
23)
Вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.

Примеры:
getMiddle("test") 	// should return "es"
getMiddle("testing") 	// should return "t"
getMiddle("middle") 	// should return "dd"
getMiddle("A") 	// should return "A"
*/

function getMiddle(str: string): string {

    if(str.length % 2 === 0) {
        return str.substring(str.length/2-1, str.length/2+1);
    }else {
        return str.substring(((str.length+1)/2)-1,((str.length+1)/2));
    }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("A"))
console.log(getMiddle("middle"))
