/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/



function solution(picture) {
    const asterix = '*'.repeat(picture[0].length + 2);
    
    return [
      asterix,
      ...picture.map(str => `*${str}*`),
      asterix,
    ];
  }
  
