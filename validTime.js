/*

Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.

*/


function solution(time) {
    const splitArr = time.split(':')
    return (Number(splitArr[0]) < 24 && Number(splitArr[1] < 60)) ? true : false
}


