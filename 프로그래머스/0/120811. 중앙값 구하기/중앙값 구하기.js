function solution(array) {
  array.sort((a, b) => a - b);
  return array[parseInt(array.length / 2)];
}
const array = [9, -1, 1];
console.log(solution(array));
