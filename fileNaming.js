/*

You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

*/



function solution(names) {
    const unique = []
    names.forEach(i => {
        if(!unique.includes(i))
            unique.push(i);
        else{
            let k = 1
            while(true){
                if(unique.includes(`${i}(${k})`))
                    k++;
                else{
                    unique.push(`${i}(${k})`);
                    break;
                }
            }
        }
    })
    return unique;
}