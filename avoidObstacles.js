function solution(inputArray) {
    for(var i = 1; i <= Math.max(...inputArray)+1; i++) {
        if(!inputArray.some(num => num % i === 0)) {
            return i;    
        }
    }
}
