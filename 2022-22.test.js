import {test, expect} from 'vitest'

const checkStepNumbers = (systemNames, stepNumbers) => {
    let grouppedArr = []

    for(let i=0;i<systemNames.length;i++){
        const systemName = systemNames[i]

        if(grouppedArr.includes(systemName)){
            grouppedArr[systemName] = [...grouppedArr[systemName], stepNumbers[i]]
        }else{
            grouppedArr[systemName] = []
        }
    }

    console.log(grouppedArr)
    return combinedArray;
    
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

test('checkStepNumbers(systemNames, stepNumbers) // => true', () => {
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
})
// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

test('checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false', () => {
    expect(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])).toBe(false)
})

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente