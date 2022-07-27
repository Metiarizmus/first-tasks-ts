/*
17)
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(arr: Array<any>): Set<any> {

    arr = arr.map(x => parseInt(x)).filter(x => !isNaN(x));

    let set = new Set<any>();
    arr.forEach(x => set.add(x));
    return set;
}

console.log(filter_list([1,2,'aasf','1','123',123]))
console.log(filter_list([1, 'a', 'b', 0, 15]));