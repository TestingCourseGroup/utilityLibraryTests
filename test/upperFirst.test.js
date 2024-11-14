import upperFirst from '../src/upperFirst';

describe('Tests for upperFirst.js', () => {
  test('should convert the first character to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  test('should not change the string if the first character is already uppercase', () => {
    expect(upperFirst('Fred')).toBe('Fred');
  });

  test('should handle an empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should handle a string with only uppercase letters', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('should handle a string that starts with a non-alphabetic character', () => {
    expect(upperFirst('!hello')).toBe('!hello');
  });

  test('should handle a string that starts with a number', () => {
    expect(upperFirst('123abc')).toBe('123abc');
  });

  test('should return an empty string when passed null', () => {
    expect(upperFirst(null)).toBe('');
  });

  test('should return an empty string when passed undefined', () => {
    expect(upperFirst(undefined)).toBe('');
  });

  test('should not modify the string if it is a single uppercase letter', () => {
    expect(upperFirst('A')).toBe('A');
  });

  test('should handle strings with leading whitespace', () => {
    expect(upperFirst('  hello')).toBe('  hello');
  });

  test('should handle strings with multiple words', () => {
    expect(upperFirst('hello world')).toBe('Hello world');
  });
});
