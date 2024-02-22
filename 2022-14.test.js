import {test, expect} from 'vitest'

function getOptimalPath(path) {    
    if(path.length === 1) {
        return path[0][0]
    }

    else {
        let leftCopy = JSON.parse(JSON.stringify(path))
        let rightCopy = JSON.parse(JSON.stringify(path))
 
        leftCopy.shift()
        for(let i = 0; i < leftCopy.length; i++) {
            leftCopy[i].pop()
        }

        //Llamo a la función recursivamente
        const leftResut = path[0][0] + getOptimalPath(leftCopy)


        rightCopy.shift()
        for(let i = 0; i < rightCopy.length; i++) {
            rightCopy[i].shift()
        }

        //Llamo a la función recursivamente
        const rightResult =  path[0][0] + getOptimalPath(rightCopy)

        return Math.min(leftResut, rightResult)
    }
}

test('getOptimalPath should return the correct optimal path length', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
})
