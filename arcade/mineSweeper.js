function solution(matrix) {
    var solucion = [];
    for(var i = 0; i < matrix.length; i++){
        var aprox = [];
        for(var j = 0; j < matrix[i].length; j++) {            
            if(j === 0 && i === 0) { // TOP LEFT
                aprox.push(matrix[i+1][j] + matrix[i+1][j+1] + matrix[i][j+1]);
            } else if(i === matrix.length-1 && j === matrix[i].length-1) { // BOTTOM RIGTH
                aprox.push(matrix[i-1][j] + matrix[i-1][j-1] + matrix[i][j-1]);
            } else if(i === 0 && j === matrix[i].length-1) { // TOP RIGTH
                aprox.push(matrix[i][j-1] + matrix[i+1][j-1] + matrix[i+1][j]);
            } else if(i === matrix.length-1 && j === 0) { // BOTOM LEFT
                aprox.push(matrix[i-1][j] + matrix[i-1][j+1] + matrix[i][j+1]);
            } else if (j === 0) { // LEFT LIMIT
                aprox.push(matrix[i-1][j] + matrix[i-1][j+1] + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1]);
            } else if (j == matrix[i].length-1) { // RIGTH LIMIT 
                aprox.push(matrix[i-1][j] + matrix[i-1][j-1] + matrix[i][j-1] + matrix[i+1][j] + matrix[i+1][j-1]);
            } else if (i === 0) { // TOP LIMIT
                aprox.push(matrix[i][j-1] + matrix[i+1][j-1] + matrix[i+1][j] + matrix[i+1][j+1] + matrix[i][j+1]);
            } else if (i === matrix.length-1) { // BOTTOM LIMIT
                aprox.push(matrix[i][j-1] + matrix[i-1][j-1] + matrix[i-1][j] + matrix[i-1][j+1] + matrix[i][j+1]);
            } else { // NO LIMITS
                aprox.push(matrix[i-1][j-1] + matrix[i-1][j] + matrix[i-1][j+1] + matrix[i][j-1] + matrix[i][j+1] + matrix[i+1][j-1] + matrix[i+1][j] + matrix[i+1][j+1]);
            }
            
        }
        
        solucion.push(aprox);
        
    }
    return solucion;
}
