function solve(input) {
    let array = [...input];
    let result = true;

    for (let i = 0; i < array.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < array[i].length; j++) {
            rowSum += array[i][j];
            colSum += array[j][i];
        }

        if (rowSum != colSum) {
            result = false;
            break;
        }
    }
    console.log(result);
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);

solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );