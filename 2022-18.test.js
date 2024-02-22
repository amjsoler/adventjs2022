import {test, expect} from 'vitest'

const dryNumber = (dry, numbers) => {
    let cantPrintNumbers = []

    for(let i=1;i<=numbers;i++){
        if(i.toString().indexOf(dry) !== -1) {
            cantPrintNumbers.push(i)
        }
    }

    return cantPrintNumbers
}

test('dryNumber should return the correct array of barcodes', () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15]);
    expect(dryNumber(2, 20)).toEqual([2, 12, 20]);
    expect(dryNumber(2, 200)).toEqual([
        2,  12,  20,  21,  22,  23,  24,  25,  26,
       27,  28,  29,  32,  42,  52,  62,  72,  82,
       92, 102, 112, 120, 121, 122, 123, 124, 125,
      126, 127, 128, 129, 132, 142, 152, 162, 172,
      182, 192, 200
    ]);
});
