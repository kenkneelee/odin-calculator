/* --------------------Variables-------------------- */
let displayValue = 0;
let a = [];
let b = [];
const display = document.getElementById("display");


/* ---------------------Script---------------------- */
console.log(displayValue);
window.onload = function () {
    clear();
    refresh();
}

/* ---------------------Buttons--------------------- */
document.getElementById("clearButton").onclick = function () {
    clear();
    refresh();
}

const numerics = [...document.getElementsByClassName("numberButton")];
console.log(numerics);
numerics.forEach(element => {
    element.addEventListener("click", function () {
        a.push(element.id);
        console.log(a);
        displayValue = Number(a.join(''));
        refresh();
    })
});


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
function multiply(a, b) {
    return a * b;
};

//divide function
function divide(a, b) {
    return a / b;
};

//operate / equals button function
function operate(operator, a, b) {
    displayValue = operator(a, b);
    refresh();
    return operator(a, b);
}

//clear function
function clear() {
    displayValue = 0;
}

function refresh() {
    display.textContent = displayValue;
}