function solution(a, b) {
    let dotProduct = 0; // 내적 결과를 저장할 변수

    // 모든 요소에 대해 내적을 계산
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
    }

    return dotProduct; // 최종 내적 결과 반환
}
