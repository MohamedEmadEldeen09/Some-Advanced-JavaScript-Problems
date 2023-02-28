//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

/*
-------------Binary Agents-------------
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

function binaryAgent(str) {
    let decimalsValuess = []  
    let arr = str.split(' ')
    for (let i = 0; i<arr.length; i++) {
        let power = 0 ;
        let code = 0;
        for (let j = arr[i].length - 1; j >= 0; j--) {
            if(arr[i][j] == '1'){
                code+= (Math.pow(2 , power))
            }             
            power++;  
        }  
        decimalsValuess.push(code)             
    }
    console.log(decimalsValuess)
    let stringFromCode = decimalsValuess.map(val => String.fromCharCode(val)).join('')
    return stringFromCode;
  }
console.log(binaryAgent(`01000001 01110010 01100101 01101110 00100111 
01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 
00100000 01100110 01110101 01101110 00100001 00111111`));