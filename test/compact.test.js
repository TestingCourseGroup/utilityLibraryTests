import compact from '../src/compact.js';

describe('compact function', () => {
    it('should removes empty elements from array', () => {
        expect(compact([1, 2, 3, 4, "", '', 5])).toEqual([1, 2, 3, 4, 5])
          toBeArrayOfSize(5);
    });

    it('should not  remove any elements from array', () => {
        expect(compact([2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    });

    it('removes NaN and false elements from array' , () => {
        expect(compact([false, NaN, 'koira', 'orava', 'kissa'])).toEqual(['koira', 'orava', 'kissa'])
          .toBeArrayOfSize(3);
    });

    it.only('removes all elements and returns an empty array', () => {
        expect(compact([false, undefined, NaN, 0, ''])).toBeEmpty();
    })
});
  
