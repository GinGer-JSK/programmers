function solution(phone) {
  const last4 = phone.slice(-4);
  const mask = "*".repeat(phone.length - 4);
  return mask + last4;
}