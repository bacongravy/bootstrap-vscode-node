import sum from './sum';

describe('sum', () => {
  it('adds', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
