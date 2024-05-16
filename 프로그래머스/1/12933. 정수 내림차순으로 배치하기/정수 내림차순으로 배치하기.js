function solution(n) {
  let arr = [];
  arr.push(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  return +arr;
}
