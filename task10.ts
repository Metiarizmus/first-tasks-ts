/*
10)
Каррирование
add(4)(3)(1) => 8
*/

// const add = (x:number) => (y:number) => (z:number) => x+y+z;
// console.log(add(4)(3)(1))

function sum(value:number) {
    let res = value;

    function foo(value2:number) {
        res += value2;
        return foo;
    }

    foo.toString = function() {
        return res;
    };
    return foo;
}


console.log(sum(1)(3)(4)(2)(10).toString());
