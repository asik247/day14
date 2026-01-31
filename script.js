let numbers = [12,20,20,1.1];
// console.log([...numbers]);
// let singleNumbers = [....new Set(numbers)]
let duplicate = [...new Set(numbers)];
console.log(duplicate);

let marks = [10,10000,1];
let cheacked = new Set(marks);
console.log(cheacked.has(10000));
console.log(cheacked.has(99));
/*
duplicate remove use (new Set function)
has ar kaj
*/
const firendsNames = ['khan','jamal','komal','kadduse','bulbanue'];
const result = Math.ceil(Math.random() * firendsNames.length)
console.log(firendsNames[result]);

/**
 *  ceil use kore sequer na array thake random e value access korete  onek somoi index = length hoye jai and undifind show kore tai floor use korete hoy  

 * */
const firendsNames2 = ['khan','jamal','komal','kadduse','bulbanue'];
const result2 = Math.floor(Math.random() * firendsNames2.length)
console.log(firendsNames[result2]);

let total = [1,2,3,4,5,6,7,8,9,10];
// let total2 = Math.random() *10;
// console.log(total2);
let total3 = Math.floor(Math.random() * total.length)
console.log(total[total3]);

/**
 * 1.Math.ceil 4.999 k 5 kore
 * 2.Math.floor 4.999 k 4 kore
 */