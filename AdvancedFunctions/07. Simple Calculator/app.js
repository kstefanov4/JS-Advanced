function calculator() {
    let numOne;
    let numTwo;
    let result;

    return {
        init: (selector1, selector2, resultSelector) => {
            numOne = document.querySelector(selector1);
            numTwo = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            let firstNum = Number(numOne.value);
            let secondNum = Number(numTwo.value);
            result.value = firstNum + secondNum;
        },
        subtract: () => {
            let firstNum = Number(numOne.value);
            let secondNum = Number(numTwo.value);
            result.value = firstNum - secondNum;
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
