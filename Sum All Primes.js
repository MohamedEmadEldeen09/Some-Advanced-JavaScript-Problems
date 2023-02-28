//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

/*
----------------Sum All Primes-----------------
A prime number is a whole 
number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 
and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that 
are less than or equal to num.
*/



function sumPrimes(num) {
    switch(num){
    case 1 :
    case 0 :    
        return 0;
        break  
    case 2 :    
        return 2;
        break   
    }
    let primeNumbers = [2]
    for(let i = 3 ; i<= num ; i = i+2){
        let isPrime = true;
        for (let x = 2; x < i; x++) {
            if(i%x ==0){
               isPrime = false;
            }           
        }
        if(isPrime){primeNumbers.push(i)}     
    }   

    let sum = primeNumbers.reduce((prev , current)=>prev + current );
    return sum

  }
  
console.log(sumPrimes(10));