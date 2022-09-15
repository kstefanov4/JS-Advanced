function solve(input) {
    let matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]]
        ;

    let winner;

    for (let i = 0; i < input.length; i++) {
        let row = Number(input[i].split(' ')[0]);
        let col = Number(input[i].split(' ')[1]);
        const so = matrix[row][col];
        if (matrix[row][col] != false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if (i % 2 == 0) {
            matrix[row][col] = 'X';
        } else {
            matrix[row][col] = 'O';
        }

        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][0] != false && (matrix[j][0] == matrix[j][1] && matrix[j][0] == matrix[j][2])) {
                winner = matrix[j][0];
                break;
            } else if (matrix[0][j] != false && matrix[0][j] == matrix[1][j] && matrix[0][j] == matrix[2][j]) {
                winner = matrix[0][j];
                break;
            } else if (matrix[0][0] != false && matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) {
                winner = matrix[0][0];
                break;
            } else if (matrix[0][2] != false && matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[0][0]) {
                winner = matrix[0][2];
                break;
            }
        }

        if (winner == 'X' || winner == 'O') {
            console.log(`Player ${winner} wins!`);
            break;
        }
    }
    if (winner == undefined) {
        console.log("The game ended! Nobody wins :(");
    }

    for (i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}
// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// );

// solve(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]);

solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);