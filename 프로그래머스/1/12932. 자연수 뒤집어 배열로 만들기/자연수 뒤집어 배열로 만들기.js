function solution(n) {
  var answer = [];
  answer = n.toString().split("").reverse();
  return answer.map(Number);
}   