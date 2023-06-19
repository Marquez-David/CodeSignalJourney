function solution(inputArray) {
    var cont = 0;
    for(var i = 1; i < inputArray.length; i++) {
        if(inputArray[i] < inputArray[i-1]) {
            cont += inputArray[i-1] - inputArray[i] + 1;
            inputArray[i] += inputArray[i-1] - inputArray[i] + 1;
        } else if(inputArray[i] === inputArray[i-1]) {
            cont ++;
            inputArray[i] ++;
        }
    }
    
    return cont;
}