function solution(a) {
    var aux = a.filter(num => num > -1).sort(function(a,b){return a - b;});
    console.log(aux.toString());
    for(var i = 0; i < a.length; i++){
        if(a[i] != -1){
            a[i] = aux.shift();
        }
    } 
    return a; 
}