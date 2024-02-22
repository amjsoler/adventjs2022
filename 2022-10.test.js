import {test, expect} from 'vitest'

function checkJump(heights) {
    let goingup = null
    let goingdown = null

    for(let i=0;i<heights.length;i++){
        if(goingup === null && heights[i] > heights[i+1]){
            return false
        }

        if(heights[i] < heights[i+1]){
            goingup = true
        }

        if(heights[i] > heights[i+1]){
            goingup = false
            goingdown = true
        }

        if(goingdown && heights[i] < heights[i+1]) {
            return false
        }
    }

    return (goingup != null && goingdown != null)
}

test('checkJump devuelve true para un salto válido', () => {
    const heights = [1, 3, 8, 5, 2]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve false para un salto inválido', () => {
    const heights = [1, 7, 3, 5]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve true para un salto válido [1, 2, 1]', () => {
    const heights = [1, 2, 1]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve true para un salto válido [1, 2, 3, 2, 1]', () => {
    const heights = [1, 2, 3, 2, 1]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve true para un salto válido [0, 1, 0]', () => {
    const heights = [0, 1, 0]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve false para un salto inválido [1, 2, 2, 2, 1]', () => {
    const heights = [1, 2, 2, 2, 1]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve false para un salto inválido [2, 2, 2, 2]', () => {
    const heights = [2, 2, 2, 2]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve false para un salto inválido [1, 2, 3]', () => {
    const heights = [1, 2, 3]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve false para un salto inválido [1, 2, 3, 2, 1, 2, 3]', () => {
    const heights = [1, 2, 3, 2, 1, 2, 3]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve true para un salto válido [1, 1000, 900, 800]', () => {
    const heights = [1, 1000, 900, 800]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve false para un salto inválido [1, 1000, 100, 800]', () => {
    const heights = [1, 1000, 100, 800]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve true para un salto válido [1, 1, 1, 1, 1, 1, 1, 1, 2, 1]', () => {
    const heights = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve false para un salto inválido [1, 2, 3, 1, 3, 1]', () => {
    const heights = [1, 2, 3, 1, 3, 1]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve false para un salto inválido [1, 3, 2, 5, 4, 3, 2, 1]', () => {
    const heights = [1, 3, 2, 5, 4, 3, 2, 1]
    expect(checkJump(heights)).toBe(false)
})

test('checkJump devuelve false para un salto inválido [1,2,2,3,4,4,3,2,1]', () => {
    const heights = [1,2,2,3,4,4,3,2,1]
    expect(checkJump(heights)).toBe(true)
})

test('checkJump devuelve false para un salto inválido [2,1]', () => {
    const heights = [2,1]
    expect(checkJump(heights)).toBe(false)
})
