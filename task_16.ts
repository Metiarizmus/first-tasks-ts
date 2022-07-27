/*
16)
Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми словами из X и более букв (X — второй параметр ф-ии)..
Переданные строки будут состоять только из букв и пробелов.

Examples:
spinWords( "Hey fellow warriors", 5 ) => returns "Hey wollef sroirraw"
spinWords( "This is a test", 10) => returns "This is a test"
spinWords( "This is another test", 3 )=> returns "sihT is rehtona tset"
*/

function spinWords(str: string, count: number): string {

    let arr: Array<string> = str.split(" ");
    let newArr: Array<string> = []
    for (let q of arr) {
        if (q.length >= count) {

            newArr.push(q.split("").reverse().join(""));
        } else {
            newArr.push(q);
        }
    }

    return newArr.join(" ");
}

console.log(spinWords("Hey fellow warriors", 5));