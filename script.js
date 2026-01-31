let numbers = [12,20,20,1.1];
// console.log([...numbers]);
// let singleNumbers = [....new Set(numbers)]
let duplicate = [...new Set(numbers)];
console.log(duplicate);

let marks = [10,10000,1];
let cheacked = new Set(marks);
console.log(cheacked.has(10000));
console.log(cheacked.has(99));