function solution(inputArray) {
    var myLongestArray = [inputArray[0]];
    for(var index = 1; index < inputArray.length; index++) {
        if(myLongestArray[0].length == inputArray[index].length) {
            myLongestArray.push(inputArray[index]);
        } else if(myLongestArray[0].length < inputArray[index].length) {
            myLongestArray = [];
            myLongestArray.push(inputArray[index]);
        }
    }
    return myLongestArray;
}