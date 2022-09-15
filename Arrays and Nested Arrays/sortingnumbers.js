function solve(data) {
    let array = [...data];
    array.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < data.length; i++) {
        while (array.length > 0) {
            result.push(array.shift(array[i]));
            if (array.length == 0) {
                break;
            }
            result.push(array.pop(array[array.length - 1 - i]))
        }
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(solve([1]));