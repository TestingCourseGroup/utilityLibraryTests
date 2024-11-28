import countBy from '../src/countBy.js';
import baseAssignValue from '../src/.internal/baseAssignValue.js';
import reduce from '../src/reduce.js';

describe('Tests for countBy function', () => {
    it('should count elements by a boolean property', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
    });

    it('should count elements by a string property', () => {
        const users = [
            { 'user': 'barney', 'group': 'A' },
            { 'user': 'betty', 'group': 'B' },
            { 'user': 'fred', 'group': 'A' }
        ];
        expect(countBy(users, value => value.group)).toEqual({ 'A': 2, 'B': 1 });
    });

    it('should count elements by a number property', () => {
        const items = [
            { 'item': 'apple', 'quantity': 1 },
            { 'item': 'banana', 'quantity': 2 },
            { 'item': 'apple', 'quantity': 1 }
        ];
        expect(countBy(items, value => value.quantity)).toEqual({ '1': 2, '2': 1 });
    });

    it.only('should handle an empty collection', () => {
        expect(countBy([], value => value.active)).toBeEmpty();
    });

    it('should handle a collection with undefined values', () => {
        const items = [
            { 'item': 'apple', 'quantity': 1 },
            { 'item': 'banana', 'quantity': undefined },
            { 'item': 'apple', 'quantity': 1 }
        ];
        expect(countBy(items, value => value.quantity)).toEqual({ '1': 2, 'undefined': 1 });
    });

    it('should handle a collection with null values', () => {
        const items = [
            { 'item': 'apple', 'quantity': 1 },
            { 'item': 'banana', 'quantity': null },
            { 'item': 'apple', 'quantity': 1 }
        ];
        expect(countBy(items, value => value.quantity)).toEqual({ '1': 2, 'null': 1 });
    });

    it('should handle a collection with mixed types', () => {
        const items = [
            { 'item': 'apple', 'quantity': 1 },
            { 'item': 'banana', 'quantity': 'one' },
            { 'item': 'apple', 'quantity': 1 }
        ];
        expect(countBy(items, value => value.quantity)).toEqual({ '1': 2, 'one': 1 });
    });

    it('should handle the one item array', () => {
        const item = [{'name': 'John'}];
        expect(countBy(item, value => value.name)).toEqual({ 'John': 1});
    });
});
