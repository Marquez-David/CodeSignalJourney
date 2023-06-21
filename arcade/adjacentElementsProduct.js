function solution(inputArray) {
    
    var maxProduct = inputArray[0] * inputArray[1];
    
    for (let i = 0; i < inputArray.length-1; i++) {
        if(inputArray[i] * inputArray[i+1] > maxProduct) {
            maxProduct = inputArray[i] * inputArray[i+1];
        }
    }
    return maxProduct;
}
