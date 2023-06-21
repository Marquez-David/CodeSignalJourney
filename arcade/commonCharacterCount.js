function solution(s1, s2) {
    var cont = 0;
    for(var i = 0; i < s1.length; i++) {
        if(s2.includes(s1[i])) {
            cont++;
            s2 = s2.replace(s1[i], '');  
        }
    }
    return cont;
}