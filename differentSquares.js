/** 

Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1

*/



function solution(matrix) {
    let smallSquares = [];
    var value = "";
  
    for(let i = 0; i < matrix.length - 1; i++){
        
      for(let j = 0; j < matrix[i].length - 1; j++){
          value = (`${matrix[i][j]}${matrix[i][j+1]}${matrix[i+1][j]}${matrix[i+1][j+1]}`)
          if(!smallSquares.includes(value)){
              smallSquares.push(value);
          }
      }
    }
    
    return smallSquares.length;
  }