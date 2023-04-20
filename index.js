const GTR_MAX_VALUE = 255;
const GTR_FORMULA = 2 / 100 * GTR_MAX_VALUE;

/**
 * 
 * @param {number} percentage 
 * @param {boolean} toHEX 
 */
const greenToRed = function(percentage, toHEX) {
    percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;

    const green = percentage <= 50 ? GTR_MAX_VALUE : GTR_MAX_VALUE - (percentage - 50) * GTR_FORMULA;
    const red = percentage >= 50 ? GTR_MAX_VALUE : GTR_MAX_VALUE - (50 - percentage) * GTR_FORMULA;
    const rgb = new Uint8Array([red, green, 0]);

    if (toHEX) {
        let redHex = rgb[0].toString(16);
        if (redHex.length == 1) { redHex = '0' + redHex; }

        let greenHex = rgb[1].toString(16);
        if (greenHex.length == 1) { greenHex = '0' + greenHex; }

        return "#" + redHex + greenHex + "00";
    }

    return rgb;
}

module.exports = greenToRed;

