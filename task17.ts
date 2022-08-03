/*
17)
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

import {isNumber} from "util";

function filter_list<T>(arr: T[]): T[] {
    return arr.filter(x => isNumber(x))
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))
console.log(filter_list([1, 'a', 'b', 0, 15]));
