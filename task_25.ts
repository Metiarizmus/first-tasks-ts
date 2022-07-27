/*
25)
Написать функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов и числовых цифр,
которые встречаются во входной строке более одного раза. Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и цифры.

Примеры
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function getCountRepeatableSymbols(str: string):number{

    let arr:Array<string> = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if(str[i].toLowerCase()===str[j].toLowerCase()) {
                arr.push(str[j]);
            }
        }
    }

    let set = new Set<string>()
    arr.forEach(x => set.add(x));
    return set.size;
}

console.log(getCountRepeatableSymbols("indivisibility")) //1
console.log(getCountRepeatableSymbols("Indivisibilities")) //2
console.log(getCountRepeatableSymbols("abcde")) //0
console.log(getCountRepeatableSymbols("aA11")) //2