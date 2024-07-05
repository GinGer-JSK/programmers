function solution(my_str, n) {
    // 결과를 저장할 배열 선언
    let result = [];
    
    // 문자열을 n 길이씩 자르기 위해 반복문 사용
    for (let i = 0; i < my_str.length; i += n) {
        // 문자열을 i부터 i+n까지 자르고 배열에 추가
        result.push(my_str.slice(i, i + n));
    }
    
    // 결과 배열 반환
    return result;
}