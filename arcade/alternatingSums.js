function solution(a) {
    return [a.filter((_, index) => index % 2 === 0).reduce((a, b) => a + b, 0), a.filter((_, index) => index % 2 != 0).reduce((a, b) => a + b, 0)];
}