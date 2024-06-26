function solution(cipher, code) {
    let result = '';
    // code - 1부터 시작해서 code씩 증가
    for (let i = code - 1; i < cipher.length; i += code) {
        result += cipher[i];
    }
    return result;
}