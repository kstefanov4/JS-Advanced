function solve(array){
    const result = [];
    for(let i = 0; i < array.length; i++){
        if (i % 2 == 0){
            result.push(array[i]);
        }
    }
    console.log(result.join(' '));
}

solve(['20', '30', '40', '50', '60'])
solve(['5', '10'])