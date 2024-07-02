function solution(str) {
    let answer = 0;
    const num = str.split("");
    for(let i=0; i<num.length; i++){
        if (Number(num[i]))
        {
            answer = answer + Number(num[i]);
        }
    }
    return answer;
}