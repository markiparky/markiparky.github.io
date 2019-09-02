const button = document.querySelector("button"),
    widthInput = document.getElementById("width"),
    heightInput = document.getElementById("height"),
    priceInput = document.getElementById("price"),
    output = document.querySelector("h3");

function calculate() {
    //let pricePerSqrm = parseFloat(widthInput.value) * parseFloat(heightInput.value) * parseFloat(priceInput.value)
    let pricePerSqrm = widthInput.value * heightInput.value * priceInput.value
    if (pricePerSqrm == NaN) {
        alert("Csak számot írj be!")
    } else {
        console.log(pricePerSqrm + "€");
        output.innerHTML = `A csempe ára ${pricePerSqrm}€!`
    }

}