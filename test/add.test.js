import add from '../src/add';  // Adjust the path to where your add.js is located

describe('add function', () => {
  it('correctly adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);  // 6 + 4 should equal 10
  });

  it('correctly adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);  // -6 + -4 should equal -10
  });

  it('correctly adds a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);  // 6 + -4 should equal 2
  });

  it('correctly adds zero and a number', () => {
    expect(add(0, 4)).toBe(4);  // 0 + 4 should equal 4
    expect(add(6, 0)).toBe(6);  // 6 + 0 should equal 6
  });

  it('returns the default value when no arguments are passed', () => {
    expect(add()).toBe(0);  // Since the default value is 0, it should return 0
  });
});
