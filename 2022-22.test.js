import {test, expect} from 'vitest'

const checkStepNumbers = (systemNames, stepNumbers) => {
    let grouppedArr = {}

    for(let i=0;i<systemNames.length;i++){
        if(grouppedArr[systemNames[i]]){
            grouppedArr[systemNames[i]].push(stepNumbers[i])
        }else{
            grouppedArr[systemNames[i]] = [stepNumbers[i]]
        }
    }

    const keys = Object.keys(grouppedArr)
    for(let i=0;i<keys.length;i++){
        //Comprobamos que no hayan pasos repetidos
        if(grouppedArr[keys[i]].length !== new Set(grouppedArr[keys[i]]).size){
            return false
        }
        const pasos = JSON.stringify(grouppedArr[keys[i]])
        const pasosOrdenados = JSON.stringify(grouppedArr[keys[i]].sort((a,b) => a-b))
        
        if(pasos !== pasosOrdenados){
            return false
        }
    }

    return true
}


test('checkStepNumbers - Test #01: return type', () => {
    const result = checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20]);
    expect(typeof result).toBe('boolean');
});

test('checkStepNumbers - Test #02: checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20])', () => {
    const result = checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20]);
    expect(result).toBe(true);
});

test('checkStepNumbers - Test #03: checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])', () => {
    const result = checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]);
    expect(result).toBe(false);
});

test('checkStepNumbers - Test #04: checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])', () => {
    const result = checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10]);
    expect(result).toBe(true);
});

test('checkStepNumbers - Test #05: checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])', () => {
    const result = checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6]);
    expect(result).toBe(false);
});
