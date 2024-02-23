import {test, expect} from 'vitest'

function printTable(gifts) {
    let table = ''

    let [giftMaxSize, quantityMaxSize] = gifts.reduce((acc, gift) => {
        acc[0].push(gift.name.length)
        acc[1].push(gift.quantity.toString().length)

        return acc
    }, [[],[]])

    giftMaxSize = Math.max(...giftMaxSize)
    quantityMaxSize = Math.max(...quantityMaxSize)

    if(giftMaxSize < 4) giftMaxSize = 4
    if(quantityMaxSize < 8) quantityMaxSize = 8

    const tableMaxWidth = 7 + giftMaxSize + quantityMaxSize

    table += '+'.repeat(tableMaxWidth) + "\n"

    const spaceGiftName = giftMaxSize - 4
    const spaceQuantity = quantityMaxSize - 8

    table += "| Gift"
    if(spaceGiftName > 0) table += " ".repeat(spaceGiftName) 

    table += " | Quantity"
    if(spaceQuantity > 0) table += " ".repeat(spaceQuantity) 
    table += " |\n"

    table += "| " + "-".repeat(giftMaxSize) + " | " + "-".repeat(quantityMaxSize) + " |" + "\n"

    for(let i=0;i<gifts.length;i++){
        const espaciosNombre = giftMaxSize - gifts[i].name.length
        const espaciosCantidad = quantityMaxSize - gifts[i].quantity.toString().length

        table += "| " + gifts[i].name
        if(espaciosNombre > 0) table += " ".repeat(espaciosNombre)
        table += " | "
        table += + gifts[i].quantity
        if(espaciosCantidad > 0) table += " ".repeat(espaciosCantidad) 
        table += " |" + "\n"
    }

    table += "*".repeat(tableMaxWidth)

    return table
}

console.log(printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
  ]))

test('printTable should return a string', () => {
    const result = printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
    expect(typeof result).toBe('string')
})

test('printTable should return the expected table for Test #02', () => {
    const result = printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
    const expected = "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"
    expect(result).toBe(expected)
})

test('printTable should return the expected table for Test #03', () => {
    const result = printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 }
    ])
    const expected = "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"
    expect(result).toBe(expected)
})

test('printTable should return the expected table for Test #04', () => {
    const result = printTable([
        { name: 'Game', quantity: 10000 }
    ])
    const expected = "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"
    expect(result).toBe(expected)
})

test('printTable should return the expected table for Test #05', () => {
    const result = printTable([
        { name: 'Game', quantity: 1234567890 }
    ])
    const expected = "+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"
    expect(result).toBe(expected)
})

test('printTable should return the expected table for Test #06', () => {
    const result = printTable([
        { name: 'Toy', quantity: 12 },
        { name: 'Mic', quantity: 123 }
    ])
    const expected = "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************"
    expect(result).toBe(expected)
})
