import {test, expect} from 'vitest'

function createCube(size) {
    let cube = ''

    //Pintar mitad superior
    for(let i=1;i<=size;i++){
        cube += " ".repeat(size-i)
        cube += "/\\".repeat(i)
        cube += "_\\".repeat(size) + "\n"
    }

    //printar mitad inferior
    for(let i=size;i>=1;i--){
        cube += " ".repeat(size-i)
        cube += "\\/".repeat(i)
        cube += "_/".repeat(size)

        if(i !== 1){
            cube += "\n"
        }
    }

    return cube
}

console.log(createCube(2))
test('asdf', ()=> {

})