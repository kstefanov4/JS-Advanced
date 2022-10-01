function solve(array, sortType) {

    array.sort((a, b) => sort(a, b, sortType))

    function sort(a, b, type) {
        return type == 'asc' ? a - b : b - a;
    }

    console.log(array);
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');