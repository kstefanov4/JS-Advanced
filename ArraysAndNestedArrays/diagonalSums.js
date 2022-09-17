function solve(array){
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let startIndex = 0;
    let endIndex = array[0].length -1

    array.forEach(element => {
        firstDiagonalSum += element[startIndex++];
        secondDiagonalSum += element[endIndex--]
    });

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum)
}

solve([[3, 5, 17],[-1, 7, 14], [1, -8, 89]]);