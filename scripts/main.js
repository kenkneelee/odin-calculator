/* --------------------Variables-------------------- */
let displayValue = 0;

/* ---------------------Script---------------------- */
console.log(operate(divide, 40, 8));
console.log(displayValue);

/* --------------------Functions-------------------- */
// add function
function sum(a, b) {
    return a + b;
};

//subtract function
function subtract(a, b) {
    return a - b;
};

//multiply function
function multiply(a,b) {
    return a*b;
};

//divide function
function divide(a,b) {
    return a/b;
};

//operate / equals button function
function operate(operator, a, b) {
    displayValue = operator(a,b);
    return operator(a,b);
}

//clear function
function clear() {
    displayValue=0;
}