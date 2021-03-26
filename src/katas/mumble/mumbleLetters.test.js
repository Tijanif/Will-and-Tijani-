
const mumbleLetters = require('./mumbleLetters')

describe("mumbleLetters", () => {
    test('with "a" returns "A"', () => {
        expect(mumbleLetters('a')).toBe('A');
    });
});
