import { generateColorRGB, convertToHSL } from './colors.js'

let generateColor = document.querySelectorAll('.color');
let hexNumbers = document.querySelector('#hex');
let rgbNumbers = document.querySelector('#rgb');
let hslNumbers = document.querySelector('#hsl');

setColorBox();

for (let i = 0; i < generateColor.length; i++) {
    generateColor[i].addEventListener('click', () => {
        setColorBox();
    });
}

function setColorBox() {
    let colorRGB = generateColorRGB();
    let colorHSL = convertToHSL(colorRGB);

    for (let j = 0; j < generateColor.length; j++) {
        generateColor[j].style.background = `rgb(${colorRGB.red},${colorRGB.green},${colorRGB.blue})`;
    }

    hexNumbers.children[1].textContent = "#121212";
    rgbNumbers.children[1].textContent = `${colorRGB.red}, ${colorRGB.green}, ${colorRGB.blue}`;
    hslNumbers.children[1].textContent = `${colorHSL.hue}, ${colorHSL.saturation}%, ${colorHSL.lightness}%`;   
}