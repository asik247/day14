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