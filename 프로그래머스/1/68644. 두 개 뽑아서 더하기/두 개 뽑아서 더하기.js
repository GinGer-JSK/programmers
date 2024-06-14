function solution(numbers) {
    // 빈 배열 answr를 만든다.
    var answer = [];
    // 반복문을 이용하여 i는 0부터 numbers 배열의 길이-1까지 돌린다.
    for ( let i = 0; i < numbers.length; i++) {
        // 반복문을 이용하여 j는 i+1부터 numbers 배열의 길이-1까지 돌린다.
      for ( let j = i + 1; j < numbers.length; j++) {
          // numbers[i]와 numbers[j]를 더한 값을 sum에 저장한다.
        let sum = numbers[i] + numbers[j];
          // indexof 를 사용하여 answr에 sum이 없다면(-1)
        if( answer.indexOf(sum) === -1) {
            // answr에 sum을 저장한다.
          answer.push(sum);
        }
      }
    }
    // answer 를 오름차순으로 정렬한다.
    answer.sort(function(a,b) {
      return a - b;
    })
    return answer;
}