function solve(array){
    const result = [];

    array.forEach(element => {
        if (element >= 0){
            result.push(element);
        } else{
            result.unshift(element);
        }
    });
    console.log(result.join('\n'));
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])