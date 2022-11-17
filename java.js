function updateDisplay(input) {
    document.querySelector("#display").innerText += input;
    // += -  document.querySelector("#display").innerText + input
}

function clearDisplay(input) {
    document.querySelector("#display").innerText = input
}

/* tobias way to reset button

function clearDisplay() {
    document.querySelector("#display").innerText = ""
}

*/

function equalDisplay() {
    const displayValue = document.querySelector("#display").innerText // "4+34"  "34-7"
    console.log(displayValue)
    const result = eval(displayValue)

    document.querySelector("#display").innerText = result;
    console.log(result)
}

/* tobias way of calculating

function calculate () {
    const numbers = document.querySelector("#display").innerText

    const = result = eval(numbers)

    document.querySelector("#display").innerText += "=" + result;
} */