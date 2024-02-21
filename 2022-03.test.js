import {test, expect} from 'vitest'

const distributeGifts = (packOfGifts, reindeers) => {
    const totalWeight = packOfGifts.reduce((acc, gift) => {
        return acc + gift.length
    }
    , 0)

    const reindeersCapacity = reindeers.reduce((acc, reindeer) => {
        return acc + reindeer.length*2
    } ,0)

    return Math.floor(reindeersCapacity/totalWeight)
}

test('distributeGifts should return the correct number of gift boxes', () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(2);
});


test('distributeGifts should return 1 when given ["a", "b", "c"] and ["d", "e"]', () => {
    const packOfGifts = ["a", "b", "c"];
    const reindeers = ["d", "e"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(1);
});

test('distributeGifts should return 0 when given ["videogames", "console"] and ["midu"]', () => {
    const packOfGifts = ["videogames", "console"];
    const reindeers = ["midu"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(0);
});

test('distributeGifts should return 5 when given ["game", "videoconsole", "computer"] and ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]', () => {
    const packOfGifts = ["game", "videoconsole", "computer"];
    const reindeers = ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(5);
});

test('distributeGifts should return 26 when given ["music"] and ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]', () => {
    const packOfGifts = ["music"];
    const reindeers = ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"];

    const result = distributeGifts(packOfGifts, reindeers);

    expect(result).toBe(26);
});
