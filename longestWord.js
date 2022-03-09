/**

Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".

*/


function solution(text) {
    const arr = text.split(/[^a-z^A-Z]/);
    const maxLength = Math.max(...arr.map(x => x.length))
    
    return (arr.filter(x => x.length === maxLength)).join('')
}