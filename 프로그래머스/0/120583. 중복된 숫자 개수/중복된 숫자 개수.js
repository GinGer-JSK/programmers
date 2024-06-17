function solution(array, n) {

    let count = [];
    for (let i = 0; i < array.length; i++)
        {
            if(array[i] === n){
                count.push(array[i]);
            }
            }
    return count.length;
        }