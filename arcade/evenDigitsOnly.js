function solution(n) {
    return String(n).split('').every((index) => index % 2 === 0);
}