function solution(name) {
    const regex = new RegExp(/^[a-z_]\w*$/i);
    return regex.test(name);
}