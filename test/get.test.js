import get from '../src/get';

describe('Tests for get.js', () => {
  const object = { 
    a: [{ b: { c: 3 } }], 
    x: { y: 10 }, 
    z: null 
  };

  test('should get the value at a valid string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get the value at a valid array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return default value if resolved value is undefined and default is given', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBe('default');
  });

  test('should return undefined if resolved value is undefined', () => {
    expect(get(object, 'a[0].b.d')).toBeUndefined();
  });

  test('should return default value if path is invalid and default value is provided', () => {
    expect(get(object, 'invalid.path', 'default')).toBe('default');
  });

  test('should return undefined if path is invalid', () => {
    expect(get(object, 'invalid.path')).toBeUndefined();
  });

  test('should return default value for null object and default value is provided', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
  });

  test('should return undefined for null object and invalid path', () => {
    expect(get(null, 'a.b')).toBeUndefined();
  });

  test('should return default value for undefined object and default value is provided', () => {
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });

  test('should return undefined for undefined object and invalid path', () => {
    expect(get(undefined, 'a.b')).toBeUndefined();
  });
  
  test('should return null for valid path resolving to null', () => {
    expect(get(object, 'z')).toBeNull();
  });

  test('should work with top-level properties', () => {
    expect(get(object, 'x.y')).toBe(10);
  });

  test('should handle numeric paths correctly', () => {
    const array = [1, 2, { a: 3 }];
    expect(get(array, '2.a')).toBe(3);
    expect(get(array, [2, 'a'])).toBe(3);
  });

  test('should return default value if path is empty and default value is provided', () => {
    expect(get(object, '', 'default')).toBe('default');
  });

  test('should return undefined if path is empty', () => {
    expect(get(object, '')).toBeUndefined();
  });
});
