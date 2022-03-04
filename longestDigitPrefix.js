/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".
*/


function solution(inputString) {
    let prefix = ""
    for(let x of inputString){
        if(!isNaN(x) && x != " ")
            prefix += x
        else
            break
    }
    return prefix
}
