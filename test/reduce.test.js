import reduce from '../src/reduce';

describe('Tests for reduce.js', () => {
  // Test for array collection with accumulator
  test('should sum elements of an array with an initial accumulator', () => {
    const array = [1, 2, 3];
    const sum = reduce(array, (acc, value) => acc + value, 0);
    expect(sum).toBe(6); // 1 + 2 + 3 = 6
  });

  // Test for array collection without accumulator (uses first element)
  test('should sum elements of an array without initial accumulator', () => {
    const array = [1, 2, 3];
    const sum = reduce(array, (acc, value) => acc + value);
    expect(sum).toBe(6); // 1 + 2 + 3 = 6
  });

  // Test for object collection with accumulator
  test('should group object values by key with an initial accumulator', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(object, (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    }, {});
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  // Test for object collection without accumulator (uses first element)
  test('should group object values by key without initial accumulator', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(object, (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    });
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  // Test for an empty array (should return undefined or the default accumulator value)
  test('should return undefined for an empty array without an accumulator', () => {
    const array = [];
    const result = reduce(array, (acc, value) => acc + value);
    expect(result).toBeUndefined();
  });

  // Test for an empty array with an accumulator
  test('should return the accumulator value for an empty array with an accumulator', () => {
    const array = [];
    const result = reduce(array, (acc, value) => acc + value, 10);
    expect(result).toBe(10); // Since array is empty, it should return the accumulator value
  });

  // Test for an empty object (should return undefined or the default accumulator value)
  test('should return undefined for an empty object without an accumulator', () => {
    const object = {};
    const result = reduce(object, (acc, value) => acc + value);
    expect(result).toBeUndefined();
  });

  // Test for an empty object with an accumulator
  test('should return the accumulator value for an empty object with an accumulator', () => {
    const object = {};
    const result = reduce(object, (acc, value) => acc + value, 5);
    expect(result).toBe(5); // Should return the accumulator value as the object is empty
  });
  
  // Edge case: array with one element (accumulator should not change)
  test('should return the only element of an array when there is no accumulator', () => {
    const array = [5];
    const result = reduce(array, (acc, value) => acc + value);
    expect(result).toBe(5); // Only one element, should return the element itself
  });
  
  // Test for object with a single key-value pair (no accumulator)
  test('should return the value of a single key-value pair object', () => {
    const object = { 'a': 10 };
    const result = reduce(object, (acc, value) => acc + value);
    expect(result).toBe(10); // Only one element, should return the element itself
  });
});
