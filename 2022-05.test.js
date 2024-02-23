import {test, expect} from 'vitest'

function getMaxGifts(giftsCities, maxGifts, maxCities) {

}

test('getMaxGifts should return the maximum value of gifts that can be bought within the budget and quantity limit', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
})

test('getMaxGifts should return 0 if the budget is less than the price of the cheapest gift', () => {
    expect(getMaxGifts([50], 15, 1)).toBe(0)
})

test('getMaxGifts should return the price of the only gift if the budget is greater than or equal to its price', () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50)
})

test('getMaxGifts should return the price of the most expensive gift if the budget is greater than or equal to its price', () => {
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
})

test('getMaxGifts should return the sum of the two most expensive gifts if the budget is greater than or equal to their prices', () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
})

test('getMaxGifts should return the sum of all gifts if the budget is greater than or equal to their prices and the quantity limit is greater than the number of gifts', () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100)
})

test('getMaxGifts should return the sum of all gifts if the budget is greater than or equal to their prices and the quantity limit is greater than the number of gifts', () => {
    expect(getMaxGifts([50, 70, 30], 100, 4)).toBe(100)
})
