const greenToRed = require('../index');
const { describe, it } = require('node:test')
const assert = require('node:assert')

describe('greenToRed', () => {
    it('0% should return RGB', () => {
        const res = greenToRed(0);

        assert.strictEqual(res.length, 3);
        assert.strictEqual(res[0], 0);
        assert.strictEqual(res[1], 255);
        assert.strictEqual(res[2], 0);
    });

    it('10% should return HEX', () => {
        const res = greenToRed(10, true);

        assert.strictEqual(res, '#32ff00');
    });

    it('20% should return RGB', () => {
        const res = greenToRed(20);

        assert.strictEqual(res.length, 3);
        assert.strictEqual(res[0], 101);
        assert.strictEqual(res[1], 255);
        assert.strictEqual(res[2], 0);
    });

    it('30% should return HEX', () => {
        const res = greenToRed(30, true);

        assert.strictEqual(res, '#99ff00');
    });

    it('50% should return RGB', () => {
        const res = greenToRed(50);

        assert.strictEqual(res.length, 3);
        assert.strictEqual(res[0], 255);
        assert.strictEqual(res[1], 255);
        assert.strictEqual(res[2], 0);
    });

    it('70% should return HEX', () => {
        const res = greenToRed(70, true);

        assert.strictEqual(res, '#ff9900');
    });

    it('90% should return RGB', () => {
        const res = greenToRed(90);

        assert.strictEqual(res.length, 3);
        assert.strictEqual(res[0], 255);
        assert.strictEqual(res[1], 50);
        assert.strictEqual(res[2], 0);
    });

    it('100% should return HEX', () => {
        const res = greenToRed(100, true);

        assert.strictEqual(res, '#ff0000');
    });
})