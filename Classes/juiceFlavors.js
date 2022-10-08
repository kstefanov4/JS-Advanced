function solve(input){
    let juices = [...input];
    let juiceMap = new Map();
    let bottleMap = new Map();

    for (const juice of juices) {
        let juiceName = juice.split(' => ')[0];
        let juiceQuantity = Number(juice.split(' => ')[1]);

        if (!juiceMap.has(juiceName)){
            juiceMap.set(juiceName, 0);
        }
        juiceMap.set(juiceName,juiceMap.get(juiceName) + juiceQuantity);

        let totalJuiceQuantity = getBottle(juiceName);
        juiceMap.set(juiceName, totalJuiceQuantity);
    }

    bottleMap.forEach((k,v) => console.log(`${v} => ${k}`));

    function getBottle(juiceName) {
        let currentJuiceQuantity = juiceMap.get(juiceName);

        while (currentJuiceQuantity >= 1000) {
            if (!bottleMap.has(juiceName)) {
                bottleMap.set(juiceName, 1);
            } else {
                bottleMap.set(juiceName, bottleMap.get(juiceName) + 1);
            }
            currentJuiceQuantity -= 1000;
        }
        return currentJuiceQuantity;
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)