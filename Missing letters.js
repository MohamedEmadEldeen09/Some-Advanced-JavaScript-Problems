//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters


/*
-------------Missing letters---------------
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let allLetters = 'abcdefghijklmnopqrstuvwxyz'
    let indexOfFirst  = allLetters.indexOf(str.charAt(0))
    let cut = allLetters.slice(indexOfFirst , indexOfFirst+str.length) 
    let def = ''
    let isS = cut.split('').every((c , i)=>{
       def = c;
       return c.toLowerCase() == str.charAt(i).toLowerCase()
    })
    return def != str.charAt(str.length-1) ? def : undefined ;
  }
 console.log(fearNotLetter("abce"))
 console.log(fearNotLetter("abcdefghjklmno"))
 console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))