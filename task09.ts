/*
9)
const obj = {
    id: 0,
    name: 'Obj-name',
    // ...
};

console.log(`Name: ${obj}`); 		// Name: Obj-name
console.log(+obj);            		// 0
console.log(obj + 10);        		// 10
*/


const obj = {
    id:  0,
    name: 'Obj-name',

    toString() {
        return this.name;
    },

    valueOf() {
        return this.id;
    }
};

console.log(`Name: ${obj}`);
console.log(+obj);
// @ts-ignore
console.log(obj + 10);