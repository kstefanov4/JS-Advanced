function solve(input) {
    let { model, power, color, carriage, wheelsize } = input;

    let engineParamethers = [{ power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 }];

    function getCorrectWheelSize(wheelsize) {
        if (wheelsize % 2 == 0) {
            return wheelsize - 1;
        } else {
            return wheelsize;
        }
    }

    let car = {
        model: model,
        engine: engineParamethers.filter(x => x.power >= power)[0],
        carriage: { type: carriage, color: color },
        wheels: [getCorrectWheelSize(wheelsize)
            , getCorrectWheelSize(wheelsize)
            , getCorrectWheelSize(wheelsize)
            , getCorrectWheelSize(wheelsize)]
    }

    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 150,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

));