function solution(n) {
    var sum1 = 0;
    var n_string = String(n);
    
    for(var i = 0; i < n_string.length; i++) {
        if(i < Math.floor(n_string.length/2)) {
            sum1+= parseInt(n_string[i]);
        } else {
            sum1-= parseInt(n_string[i]);
        }
    }
    
    return sum1==0;
}