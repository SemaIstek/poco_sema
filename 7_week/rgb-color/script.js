const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const bodyChange = document.querySelector("body");
const rgbValue = document.getElementById("rgb-value");

function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    
    const rgbString = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
    bodyChange.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    rgbValue.textContent = rgbString;
    
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);


updateColor();
