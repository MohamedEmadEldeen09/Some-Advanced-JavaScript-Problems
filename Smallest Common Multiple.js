//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple



/*
---------------------Smallest Common Multiple---------------------
Find the smallest common multiple of the provided 
parameters that can be evenly divided by both, as well 
as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not 
necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common 
multiple of both 1 and 3 that is also evenly divisible by all 
numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    arr.sort((a,b) => a-b)
    let x =  arr[1] * 2
    let isS = false
    while (!isS) {
         let Acieved = true
         for (let i = arr[0]; i <= arr[1]; i++) {         
           if(x%i != 0){
             Acieved = false
             break
           }
         }   
         if(Acieved){isS = true}
         else{x = x+1}
 
    }
     return x;
   } 
 console.log( smallestCommons([23, 18]));