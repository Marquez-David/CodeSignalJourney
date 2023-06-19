function solution(matrix) {
    var sum = 0;
    for(var column = 0; column < matrix[0].length; column++){
        for(var row = 0; row < matrix.length; row++) {
            if(matrix[row][column] === 0){
                break;
            } else {
                sum += matrix[row][column];
            }
        }
    }
    return sum;
}