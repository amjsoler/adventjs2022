import {test, expect} from 'vitest'

const countTime = (leds) => {
    let times = 0;
    let zeros = leds.filter(led => led === 0).length;

    while (zeros > 0) {
        times++;
        let auxLeds = [];
        let zeroCount = 0;

        for (let i = 0; i < leds.length; i++) {
            const iterator = (i - 1 + leds.length) % leds.length;
            auxLeds[i] = leds[i] === 0 ? (leds[iterator] === 1 ? 1 : 0) : 1;
            zeroCount += auxLeds[i] === 0 ? 1 : 0;
        }

        leds = auxLeds;
        zeros = zeroCount;
    }

    return times * 7;
}

test('countTime should return the correct time for the given LEDs configuration - Test #01', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
})

test('countTime should return the correct time for the given LEDs configuration - Test #02', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
})

test('countTime should return the correct time for the given LEDs configuration - Test #03', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
})

test('countTime should return the correct time for the given LEDs configuration - Test #01', () => {
    expect(typeof countTime([0, 1, 1, 0, 1])).toBe('number')
})

test('countTime should return the correct time for the given LEDs configuration - Test #02', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
})

test('countTime should return the correct time for the given LEDs configuration - Test #03', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
})

test('countTime should return the correct time for the given LEDs configuration - Test #04', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
})

test('countTime should return the correct time for the given LEDs configuration - Test #05', () => {
    expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14)
})

test('countTime should return the correct time for the given LEDs configuration - Test #06', () => {
    expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28)
})

test('countTime should return the correct time for the given LEDs configuration - Test #07', () => {
    expect(countTime([1, 1, 1])).toBe(0)
})
