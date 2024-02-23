import {test, expect} from 'vitest'

function fixLetter(letter) {
    let processAgain = true

    letter = letter.trim()
    letter = letter.replaceAll(" ,", ",")
    letter = letter.replaceAll(" .", ".")
    while(textOkay == false) {
        if(letter.inclues("  ")){
            letter = letter.replace("  ", " ")
        }
        else{
            processAgain = false
        }
    }

    return letter
}

test('fixLetter should capitalize the first letter of each sentence and remove extra spaces', () => {
    const input1 = ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
    const expected1 = 'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
    expect(fixLetter(input1)).toBe(expected1)

    const input2 = "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
    const expected2 = "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
    expect(fixLetter(input2)).toBe(expected2)
})