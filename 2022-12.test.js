import {test, expect} from 'vitest'

function selectSleigh(distance, sleighs) {
    sleighs.reverse()

    for(let i=0;i<sleighs.length;i++){
        if(sleighs[i].consumption*distance <= 20) {
            return sleighs[i].name
        }
    }

    return null
}

test('selectSleigh should return the sleigh with the lowest consumption', () => {
    const distance = 30
    const sleighs = [
        { name: "Dasher", consumption: 0.3 },
        { name: "Dancer", consumption: 0.5 },
        { name: "Rudolph", consumption: 0.7 },
        { name: "Midu", consumption: 1 }
    ]
    
    const result = selectSleigh(distance, sleighs)
    
    expect(result).toEqual("Dancer")
})