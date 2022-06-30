var displayDiv = document.querySelector("#display");
var num1 = 0;
var num2 = 0;
var operator = "";
var operators = {
    "+": function(x, y) { return x + y },
    "-": function(x, y) { return x - y },
    "*": function(x, y) { return x * y },
    "/": function(x, y) { return x / y }
}

function press(element) {
    if (num1 == 0) {
        num1 = element;
        displayDiv.innerHTML = num1;
    }

    else if (operator != "") {
        if (num2 == 0) {
            num2 = element;
        }
        else {
            num2 = num2.toString() + element;
        }
        console.log(num1, operator, num2);
        displayDiv.innerHTML = num2;
    }

    else {
        num1 = num1.toString() + element;
        console.log(num1);
        displayDiv.innerHTML = num1;
    }
}

function setOP(element) {
    operator = element;
}

function calculate() {
    var answer = operators[operator](parseFloat(num1), parseFloat(num2));
    console.log(operators[operator](parseFloat(num1), parseFloat(num2)));
    displayDiv.innerHTML = answer;
    num1 = answer;

}

function clr() {
    displayDiv.innerHTML = 0;
    num1 = 0;
    num2 = 0; 
    operator = "";
}

function clickButtons(button) {
    if (button.getAttribute("class") == "operator") {
        button.style.backgroundColor = "#81bac9";
    }
    
    else if (button.getAttribute("id") == "equals") {
        button.style.backgroundColor = "#efeee1";
    }

    else {
        button.style.backgroundColor = "#809eb5";
    }
}

function unclickButtons(button) {
    if (button.getAttribute("class") == "operator") {
        button.style.backgroundColor = "#62929E";
    }

    else if (button.getAttribute("id") == "equals") {
        button.style.backgroundColor = "#C6C5B9";
    }
    
    else {
        button.style.backgroundColor = "#546A7B";
    }
}