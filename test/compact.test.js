import compact from '../src/compact.js';

describe('compact function', () => {
    it('removes empty elements from array', () => {
        expect(compact([1, 2, 3, 4, "", '', 5])).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]))
    });

    it('does not  remove any elements from array', () => {
        expect(compact([2, 3, 4, 5])).toEqual(expect.arrayContaining([2, 3, 4, 5]))
    });

    it('removes NaN and false elements from array' , () => {
        expect(compact([false, NaN, 'koira', 'orava', 'kissa'])).toEqual(expect.arrayContaining(['koira', 'orava', 'kissa']))
    });

    it('removes all elements and returns an empty array', () => {
        expect(compact([false, undefined, NaN, 0, ''])).toEqual([])
    })
});
  
// describe.skip('compact function', () => {
    // ... will be skipped
// });