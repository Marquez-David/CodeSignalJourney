function solution(a, b) {
    var cont = 0;
    
    for(var i = 0; i < a.length; i++) {
        if(a[i] != b[i]) {
            cont++; 
        }
    }
    return cont <= 2 && a.sort(function(a,b){return a - b}).toString() == b.sort(function(a,b){return a - b}).toString();
}