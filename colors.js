function generateColorRGB() {
    let colorRGB = {
        red: 0,
        green: 0,
        blue: 0
    }

    colorRGB.red = Math.floor(Math.random() * 255);
    colorRGB.green = Math.floor(Math.random() * 255);
    colorRGB.blue = Math.floor(Math.random() * 255);

    return colorRGB;
}

function convertToHSL(colorRGB) {
    let colorHSL = {
        hue: 0,
        saturation: 0,
        lightness: 0
    }

    let colorRGBOrdened = [
        colorRGB.red,
        colorRGB.green,
        colorRGB.blue
    ]

    // Organized colors (min, max)
    for (let i = 0; i < colorRGBOrdened.length; i++) {
        for (let j = 0; j < colorRGBOrdened.length - 1; j++) {
            if (colorRGBOrdened[j] > colorRGBOrdened[j + 1]) {
                let aux = colorRGBOrdened[j];
                colorRGBOrdened[j] = colorRGBOrdened[j + 1];
                colorRGBOrdened[j + 1] = aux;
            }
        }
    }

    let max = colorRGBOrdened[2] / 255;
    let min = colorRGBOrdened[0] / 255;
    let r = colorRGB.red / 255;
    let g = colorRGB.green / 255;
    let b = colorRGB.blue / 255;

    // Lightness
    colorHSL.lightness = (min + max) / 2;

    if (max == min) {
        colorHSL.hue = colorHSL.saturation = 0;
    } else {
        // Saturation
        if (colorHSL.lightness / 100 <= 0.5) {
            colorHSL.saturation = (max - min) / (max + min);
        } else {
            colorHSL.saturation = (max - min) / (2 - max - min);
        }

        // Hue
        switch (max) {
            case r:
                colorHSL.hue = (g - b) / (max - min) + (g < b ? 6 : 0);  

                break;
            case g:
                colorHSL.hue = ((b - r) / (max - min)) + 2;

                break;
            case b:
                colorHSL.hue = ((r - g) / (max - min)) + 4;

                break;
        }

        colorHSL.lightness = Math.floor(colorHSL.lightness * 100)
        colorHSL.saturation = Math.floor(colorHSL.saturation * 100)
        colorHSL.hue = Math.floor(colorHSL.hue * 60)
    }    

    return colorHSL;
}

export { generateColorRGB, convertToHSL }