function solution(inputArray) {
    
    var max = 0;
    for(var i = 1; i < inputArray.length-1; i++) {
        max = Math.max(Math.abs(inputArray[i-1] - inputArray[i]), Math.abs(inputArray[i] - inputArray[i+1]), max);
    }
    
    return max;
}
