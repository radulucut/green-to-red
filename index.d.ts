declare module "green-to-red" {
  /**
   * Returns a color between green and red, based on the percentage value.
   *
   * @param {number} percentage  - a number between 0 and 100
   * @param {boolean} [toHEX] - if true, returns a HEX color, otherwise returns a RGB color
   * @returns {(Uint8Array|string)} - a RGB color or a HEX color
   *
   * @example
   * const greenToRed = require('green-to-red');
   * greenToRed(0);          // Output -> [0, 255, 0]
   * greenToRed(20, true);   // Output -> #32ff00
   * greenToRed(100, true);  // Output -> #ff0000
   */
  function greenToRed(percentage: number, toHEX?: boolean): Uint8Array | string;

  export = greenToRed;
}
