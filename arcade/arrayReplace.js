function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(elem => elem === elemToReplace ? substitutionElem : elem);
}