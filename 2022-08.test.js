import {test, expect} from 'vitest'

function checkPart(part) {
    const partArr = Array.from(part)

    if(partArr.toString() === partArr.reverse().toString()){
        return true
    }

    for(let i=0;i<partArr.length;i++){
        const arrCopy = Array.from(part)
        arrCopy.splice(i, 1)

        if(arrCopy.toString() === arrCopy.reverse().toString()){
            return true
        }
    }

    return false
}

// Test 1: "uwu" es un palíndromo sin eliminar ningún carácter
test("Test 1", () => {
    expect(checkPart("uwu")).toBe(true);
});

// Test 2: "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo
test("Test 2", () => {
    expect(checkPart("miidim")).toBe(true);
});

// Test 3: "midu" no puede ser un palíndromo después de eliminar un carácter
test("Test 3", () => {
    expect(checkPart("midu")).toBe(false);
});