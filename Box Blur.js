function solution(image) {
    var bigArray = [];
    for(let i = 0; i + 3 <= image.length; i++) {
        let array = [];
        for(let j = 0; j + 3 <= image[i].length; j++) {
            array.push(Math.trunc((image[i][j] + image[i+1][j] + image[i+2][j] + image[i][j+1] + image[i+1][j+1] + image[i+2][j+1] + image[i][j+2] + image[i+1][j+2] + image[i+2][j+2])/9));   
        }
        bigArray.push(array);
    }
    
    return bigArray;
}
