/*
22)
Написать ф-ию, которая принимает 3 целочисленных значения a, b, c. Ф-ия должна возвращать true,
сли треугольник можно построить со сторонами заданной длины, и false в любом другом случае.

Примеры:
isTriangle(1,2,2)	// true
isTriangle(7,2,2)	// false

*/

const isTriangle = (a: number, b: number, c: number): boolean => (a < b + c) && (b < a + c) && (c < a + b);

console.log(isTriangle(1, 2, 2))