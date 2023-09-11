function solution(inputString) {
    return inputString.split('').map(elem => elem.charCodeAt() === 122 ? 'a' : String.fromCharCode(elem.charCodeAt()+1)).join('');
}
