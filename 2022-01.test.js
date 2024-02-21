import {test, expect} from 'vitest'

const wrapping = (gifts) => {
    const finalWrappedPresents = []

    if(gifts.length > 0){
        gifts.forEach(item => {
            const presentSize = item.length

            const wrappedPresent =  "*".repeat(presentSize+2) + "\n" + 
                                    "*" + item + "*" + "\n" + 
                                    "*".repeat(presentSize+2)

            finalWrappedPresents.push(wrappedPresent)
        })
    }

    return finalWrappedPresents
}


test("return type", () => {
    const result = wrapping([]);
    expect(Array.isArray(result)).toBe(true);
});

test("wrapping(gifts)", () => {
    const gifts = ["cat", "game", "socks"];
    const result = wrapping(gifts);
    const expected = [
        "*****\n*cat*\n*****",
        "******\n*game*\n******",
        "*******\n*socks*\n*******"
    ];
    expect(result).toEqual(expected);
});

test("wrapping(['midu'])", () => {
    const result = wrapping(["midu"]);
    const expected = [
        "******\n*midu*\n******"
    ];
    expect(result).toEqual(expected);
});

test("wrapping(['a'])", () => {
    const result = wrapping(["a"]);
    const expected = [
        "***\n*a*\n***"
    ];
    expect(result).toEqual(expected);
});

test("wrapping an empty array should return an empty array", () => {
    const result = wrapping([]);
    const expected = [];
    expect(result).toEqual(expected);
});
