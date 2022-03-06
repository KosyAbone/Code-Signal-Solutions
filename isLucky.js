/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
*/



function solution(n) {
    const newN = String(n)
    
    const firstHalf = newN.substring(0, newN.length/2)
    const secondHalf = newN.substring(newN.length/2)
    let firstSum = 0, secondSum = 0
    
    for(let i = 0; i < firstHalf.length; i++){
        firstSum = firstSum + +(firstHalf[i]) //the 2nd '+' is same as using parseInt/Number to convert string to a number...
        secondSum = secondSum + +(secondHalf[i])
    }
    return firstSum === secondSum ? true : false
}
