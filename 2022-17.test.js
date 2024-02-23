import {test, expect} from 'vitest'

function carryGifts(gifts,  maxWeight) {
    let arrayDePaquetes = []
    let paquete = ''
    let peso = 0

    if(gifts.filter(item => item.length > maxWeight).length > 0){
        return []
    }

    for(let i=0;i<gifts.length;i++){
        if(gifts[i].length + peso <= maxWeight){
            paquete += gifts[i] + " "
            peso += gifts[i].length
        }else{
            arrayDePaquetes.push(paquete.trim())
            paquete = gifts[i] + " "
            peso = gifts[i].length
        }

        if(i === gifts.length-1){
            arrayDePaquetes.push(paquete.trim())
        }
    }

    return arrayDePaquetes
}

test('carryGifts should group gifts into bags based on weight limit', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual(['game bike', 'book toy'])
})

test('carryGifts should group gifts into bags based on weight limit', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual(['game', 'bike', 'book toy'])
})

test('carryGifts should group gifts into bags based on weight limit', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toEqual(['game', 'bike', 'book', 'toy'])
})

test('carryGifts should group gifts into bags based on weight limit', () => {
    expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual(['toy', 'gamme', 'toy', 'bike'])
})

test("carryGifts(['toy', 'toy', 'toy', 'toy'], 2)", () => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([])
})