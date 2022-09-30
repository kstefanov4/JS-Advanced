function solution(num) {

    return calc;

    function calc(otherNum) {
        let innet = num;
        return innet += otherNum;
    };
}

let add5 = solution(5);
let add7 = solution(7);

console.log(add5(2));
console.log(add5(3));


console.log(add7(2));
console.log(add7(3));

