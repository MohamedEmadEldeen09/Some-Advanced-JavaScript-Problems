//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers


/*
-----------------Sum All Odd Fibonacci Numbers----------------------
Given a positive integer num, return the sum of all odd 
Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every 
additional number in the sequence is the sum of the two previous numbers. 
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci 
numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {
    let FebNumbers = [0 , 1]
    let i = 0 ;
    while(FebNumbers[FebNumbers.length-1] <= num){
       if(FebNumbers[i-1] + FebNumbers[i-2] <= num){
          FebNumbers.push(FebNumbers[i-1] + FebNumbers[i-2])
       }   
       i++;
    }
     let AllOdds = FebNumbers.filter((n)=>{
      return  n %2 !=0
    })
 
    return AllOdds.reduce((prev , current)=>{
      return prev + current
    })
  }
console.log(sumFibs(4));