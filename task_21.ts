/*
21)
Дана строка. Вернуть длину самого короткого слова
Пример:
getLengthOfShortestWord(‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.’) 	// => 2
*/

function getLengthOfShortestWord(str:string):number {

    str = str.replace(/[\W]+/g,' ');

    let arr:Array<string> = str.split(" ");

    let minLength:number = arr[0].length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "" && arr[i].length < minLength) {
            minLength = arr[i].length;
        }
    }

    return minLength;

}

console.log(
    getLengthOfShortestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
)