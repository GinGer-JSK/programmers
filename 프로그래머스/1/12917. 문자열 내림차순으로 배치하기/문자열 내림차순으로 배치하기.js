function solution(s) {
  // 대문자와 소문자를 분리하여 각각 정렬
  let upperChars = [];
  let lowerChars = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperChars.push(s[i]);
    } else {
      lowerChars.push(s[i]);
    }
  }
  
  // 대문자와 소문자를 각각 내림차순으로 정렬
  upperChars.sort((a, b) => b.localeCompare(a));
  lowerChars.sort((a, b) => b.localeCompare(a));
  
  // 대문자와 소문자를 합쳐서 반환
  return lowerChars.concat(upperChars).join('');
}
