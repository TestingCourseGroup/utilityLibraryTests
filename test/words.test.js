import words from '../src/words.js';

describe('Tests for words function', () => {
    it('should return an array of words of input string', () => {
        expect(words("This is a test string")).toBeArray().toEqual(["This", "is", "a", "test", "string"]);
    });

    it('should handle strings with punctuation correctly', () => {
        expect(words("Hello, world!")).toBeArray().toEqual(["Hello", "world"]);
    });

    it('should handle strings with multiple spaces correctly', () => {
        expect(words("This   is   spaced")).toBeArray().toEqual(["This", "is", "spaced"]);
    });

    it('should handle empty strings correctly', () => {
        expect(words("")).toBeArray().toEqual([]);
    });

    it('should handle strings with special characters correctly', () => {
        expect(words("foo@bar.com")).toBeArray().toEqual(["foo", "bar", "com"]);
    });

    it('should use custom pattern to split words', () => {
        expect(words("fred, barney, & pebbles", /[^, ]+/g)).toBeArray().toEqual(["fred", "barney", "&", "pebbles"]);
    });

    it('should split the string in places of numbers', () => {
        expect(words("one1two2three3", /[^0-9]+/g)).toBeArray().toEqual(["one", "two", "three"]);
    });

    it('should split the numbers to own strings', () => {
        expect(words("one 1 two 2 three 3")).toBeArray().toEqual(["one", "1", "two", "2", "three", "3"]);
    });

    it('should split after two uppercase letters', () => {
        expect(words("TESt")).toEqual(["TE", "St"]);
    });

});