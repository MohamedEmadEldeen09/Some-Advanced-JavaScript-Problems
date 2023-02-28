//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

/*
------------------Convert HTML Entities--------------
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let entities = {
       '<' : '&lt;',
       '>' :  '&gt;',
       '&' : '&amp;',
       '"' : '&quot;',
       "'"  : '&apos;'
    }
   let newStr =  str.split('').map((piece)=>{      
        Object.keys(entities).map((key)=>{
          if(piece == key){
            piece = entities[key]
          }
        })
     return piece
    })
    return newStr.join('');
  }
console.log(convertHTML("Dolce & Gabbana"));
 

