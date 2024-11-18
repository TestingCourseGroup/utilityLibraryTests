import ceil from '../src/ceil.js';

describe('ceil function', () => {
    it('Rounds up to bigger integer', () => {
        expect(ceil(5.010)).toBe(6); // 6 is the next integerto round up
    });
    it('rounds with two decimals', () => {
        expect(ceil(20.002,2)).toBe(20.01); // round up with two decimals
    });
    it('rounds up with 1 decimal', () => {
        expect(ceil(10.20001,1)).toBe(10.3); // Rounds up with one decimal
    });

    it('Rounds up to next hundred', () => {
        expect(ceil(2024,-2)).toBe(2100)
          .toBeInteger();
    });


    it('Rounds up to next ten', () => {
        expect(ceil(2024,-1)).toBe(2030)
          .toBeInteger();
    });
});