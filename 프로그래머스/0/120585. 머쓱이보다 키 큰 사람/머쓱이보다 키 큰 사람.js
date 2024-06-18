function solution(array, height) {
  var answer = [];
  for (i = 0; i <= array.length; i++) {
    if (array[i] > height) {
      answer.push(array[i]);
    }
  }
  return answer.length;
}