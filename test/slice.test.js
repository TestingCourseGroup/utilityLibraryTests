import slice from '../src/slice';

describe('slice', () => {
  const array = [1, 2, 3, 4]; // Test array

  test('should return a slice of the array from start to end', () => {
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  test('should return the entire array if start is 0 and end is array length', () => {
    expect(slice(array, 0, array.length)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if start equals end', () => {
    expect(slice(array, 2, 2)).toEqual([]);
  });

  test('should return the rest of the array if only start is provided', () => {
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  test('should work with negative start index', () => {
    expect(slice(array, -2)).toEqual([3, 4]);
  });

  test('should work with negative end index', () => {
    expect(slice(array, 1, -1)).toEqual([2, 3]);
  });

  test('should return an empty array if start is out of bounds', () => {
    expect(slice(array, 5)).toEqual([]);
  });

  test('should return an empty array if start > end', () => {
    expect(slice(array, 3, 1)).toEqual([]);
  });

  test('should return an empty array if the input array is null or undefined', () => {
    expect(slice(null)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
  });

  test('should handle an empty array correctly', () => {
    expect(slice([])).toEqual([]);
    expect(slice([], 1, 3)).toEqual([]);
  });

  test('should handle non-integer values for start and end', () => {
    expect(slice(array, 1.5, 3.5)).toEqual([2, 3]);
  });

  test('should handle start greater than array length', () => {
    expect(slice(array, 10)).toEqual([]);
  });

  test('should handle negative start greater than array length', () => {
    expect(slice(array, -10)).toEqual([1, 2, 3, 4]);
  });

  test('should handle negative end greater than array length', () => {
    expect(slice(array, 0, -10)).toEqual([]);
  });
});
