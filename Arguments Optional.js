//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

/*
----------------Arguments Optional----------------
Create a function that sums two arguments together. If 
only one argument is provided, then return a function that 
expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, 
and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
*/

function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (arguments.length === 1)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }
console.log(addTogether(2,2));
console.log(addTogether(7)(5));