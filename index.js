/**
 * 
 * @param {number} percentage 
 * @param {boolean} toHEX 
 */
const greenToRed = function (percentage, toHEX) {
    percentage = Math.min(Math.max(0, percentage), 100);
    const maxValue = 255;
    const formula = 2 / 100 * maxValue;
    const green = percentage <= 50 ? maxValue : maxValue - (percentage - 50) * formula;
    const red = percentage >= 50 ? maxValue : maxValue - (50 - percentage) * formula;
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