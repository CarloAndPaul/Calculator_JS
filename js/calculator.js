"use strict";

function run1() {
    document.calculator.result.value += "1";
}
function run2() {
    document.calculator.result.value += "2";
}
function run3() {
    document.calculator.result.value += "3";
}
function plus() {
    document.calculator.result.value += "+";
}


function run4() {
    document.calculator.result.value += "4";
}
function run5() {
    document.calculator.result.value += "5";
}
function run6() {
    document.calculator.result.value += "6";
}
function minus() {
    document.calculator.result.value += "-";
}



function run7() {
    document.calculator.result.value += "7";
}
function run8() {
    document.calculator.result.value += "8";
}
function run9() {
    document.calculator.result.value += "9";
}
function multiply() {
    document.calculator.result.value += "*";

}



function runClear() {
    document.calculator.result.value = "";
}
function run0() {
    document.calculator.result.value += "0";
}
function total() {
    var evaluate = eval(document.calculator.result.value);

    document.calculator.result.value = evaluate;
}
function runDivide() {
    document.calculator.result.value += "/";
}
//
function operate () {
    var operation = (document.calculator.operator.value)
    document.calculator.operator = operation

}