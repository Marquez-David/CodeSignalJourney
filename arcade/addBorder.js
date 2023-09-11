function solution(picture) {
    picture.push('*'.repeat(picture[0].length))
    picture.unshift('*'.repeat(picture[0].length));
    for(var i = 0; i < picture.length; i++){
        picture[i] = '*' + picture[i] + '*';
    }
    
    return picture;
}