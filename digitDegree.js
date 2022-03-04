/*
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be
solution(n) = 0;
For n = 100, the output should be
solution(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
solution(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
*/



function solution(n) {
    let count = 0
    let sum = 0;
    if(n < 10){
        return 0
    }
    sum = sumArr(n)
    count = 1
    while(sum > 9){
        sum = sumArr(sum)
        count++
    }
    return count
}

function sumArr(num){
    const str = String(num).split('');
    const numArr = str.map(item => parseInt(item));
    return numArr.reduce((a,b) => a + b);
}
