const GTR_MAX_VALUE = 255;
const GTR_FORMULA = 2 / 100 * GTR_MAX_VALUE;

/**
 * 
 * @param {number} percentage 
 * @param {boolean} toHEX 
 */
const greenToRed = function (percentage, toHEX) {
    percentage = Math.min(Math.max(0, percentage), 100);
    const green = percentage <= 50 ? GTR_MAX_VALUE : GTR_MAX_VALUE - (percentage - 50) * GTR_FORMULA;
    const red = percentage >= 50 ? GTR_MAX_VALUE : GTR_MAX_VALUE - (50 - percentage) * GTR_FORMULA;
    const rgb = new Uint8Array([red, green, 0]);

    if (toHEX)
        return `#${intToHex(rgb[0])}${intToHex(rgb[1])}00`;

    return rgb;
}

const intToHex = function (number) {
    const hex = number.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

module.exports = greenToRed;
