function solution(inputString) {
    var cont = 0;
    var revisados = [];
    for(var i = 0; i < inputString.length; i++) {
        if((inputString.split(inputString[i]).length-1) % 2 != 0 && !revisados.includes(inputString[i])){
            cont++;
            revisados.push(inputString[i]);
        }
    }
    return cont < 2;
}