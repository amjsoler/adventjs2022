import {test, expect} from 'vitest' 

const getGiftsToRefill = (a1, a2, a3) => {
    const stock = [...new Set([...a1, ...a2, ...a3])];
    const finalArray = stock.filter(gift => 
        [a1, a2, a3].filter(arr => 
            arr.includes(gift)
        ).length === 1
    );
    return finalArray;
}

test('getGiftsToRefill should return an array of gifts that need to be refilled', () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']
    const expected = ['muñeca', 'pc']
    const result = getGiftsToRefill(a1, a2, a3)
    expect(result).toEqual(expected)
})