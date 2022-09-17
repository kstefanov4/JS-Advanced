function solve(array){
    return array.sort((a,b) => a-b).slice(Math.floor(array.length / 2))
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);