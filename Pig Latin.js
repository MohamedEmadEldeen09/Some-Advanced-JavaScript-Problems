//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin


/*
-------------------Pig Latin-----------------
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or 
consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed 
to be English words in all lowercase.
*/

function translatePigLatin(str) {
    if((/^[aieuo]/i).test(str)){
      return str+"way";
    }
    if((/^[^aieou]+/gi).test(str)){
       let firstCut = str.match(/^[^aieou]{1,}/gi).join("")
       //console.log(firstCut)   
       let theWordCutton =  str.slice(firstCut.length)
       return theWordCutton+firstCut+"ay"
    }
    return str;
  }
console.log(translatePigLatin("cgonsonant"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))