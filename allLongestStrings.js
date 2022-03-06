/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
*/

function solution(inputArray) {  
    const maxLength = Math.max(...inputArray.map(word => word.length))
    const newArr = inputArray.filter(word => word.length === maxLength)
    return newArr  
}