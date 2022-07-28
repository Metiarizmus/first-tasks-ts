/*
8)
const factory = (xValue, yValue, funcSumName) => {
...
}
const obj = factory(12, 23, 'myFunc');

console.log(obj.x, obj.y, obj.myFunc()); // 12, 23, 35
*/

interface Test {
    x: number;
    y: number;
    [name: string]: number;
}

class TestClass implements Test{
    x: number;
    y: number;
    [name: string]: any;

    constructor(x: number, y: number, name:string) {
        this.x = x;
        this.y = y;
        this[name] = () => this.sum();
    }

    sum(): number {
        return this.x + this.y;
    }
}

const factory = (xValue: number, yValue: number, funcSumName: string) => {
    return new TestClass(xValue, yValue, funcSumName);
}

const obj = factory(12, 23, 'myFunc');

 console.log(obj.x, obj.y, obj.myFunc()); // 12, 23, 35