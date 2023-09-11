const ASCII_INIT = 64;
const decodeSol = (cell) => (cell.at(0).charCodeAt(0) - ASCII_INIT) % 2 + parseInt(cell.at(1)) % 2;

function solution(cell1, cell2) {
    return decodeSol(cell1) % 2 === decodeSol(cell2) % 2;
}