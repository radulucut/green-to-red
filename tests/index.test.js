const greenToRed = require('../index');

describe('greenToRed', () => {
    test('0% should return RGB', () => {
        const res = greenToRed(0);

        expect(res.length).toBe(3);
        expect(res[0]).toBe(0);
        expect(res[1]).toBe(255);
        expect(res[2]).toBe(0);
    });

    test('10% should return HEX', () => {
        const res = greenToRed(10, true);

        expect(res).toEqual('#32ff00');
    });

    test('20% should return RGB', () => {
        const res = greenToRed(20);

        expect(res.length).toBe(3);
        expect(res[0]).toBe(101);
        expect(res[1]).toBe(255);
        expect(res[2]).toBe(0);
    });

    test('30% should return HEX', () => {
        const res = greenToRed(30, true);

        expect(res).toEqual('#99ff00');
    });

    test('50% should return RGB', () => {
        const res = greenToRed(50);

        expect(res.length).toBe(3);
        expect(res[0]).toBe(255);
        expect(res[1]).toBe(255);
        expect(res[2]).toBe(0);
    });

    test('70% should return HEX', () => {
        const res = greenToRed(70, true);

        expect(res).toEqual('#ff9900');
    });

    test('90% should return RGB', () => {
        const res = greenToRed(90);

        expect(res.length).toBe(3);
        expect(res[0]).toBe(255);
        expect(res[1]).toBe(50);
        expect(res[2]).toBe(0);
    });

    test('100% should return HEX', () => {
        const res = greenToRed(100, true);

        expect(res).toEqual('#ff0000');
    });
})