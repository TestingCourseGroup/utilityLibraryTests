import filter from '../src/filter.js';

describe('Tests for filter function', () => {
    it('should return an array of elements that match the predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]).toBeArray();
    });

    it.skip('should return an empty array if no elements match the predicate', () => {
        const users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false }
        ];
        expect(filter(users, ({ active }) => active)).toEqual([]);
    });

    it.skip('should return an empty array if the input array is empty', () => {
        const result = filter([], ({ active }) => active);
        expect(result).toEqual([]);
    });

    it('should handle arrays with different types of elements', () => {
        const array = [1, 'two', 3, 'four'];
        const result = filter(array, value => typeof value === 'string');
        expect(result).toEqual(['two', 'four']);
    });

    it.skip('should handle null input array', () => {
        expect(filter(null, value => value)).toBeEmpty();
    });


    it('should return a new array and not mutate the original array', () => {
        const array = [1, 2, 3];
        const result = filter(array, value => value > 1);
        expect(result).toEqual([2, 3]);
        expect(array).toEqual([1, 2, 3]);
    });
});
