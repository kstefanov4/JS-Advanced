function solve(...arguments) {

    let result = {};

    for (const argument of arguments) {
        let type = typeof (argument);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type]++;

        console.log(`${type}: ${argument}`);
    }
    let resultArray = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for (const element of resultArray) {
        console.log(`${element[0]} = ${element[1]}`);
    }

}

solve('cat', 42, 32, function () { console.log('Hello world!'); })