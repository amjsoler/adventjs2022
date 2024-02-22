import {test, expect} from 'vitest'

const sortToys = (toys, positions) => {
    return toys.map((toy, index) => [toy, positions[index]])
    .sort((a, b) => a[1] - b[1])
    .map(toy => toy[0])
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

test('sortToys should sort toys based on positions', () => {
    const result = sortToys(toys, positions)
    expect(result).toEqual(['puzzle', 'car', 'ball', 'doll'])
})

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

test('sortToys should handle more toys and positions', () => {
    const result = sortToys(moreToys, morePositions)
    expect(result).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})

test('sortToys should return an array', () => {
    const result = sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])
    expect(Array.isArray(result)).toBe(true)
})

test('sortToys should sort toys in the correct order', () => {
    const result = sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])
    expect(result).toEqual(['puzzle', 'car', 'ball', 'doll'])
})

test('sortToys should handle different toys and positions', () => {
    const result = sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])
    expect(result).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})

test('sortToys should handle more toys and positions', () => {
    const result = sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
    expect(result).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})

test('sortToys should handle a larger set of toys and positions', () => {
    const result = sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111])
    expect(result).toEqual(['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'])
})
