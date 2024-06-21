function solution(money) {
    var answer = [];

    var count = Math.floor(money / 5500);
    var don = money % 5500;
    console.log(count, don);
    answer.push(count, don);
    return answer;
}