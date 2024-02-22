import {test, expect} from 'vitest'

function fitsInOneBox(boxes) {
    //ordenamos las cajas de mayor a menor
    boxes = boxes.sort((a,b) => b.l-a.l)

    //recorremos el array y comprobamos si las 3 propiedades son más grandes que la siguiente
    let auxBox = boxes.shift()
    for(let i=0;i<boxes.length;i++){
        if(auxBox && (auxBox.l <= boxes[i]["l"] || auxBox.w <= boxes[i]['w'] || auxBox.h <= boxes[i]['h'])){
            return false
        }

        auxBox = boxes[i]
    }   

    return true
  }


test('fitsInOneBox should return true when all boxes fit in one box', () => {
    const result = fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ])
    expect(result).toBe(true)
})

test('fitsInOneBox should return false when not all boxes fit in one box', () => {
    let boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ]
    const result = fitsInOneBox(boxes)
    expect(result).toBe(false)
})

test('fitsInOneBox should return true when all boxes fit in one box', () => {
    let boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ]
    const result = fitsInOneBox(boxes)
    expect(result).toBe(true)
})

