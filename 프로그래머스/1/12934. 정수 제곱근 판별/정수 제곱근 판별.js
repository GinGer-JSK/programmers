function solution(n) {
  let answer = -1;
  for (let x = 1; x * x <= n; x++) {
    if (x * x == n) {
      answer = (x + 1) * (x + 1);
      break;
    }
  }
  return answer;
}