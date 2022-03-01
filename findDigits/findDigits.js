function solution(inputString) {
    return [...inputString].find(item =>item != ' ' && !isNaN(item))
}

console.log(solution("h e2llo"));