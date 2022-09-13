function solve([...numbers]){
    let sum =0 ;
    let inversedSum = 0;
    let concatenedNumbers = "";

    numbers.forEach(element => {
        sum += element;
    });

    numbers.forEach(element => {
        inversedSum += 1 / element;
    });

    numbers.forEach(element => {
        concatenedNumbers += element;
    });

    console.log(sum);
    console.log(inversedSum);
    console.log(concatenedNumbers);
}

solve([2, 4, 8, 16])