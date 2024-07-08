function solution(numbers, direction) {
    if (direction === "left") {
        // 배열의 첫 번째 원소를 잘라내어 맨 뒤에 추가
        numbers.push(numbers.shift());
    } else if (direction === "right") {
        // 배열의 마지막 원소를 잘라내어 맨 앞에 추가
        numbers.unshift(numbers.pop());
    }
    return numbers;
}
