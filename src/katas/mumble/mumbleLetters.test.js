
const mumbleLetters = require('./mumbleLetters')

describe("mumbleLetters", () => {
    test('with "a" returns "A"', () => {
        expect(mumbleLetters('a')).toBe('A');
    });
    
    test('with "abC" returns "A-Bb-Ccc"', () => {
        expect(mumbleLetters('abC')).toBe('A-Bb-Ccc');
    });
});

