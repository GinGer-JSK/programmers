function solution(a, b) {
  let answer = 0;
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    answer += i;
  }
  return answer;
}