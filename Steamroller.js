//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller


/*
----------Steamroller---------
Flatten a nested array. You must account for varying levels of nesting.
Note : Your solution should not use the Array.prototype.flat() 
       or Array.prototype.flatMap() methods.
       And Global variables should not be used.
*/


function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([ 78 , [32 ,21] , [[8] , 3] , {}]));

