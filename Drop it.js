//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it



/*
----------------Drop it--------------
Given the array arr, iterate through and remove 
each element starting from the first element (the 0 index) until 
the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.
*/


function dropElements(arr, func) {
    let PassElements = [] 
    for (let i = 0; i < arr.length; i++) {       
        if(func(arr[i])){PassElements.push(arr[i])}
    }
    return PassElements;
  }
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));