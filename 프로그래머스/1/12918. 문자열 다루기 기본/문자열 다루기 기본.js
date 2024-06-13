function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
    if (s.length === 4 || s.length === 6) {
        // 각 문자가 숫자인지 확인
        for (let i = 0; i < s.length; i++) {
            if (isNaN(s[i]) || s[i] === ' ') {
                return false;
            }
        }
        return true;
    }
    return false;
}