/**

Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.

*/


function solution(product) {
    if(product === 0) return 10;
    if(product === 1) return 1;
    let factors = [];
    for(let i = 9; i > 1; i--){
        while(product%i === 0){
            factors.unshift(i);
            product /= i;
        }
    }
    return product > 1 ? -1 : Number(factors.join(''));
}