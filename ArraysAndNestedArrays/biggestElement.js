function solve(array){
    let biggestNumber = array[0][0];

    array.forEach(element => {
        element.forEach(number => {
            if(number > biggestNumber){
                biggestNumber = number;
            }
        })
    });

    return biggestNumber;
}

console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))