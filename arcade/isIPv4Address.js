function solution(inputString) { 
    
    const valid = inputString.split('.').every(str => {
        if(str.length > 1 && str.startsWith('0')) {
            return false;
        } else {
            return str != '' && Number(str) <  256;
        }    
    });
    
    return  inputString.split('.').length === 4 && valid;
}