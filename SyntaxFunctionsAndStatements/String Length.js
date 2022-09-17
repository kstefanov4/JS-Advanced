function solve(input1, input2, input3){
    let input1Lengt = input1.length;
    let input2Lengt = input2.length;
    let input3Lengt = input3.length;

    console.log(input1Lengt + input2Lengt + input3Lengt);
    console.log(Math.floor((input1Lengt + input2Lengt + input3Lengt) / 3));
}

solve('chocolate', 'ice cream', 'cake')
solve('pasta', '5', '22.3')