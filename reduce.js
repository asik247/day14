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
      
   }
}