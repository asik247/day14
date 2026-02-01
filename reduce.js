let array = [1,2,3,34,45,6];
const red = array.reduce((acc,curr)=>{
   return acc + curr
},0);
console.log(red);

// reduce an arry 
let numbers = [1,2,3,33,33,56];
const reduce = numbers.reduce(function(acc,curr){
      return acc + curr;
       
},0)
console.log(reduce);

// short from code here:
let re = numbers.reduce((acc,curr)=>acc+curr,0);
console.log(re);
/**
 *Syntax reduce 
 reduce(callbackFunction,initilise)
 [].reduce((acc,curr){
    return acc + curr;
 },0)
  */ 



//  reduce code here:
/**
 * Syntax: [].reduce(callback,initilise):
 */
let marks = [1,2,333,45,6,56,54];
let reduceResutl = marks.reduce(function(acc,curr){
    return acc + curr;
},5)
console.log("reduceResutl here:",reduceResutl);

// 0 + 1 = 1,1+2 = 3, 3 + 333 = 336,336 + 45 = ?

/**
 * firstThurded = 100;
 * secondThurded = 90;
 * thirdThurded = 70;
 */
const discoundedPrice = (quentity)=>{
   if(quentity <= 100){
      let firstTotal = quentity * 100;
      return firstTotal;
   }
   else if (quentity <=200){
      let firstTotal = 100 * 100;
      let remining = quentity - 100; 
      let reminingTotal = remining * 90;
      let total = firstTotal + reminingTotal;
      return total
   }else{
      let firstTotal = 100 * 100;
      let scondTotal = 100 * 90;
      let remining = quentity - 200;
      let reminingTotal = remining * 70;
      let total = firstTotal + scondTotal + reminingTotal;
      return total
   }
}
let result = discoundedPrice(201);
// console.log(result);

// 100

const layerdDiscount = (quentity)=>{
   const first100 = 200;
   const second100 = 150;
   const third100 = 100;
   if (quentity <= 100){
      let first100Total = quentity * first100;
      return first100Total;
   }else if(quentity <= 200){
      let second100Total = 100 * first100;
      let second100Reminig = quentity - 100;
      let second100ReminigTotal = second100Reminig * second100;
      let total = second100Total + second100ReminigTotal;
      return total;
   }else{
      let third100Total = 100 * first100;
      let third100Total2 = 100 * second100;
      let third100Reminig = quentity - 200;
      let third100ReminigTotal = third100Reminig * third100;
      let total = third100Total + third100Total2 + third100ReminigTotal;
      return total;
   }
}
// console.log(layerdDiscount(100));
let result2 = layerdDiscount(500);
console.log(result2);