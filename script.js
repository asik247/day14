let numbers = [12, 20, 20, 1.1];
// console.log([...numbers]);
// let singleNumbers = [....new Set(numbers)]
let duplicate = [...new Set(numbers)];
console.log(duplicate);

let marks = [10, 10000, 1];
let cheacked = new Set(marks);
console.log(cheacked.has(10000));
console.log(cheacked.has(99));
/*
duplicate remove use (new Set function)
has ar kaj
*/
const firendsNames = ['khan', 'jamal', 'komal', 'kadduse', 'bulbanue'];
const result = Math.ceil(Math.random() * firendsNames.length)
console.log(firendsNames[result]);

/**
 *  ceil use kore sequer na array thake random e value access korete  onek somoi index = length hoye jai and undifind show kore tai floor use korete hoy  

 * */
const firendsNames2 = ['khan', 'jamal', 'komal', 'kadduse', 'bulbanue'];
const result2 = Math.floor(Math.random() * firendsNames2.length)
console.log(firendsNames[result2]);

let total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total2 = Math.random() *10;
// console.log(total2);
let total3 = Math.floor(Math.random() * total.length)
console.log(total[total3]);

/**
 * 1.Math.ceil 4.999 k 5 kore
 * 2.Math.floor 4.999 k 4 kore
 */

// new Date start:
let functionDay = new Date();
let day = functionDay.getDay();
let minute = functionDay.getMinutes()
let date = functionDay.getDate();
// let day = functionDay.getDay();
console.log(day);
console.log(minute);
console.log(date);
// Swap and temp use code start hre:
let a = 5;
let b = 15;
let temp = a;
a = b;
b = temp;
// let ab = temp = b;
console.log(a, b);

let myName = "Asik";
let xName = "kahn"

let temp2 = myName;
myName = xName;
xName = temp2;
console.log(myName, xName);
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let tempOne = one;
let tempThree = three;
one = two;
two = tempOne;
three = four;
four = tempThree;
console.log(one, two, three, four);

/**
 * Swap use hoy দুইটা variable-এর value একে অপরের সাথে বদলানো
 * temp - > Temporary variable use korbo amera:
 * [a,b] = [b,a] kore jai
 */
// Max output a show kore: code hre:
// Way no:01
const nadiya = 55;
const shohan = 44;
if (nadiya > shohan) {
    console.log("Nadiya can big number:", nadiya);
} else {
    console.log("shohan can big number:", shohan);
}
// Way no: 02;
const getMax = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2
    }
}
console.log(getMax(10, 11));
// use getMax:
const max = getMax(111, 252);
console.log(max);
// use Math.max:
const max2 = Math.max(10, 20, 25, 58);
console.log(max2);
/**
 * Math.max = ready-made tool
getMax = নিজের বানানো logic
কখন কোনটা use করবে?
✔ Math.max() ব্যবহার করো যখন:

Simple number compare

Quick solution দরকার

Small/medium data

✔ getMax() বানাও যখন:

Condition দরকার (even max, odd max)

Object থেকে max বের করা

Learning purpose

Interview logic explain
 */
// Who is the tollest code start here:
let height = [65, 75, 45, 66, 78, 78, 68];
let tollest = Math.max(height);
console.log(tollest);
// output NaN because Math.max array nite pare na:

// loop use:
let manHeight = [58, 85, 99, 73, 145, 787, 14525];
const getTollest = (heightInc) => {
    let firstInch = heightInc[0]
    console.log(firstInch);
    for (let h of heightInc) {
        if (h > firstInch) {
            firstInch = h;
        }
    }
    return firstInch;
}
console.log(getTollest(manHeight));