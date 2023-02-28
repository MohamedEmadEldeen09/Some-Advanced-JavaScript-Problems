//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing


/*
--------------------DNA Pairing--------------------
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented
by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to 
match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are 
grouped into one encapsulating array.
*/

function pairElement(str) {  
    let pairs = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }
    let answer = []
      str.split('').filter((c)=>{
        let tempArray = []
        if(pairs.hasOwnProperty(c)){
            tempArray.push(c)
            tempArray.push(pairs[c])
            console.log(tempArray)
        }    
        if(tempArray.length>0){
            answer.push(tempArray)
        }        
    }); 
    return answer
  } 
console.log(pairElement("GCG"));