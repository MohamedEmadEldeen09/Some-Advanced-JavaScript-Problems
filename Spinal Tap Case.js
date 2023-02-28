//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case


/*
------------Spinal Tap Case-------------
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/



function spinalCase(str) {
    str = str.trim()
    let newStr = str[0]
    str = str.split(/\s+/).join(" ")   
    console.log(str)
      for (let i = 1; i < str.length; i++) {
        if((str.charAt(i).toLowerCase() === str.charAt(i)) == false  && (/[a-z]/).test(str.charAt(i-1))){          
            newStr += " "+str.charAt(i)          
        }  
        else{
            newStr += str.charAt(i)
        }
      }   
    return newStr.split(/\W|_|\s+/).join('-').toLowerCase();
  }
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('This Is  Spinal Tap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));