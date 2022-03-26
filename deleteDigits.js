/*

Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.

*/


function solution(n) {
    const arr = [...String(n)].map(i => Number(i))
    console.log(arr.join(''))
    let largest = -1;
    for(let i = 0; i < arr.length; i++){
        const copy = arr.slice()
        copy.splice(i,1)
        const num = copy.join('')
        largest = Math.max(largest, num)
    }
    return largest
}
