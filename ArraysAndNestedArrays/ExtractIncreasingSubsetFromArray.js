function solve(array) {
    const result = [array[0]];
    let biggestNum = array[0];

    array.forEach(element => {
        if(element > biggestNum){
            biggestNum = element;
            result.push(element);
        }
    });
    
    return result;
}

solve([1,

    3,
    
    8,
    
    4,
    10, 12, 3, 2, 24])