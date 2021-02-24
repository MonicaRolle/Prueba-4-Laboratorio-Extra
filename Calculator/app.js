var number = () => parseInt(document.getElementById("input-number").value);
var result = 0;
var operation = "sum";
var operationString;

var setNumber = () => document.getElementById("result").innerText = number();


function sum() {
    operationString = "sum";
    calculator();
}
function subtration() {
    operationString = "subtration";
    calculator();
}
function multiply() {
    operationString = "multiply";
    calculator();
}
function division() {
    operationString = "division";
    calculator();
}

function calculator() {
    switch (operation) {
        case "sum":
            result = result + number();
            break;
        case "subtration":
            result = result - number();
            break;
        case "multiply":
            result = result * number();
            break;
        case "division":
            result = result / number();
            break;
        default:
            document.getElementById("result").innerHTML = result;
    }
    operation = operationString;
    document.getElementById("input-number").value = "";
}
function equal() {
    operationString = "";
    calculator();
    document.getElementById("result").innerHTML = result;
}

document.getElementById("input-number").addEventListener("keyup", setNumber);
document.getElementById("sum").addEventListener("click", sum);
document.getElementById("subtration").addEventListener("click", subtration);
document.getElementById("multiplication").addEventListener("click", multiply);
document.getElementById("division").addEventListener("click", division);
document.getElementById("equal").addEventListener("click", equal);

