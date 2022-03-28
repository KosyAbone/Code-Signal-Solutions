/*

Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

*/


function solution(inputString) {
    let obj = {}
    let evenCount = 0
    let oddCount = 0
    
        for(let x = 0; x < inputString.length; x++){
            if(obj[inputString[x]])
                obj[inputString[x]] += 1
            else
                obj[inputString[x]] = 1
        }
        for(let x of Object.values(obj)){
            x % 2 === 0 ? evenCount++ : oddCount++ 
        }
        return oddCount > 1 ? false : true
    }
    