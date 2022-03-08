/*

Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters.
For example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character.
For example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.

*/


function solution(s){
    const arr = [];
    let str = ''
    
    for(let i = 0; i < s.length; i++){
        str += s[i];
        if(s[i+1] != s[i]){
            arr.push(str);
            str = '';
        }
    }
    const res = arr.map(x => x.length == 1 ? x : `${x.length}${x[0]}`)
    return res.join('')
}
