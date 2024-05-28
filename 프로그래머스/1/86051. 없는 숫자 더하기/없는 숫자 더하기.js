function solution(num) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!num.includes(i)) {
      answer += i;
    }
  }
  return answer;
}
