/* eslint-disable import/no-unresolved */
import add from '@src/math/add';

describe('This is a tes ', () => {
  it('should pass', () => {
    expect(add(1, 3)).toBe(4);
  });
});
