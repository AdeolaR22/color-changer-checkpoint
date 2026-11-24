

document.addEventListener("DOMContentLoaded", function() {
});

// Find the colour box and button

let colorBox = document.getElementById("color-box");

let changeColorBtn = document.getElementById("change-color-btn");

// Create the random colour function

function getRandomColor() {

    let letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        let randomNumber = Math.floor(Math.random() * 16);

        color = color + letters[randomNumber];

    }

    return color;
}

// Make the button change the colour

changeColorBtn.addEventListener("click", function() {

    let newColor = getRandomColor();

    colorBox.style.backgroundColor = newColor;

});