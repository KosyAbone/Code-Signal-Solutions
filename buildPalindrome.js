/*

Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".

*/


function solution(st) {
    let res;
    for(let i = 0; !isPalindrome(st); i++){
       res = [...st]
       res.splice(st.length - i, 0, st[i]);
       st = res.join('');
    }
    return st
}


function isPalindrome (str){
    return str === [...str].reverse().join('')
}



